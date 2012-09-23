package org.grails.plugin.handlebars

import grails.test.mixin.TestMixin
import grails.test.mixin.support.GrailsUnitTestMixin
import org.junit.Test
import org.junit.Before

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
    helpers = helpers || Ember.Handlebars.helpers;
    var foundHelper, self = this;
    data.buffer.push("<div>Simple</div>");
}
        """

        String compiledTemplate = precompiler.precompileTemplate('<div>Simple</div>')

        assert compiledTemplate.trim() == expected.trim()
    }

    @Test
    void precompile() {
        (1..3).each {
            File input = loadFile("input.${it}.handlebars")
            File expected = loadFile("output.${it}_handlebars.js")
            File target = File.createTempFile('target', '.js')

            precompiler.precompile(input, target, 'input')

            assert expected.text.trim() == target.text.trim()
        }
    }

    private File loadFile(String name) {
        new File(this.getClass().classLoader.getResource(name).file)
    }

}
