package org.grails.plugin.ember.handlebars

import org.codehaus.groovy.grails.commons.GrailsApplication
import org.codehaus.groovy.grails.plugins.support.aware.GrailsApplicationAware
import org.grails.plugin.resource.ResourceMeta
import org.grails.plugin.resource.mapper.MapperPhase
import org.grails.plugin.resource.JavaScriptBundleResourceMeta

/**
 * @author Matt Sheehan
 *
 * Precompile .handlebars template files into .js files.
 */
class EmberHandlebarsResourceMapper implements GrailsApplicationAware {

    GrailsApplication grailsApplication

    def phase = MapperPhase.GENERATION

    static defaultIncludes = ['**/*.embbars']

    def map(ResourceMeta resource, config) {

        Precompiler precompiler = new Precompiler()
        File originalFile = resource.processedFile
        File input = getOriginalFileSystemFile(resource.sourceUrl)

        String templateName = calculateTemplateName(resource, config)

        if (resource.sourceUrl && !resource instanceof JavaScriptBundleResourceMeta) {
            File target = new File(generateCompiledFileFromOriginal(originalFile.absolutePath))

            log.debug "Compiling emberjs handlebars file [${originalFile}] into [${target}]"

            try {
                precompiler.precompile input, target, templateName

                resource.processedFile = target
                resource.sourceUrlExtension = 'js'
                resource.contentType = 'text/javascript'
                resource.updateActualUrlFromProcessedFile()
            } catch (e) {
                log.error "error precompiling emberjs handlebars file: ${originalFile}", e
            }
        }
    }

    String calculateTemplateName(ResourceMeta resource, config) {
        String pathSeparator = getString(config, 'templatesPathSeparator', '/')
        List roots = getList(config, 'templatesRoot') ?: getList(config, 'templatesRoots')

        String templateName = resource.sourceUrl

        roots = roots.findAll().collect { root ->
            if (!root.startsWith('/')) {
                root = '/' + root
            }
            if (!root.endsWith('/')) {
                root += '/'
            }
            root
        }

        roots = roots.findAll {
            templateName.startsWith(it)
        }

        if (roots) {
            def closestRoot = roots.min { root ->
                templateName.size() - root.size()
            }

            templateName -= closestRoot
        }
        templateName = templateName.replaceAll(/(?i)\.embbars$/, '')
        templateName.split('/').findAll().join(pathSeparator)
    }

    private String getString(Map config, String key, String defaultVal = null) {
        config[key] instanceof String ? config[key] : defaultVal
    }

    private List<String> getList(Map config, String key) {
        if (config[key] instanceof String) {
            [config[key]]
        } else if (config[key] instanceof List<String>) {
            config[key]
        } else {
            []
        }
    }

    private String generateCompiledFileFromOriginal(String original) {
        original.replaceAll(/(?i)\.embbars$/, '_embbars.js')
    }

    private File getOriginalFileSystemFile(String sourcePath) {
        grailsApplication.parentContext.getResource(sourcePath).file
    }
}
