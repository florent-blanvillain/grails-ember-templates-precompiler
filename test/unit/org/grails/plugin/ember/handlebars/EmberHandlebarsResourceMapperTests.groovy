package org.grails.plugin.ember.handlebars

import grails.test.mixin.TestMixin
import grails.test.mixin.support.GrailsUnitTestMixin
import org.junit.Test
import org.junit.Before
import org.grails.plugin.resource.ResourceMeta

@TestMixin(GrailsUnitTestMixin)
class EmberHandlebarsResourceMapperTests {

    EmberHandlebarsResourceMapper mapper

    @Before
    void setUp() {
        mapper = new EmberHandlebarsResourceMapper()
    }

    @Test
    void calculateTemplateName() {
        ResourceMeta resource = new ResourceMeta()
        Map config = [:]

        resource.sourceUrl = '/templates/test.emberhandlebars'
        assert 'templates/test' == mapper.calculateTemplateName(resource, config)

        resource.sourceUrl = '/js/test.emberhandlebars'
        assert 'js/test' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = 'js'
        resource.sourceUrl = '/js/test.emberhandlebars'
        assert 'test' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = 'js/templates'
        resource.sourceUrl = '/js/templates/test.emberhandlebars'
        assert 'test' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = 'js/templates/'
        resource.sourceUrl = '/js/templates/test.emberhandlebars'
        assert 'test' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = '/js/templates'
        resource.sourceUrl = '/js/templates/test.emberhandlebars'
        assert 'test' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = 'templates'
        resource.sourceUrl = '/js/templates/test.emberhandlebars'
        assert 'js/templates/test' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = 'templates'
        resource.sourceUrl = '/templates/test.html'
        assert 'test.html' == mapper.calculateTemplateName(resource, config)

        config.templatesRoot = 'templates'
        config.templatesPathSeparator = '-'
        resource.sourceUrl = '/templates/foo/bar/test.emberhandlebars'
        assert 'foo-bar-test' == mapper.calculateTemplateName(resource, config)
    }
}
