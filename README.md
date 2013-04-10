# Ember.js templates precompiler plug-in for Grails

This plug-in precompiles EmberJS powered Handlebars templates on the server side.

It integrates with grails resources plugin to allow subsequent minification, gzip and more.

It's a fork from Matt Sheehan's grails-handlebars-resources plugin with two differences :
- it specifically targets Handlebars templates with added EmberJS capabilities
- it does not declare any resource module.

The goals are:
* Cleanliness and readability: templates are compiled from plain text files (not embedded somewhere in a gsp, not in javascript strings) and can be in the same directory as your Ember Application is.
* Performance: (obviously)

## Installation

Add this line to BuildConfig.groovy plugins section :

        runtime ":ember-templates-precompiler:0.4.0"

**warning** : this plugin requires rhino 1.7R4 (and above). Previous versions should be excluded from other plugins. Typically, if you use lesscss resources and handlebars
resources plugin:

        compile (":lesscss-resources:1.3.0.3") {
            excludes([ group: 'rhino', name: 'js'],[name: 'rhino'])
        }
        runtime (":handlebars-resources:0.3.1")  {
            excludes([ group: 'rhino', name: 'js'],[name: 'rhino'])
        }

## Usage

You can see a possible usage of this plugin here : [grails-ember-trek](https://github.com/florent-blanvillain/grails-ember-trek)

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

Template names are based on `web-app` relative paths.
If the relative path is `js/ember-app/templates/user.embbars`, then the template name will be `"js/ember-app/templates/user"`.
The `.embbars` extension is of course removed.
The `templatesRoot` config value should be used to customize this name to your needs. For example, setting        http://www.envjs.com

    grails.resources.mappers.emberhandlebars.templatesRoot = 'js/ember-app/templates'

will change the template name to just `user`.

The plugin also supports multiple roots, but be aware of possible name conflicts. Example:

    grails.resources.mappers.emberhandlebars.templatesRoots = ['js/ember-app/templates','js/other-ember-app/templates']

The default path separator is `/`. If you want to change it, you can specify a value for `templatesPathSeparator` in the configuration. For example,
adding

    grails.resources.mappers.emberhandlebars.templatesPathSeparator = '.'

will change the template name to `js.ember-app.templates.user` (in the case you haven't set the templatesRoot config value).

## Configuration


All configuration variables should be relative to:

    grails.resources.mappers.emberhandlebars

*   **templatesRoot**: The root folder of the templates relative to `web-app`. This value will be stripped from template paths when calculating the template name. Default is none.
*   **templatesRoots**: The same as above but accepts a list.
*   **templatesPathSeparator**: The delimiter to use for template names. Default is `/`

## Notes


* The plugin makes internal use of `handlebars-xx.js` and `ember-template-compiler.js` which I found to be part of the distribution of ember after building ember.js myself. Those resources are not exposed.
* IntelliJ has a plugin for Handlebars, you can use it to highlight syntax of `*.embbars` files.

## Changelog

### v0.4.1

* compatible with `ember-1.0.0-rc.1` & `ember-1.0.0-rc.2` & current head
* got rid of ember itself and envjs -> results in performance enhancement
* log each compiled template name: `debug org.grails.plugin.ember.handlebars` in config/log4j closure

### v0.4.0

* updates : `ember-1.0.0-rc.1` and `handlebars-1.0.rc.3`
* in the previous version ember code was a little hacked, this is no longer the case due to the usage of [EnvJs](http://www.envjs.com).

### v0.3.0

* ember update: `ember-1.0.0-pre.4` and `handlebars-1.0.rc.2.js`

### v0.2.1

* non-blocking bug fix (learn more in commits comments)

### v0.2

* support for multiple templates roots

### v0.1

* first release : `ember-1.0.pre.js` and `handlebars-1.0.rc.1.js`
