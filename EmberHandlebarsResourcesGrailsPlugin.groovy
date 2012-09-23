class EmberHandlebarsResourcesGrailsPlugin {
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
This plug-in is for precompiling emberjs's handlebars templates on the server side. It integrates with grails resources plugin to allow subsequent minification gzip and more.
It's a simple fork from Matt Sheehan grails-handlebars-resources plugin but unlike the latter it does not declare any resource module.
'''
    def documentation = "https://github.com/florent-blanvillain/grails-ember-handlebars-resources/blob/master/README.md"
    def license = "APACHE"
    def issueManagement = [ system: "github", url: "https://github.com/florent-blanvillain/grails-ember-handlebars-resources/issues" ]
    def scm = [ url: "https://github.com/florent-blanvillain/grails-ember-handlebars-resources" ]
}