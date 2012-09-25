package org.grails.plugin.ember.handlebars

import org.mozilla.javascript.Scriptable
import org.mozilla.javascript.Function
import org.mozilla.javascript.Context
import org.mozilla.javascript.tools.shell.Global

class Precompiler {

    private Scriptable scope
    private Function precompile

    Precompiler(Map options = [:]) {
        ClassLoader classLoader = getClass().classLoader
        URL handlebars = classLoader.getResource('handlebars-1.0.rc.1.js')
        URL headlessEmberjs = classLoader.getResource('headless-ember.js')  // file from ember github project, it brings some fake objects (like windows), so rhino can swallow ember.js
        URL emberjs = classLoader.getResource('ember-1.0.pre.js')
        Context cx = Context.enter()
        cx.optimizationLevel = 9
        Global global = new Global()
        global.init cx
        scope = cx.initStandardObjects(global)
        cx.evaluateString scope, handlebars.text, handlebars.file, 1, null
        cx.evaluateString scope, headlessEmberjs.text, headlessEmberjs.file, 1, null
        cx.evaluateString scope, emberjs.text, emberjs.file, 1, null
        precompile = scope.get("precompileEmberHandlebars", scope) // function from headless ember, thanks guys.. (it doesn't work when accessing from Ember.Handlebars.precompile)
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
