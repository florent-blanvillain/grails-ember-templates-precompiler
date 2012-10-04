# Ember.js templates resources plug-in for Grails

This plug-in precompiles EmberJS powered Handlebars templates on the server side.

It integrates with grails resources plugin to allow subsequent minification, gzip and more.

It's a fork from Matt Sheehan's grails-handlebars-resources plugin with two differences :
- it specifically targets Handlebars heavily customized by EmberJs templates
- it does not declare any resource module.

The goals are:
* Cleanliness and readability: templates are compiled from plain text files (not embedded somewhere in a gsp, not in javascript strings) and can be in the same directory as your Ember Application is.
* Performance: (obviously)

## Installation

add this line to BuildConfig.groovy
     runtime ":ember-handlebars-resources:0.1"

**warning** : this plugin requires rhino 1.7R4 (and above). Previous versions should be excluded from other plugins. Typically, if you use lesscss resources and handlebars
resources plugin:

        compile (":lesscss-resources:1.3.0.3") {
            excludes([ group: 'rhino', name: 'js'],[name: 'rhino'])
        }
        runtime (":handlebars-resources:0.3.1")  {
            excludes([ group: 'rhino', name: 'js'],[name: 'rhino'])
        }

## Usage

### Directory Structure Example

    web-app
    ├── js
    │   ├── emberapp
    │   │   ├── app.js
    │   │   ├── controllers
    │   │   │   ├── user.js
    │   │   │   └── tabs.js
    │   │   ├── templates
    │   │   │   ├── user.embbars
    │   │   │   └── tab.embbars
    │   │   └── views
    │   │       ├── user.js
    │   │       ├── tab.js

Note: I chose '.embbars' to be the arbitrary extension managed by this plugin; My first clean thought was `.emberhandlebars` but it was just too long for me...

### Declaring Resources (following the previous example)

    emberapp {
        dependsOn 'handlebars,emberjs' // previously declared modules
        resource url: 'js/ember-app/app.js'
        resource url: 'js/ember-app/controllers/user.js'
        resource url: 'js/ember-app/controllers/tabs.js'
        resource url: 'js/ember-app/templates/user.embbars', attrs: [type: 'js'], bundle:'bundle_emberapp'
        resource url: 'js/ember-app/templates/tab.embbars', attrs: [type: 'js'], bundle:'bundle_emberapp'
        resource url: 'js/ember-app/views/user.js'
        resource url: 'js/ember-app/views/tab.js'
    }

*   **attrs[type]**: must be `js`.
*   **bundle**: must be set as will not default correctly. To add to default bundle use `bundle_<module name>`.

### Using with Ember.js views

Simply give the template name (see next section) to the view:

    userView = Ember.View.extend({
        templateName: 'user'
    });

See the [Ember.js Handlebars section](http://emberjs.com/documentation/#toc_describing-your-ui-with-handlebars) for more information.

## Template Names

Template names are based on the resource relative paths.
If the relative path to the `web-app` directory is `js/ember-app/templates/foo.embbars`, then the template name will be `js/ember-app/templates/user`.
The `.embbars` extension is of course removed.
The `templatesRoot` config value should be used to customize this name to your needs. For example, adding

    grails.resources.mappers.emberhandlebars.templatesRoot = 'js/ember-app/templates'

will change the template name to just `user`.

The default path separator is `/`. If you want to change it, you can specify a value for `templatesPathSeparator` in the configuration. For example,
adding

    grails.resources.mappers.emberhandlebars.templatesPathSeparator = '.'

will change the template name to `js.ember-app.templates.user` in the case you have left the templatesRoot config value to its default.

## Configuration

All configuration variables should be relative to:

    grails.resources.mappers.emberhandlebars

*   **templatesRoot**: The root folder of the templates relative to `web-app`. This value will be stripped from template paths when calculating the template name. Default is none.
*   **templatesPathSeparator**: The delimiter to use for template names. Default is `/`

## Notes

* In the current 0.1 version, the plugin makes internal use of `ember-1.0.pre.js` and `handlebars-1.0.rc.1.js`. Those resources are not exposed.
* headless-ember.js (from github's ember code repo) is used (various stubs, such as the window object), so that ember can be used in rhino.
* IntelliJ has a plugin for Handlebars, you can use it to highlight syntax of `*.embbars` files.

## Changelog

### v0.1

* first release