class HandlebarsResourcesGrailsPlugin {
    def version = "0.1"
    def grailsVersion = "1.3.5 > *"
    def dependsOn = [resources:'1.0 > *']
    def loadAfter = ['resources']
    def pluginExcludes = [
        "grails-app/views/error.gsp"
    ]
    def title = "EmberJS Handlebars Resources Plugin"
    def author = "Florent BLANVILLAIN"
    def authorEmail = "florent.blanvillain@gmail.com"
    def description = '''\
This plug-in supports using Handlebars.js templates with the Grails Resources Plugin. This plugin includes a resource mapper that will precompile
the template files into JavaScript and make it available for other resource processing, including minification and bundling.
It's a simple fork from Matt Sheehan grails-handlebars-resources plugin.
'''
    def documentation = "https://github.com/florent-blanvillain/grails-ember-handlebars-resources/blob/master/README.md"
    def license = "APACHE"
    def issueManagement = [ system: "github", url: "https://github.com/florent-blanvillain/grails-ember-handlebars-resources/issues" ]
    def scm = [ url: "https://github.com/florent-blanvillain/grails-ember-handlebars-resources" ]
}