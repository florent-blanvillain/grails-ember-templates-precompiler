package org.grails.plugin.ember.handlebars

import org.mozilla.javascript.Scriptable
import org.mozilla.javascript.Function
import org.mozilla.javascript.Context
import org.mozilla.javascript.tools.shell.Global

class Precompiler {

    private Scriptable scope
    private Function precompile

    Precompiler() {
        ClassLoader classLoader = getClass().classLoader
        URL envjs = classLoader.getResource('env.rhino.1.2.js')
        URL handlebars = classLoader.getResource('handlebars-1.0.rc.3.js')
        URL jqueryStub = classLoader.getResource('jquery-stub.js')  // simulates jquery
        URL emberjs = classLoader.getResource('ember-1.0.0-rc.1.js')
        Context cx = Context.enter()
        cx.optimizationLevel = -1
        Global global = new Global()
        global.init cx
        scope = cx.initStandardObjects(global)
        cx.evaluateString scope, envjs.text, envjs.file, 1, null
        cx.evaluateString scope, handlebars.text, handlebars.file, 1, null
        cx.evaluateString scope, jqueryStub.text, jqueryStub.file, 1, null
        cx.evaluateString scope, emberjs.text, emberjs.file, 1, null
        cx.evaluateString scope, """
function precompileEmberHandlebars(string) {
  return Ember.Handlebars.precompile(string).toString();
}
""", "", 1, null
        precompile = scope.get("precompileEmberHandlebars", scope)
        Context.exit();
    }

    void precompile(File input, File target, templateName) {
        String compiledTemplate = precompileTemplate(input.text)

        String output = """
(function(){
    Ember.TEMPLATES['$templateName'] = Ember.Handlebars.template($compiledTemplate);
}());
"""
        target.write output
    }

    String precompileTemplate(String contents) {
        call precompile, contents
    }

    private synchronized String call(Function fn, Object[] args) {
        Context.call(null, fn, scope, scope, args)
    }
}
