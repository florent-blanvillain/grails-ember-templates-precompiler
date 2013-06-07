package org.grails.plugin.ember.handlebars

import grails.test.mixin.TestMixin
import grails.test.mixin.support.GrailsUnitTestMixin
import org.junit.Before
import org.junit.Test

@TestMixin(GrailsUnitTestMixin)
class PrecompilerTests {

    Precompiler precompiler

    @Before
    void setUp() {
        precompiler = new Precompiler()
    }

    @Test
    void "precompiling does not result in a rhino object"() {
        String compiledTemplate = precompiler.precompileTemplate('<div>Simple</div>')
        assert !compiledTemplate.contains("org.mozilla.javascript")
    }

    @Test
    void precompileTemplate() {
        String expected = """
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [3, ">= 1.0.0-rc.4"];
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    data.buffer.push("<div>Simple</div>");
}
        """

        String compiledTemplate = precompiler.precompileTemplate('<div>Simple</div>')

        assert compiledTemplate.trim() == expected.trim()
    }

    @Test
    void precompile1() {
        File input = loadFile("input.1.embbars")
        File expected = loadFile("output.1_embbars.js")
        File target = File.createTempFile('target', '.js')

        precompiler.precompile(input, target, 'input')

        assert expected.text.trim() == target.text.trim()
    }

    @Test
    void precompile2() {
        File input = loadFile("input.2.embbars")
        File expected = loadFile("output.2_embbars.js")
        File target = File.createTempFile('target', '.js')

        precompiler.precompile(input, target, 'input')

        assert expected.text.trim() == target.text.trim()
    }

    @Test
    void precompile3() {
        File input = loadFile("input.3.embbars")
        File expected = loadFile("output.3_embbars.js")
        File target = File.createTempFile('target', '.js')

        precompiler.precompile(input, target, 'input')

        assert expected.text.trim() == target.text.trim()
    }

    private File loadFile(String name) {
        new File(this.getClass().classLoader.getResource(name).file)
    }

}
