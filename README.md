# Handlebars.js Resources plug-in for Grails

This plug-in is for precompiling emberjs's handlebars templates on the server side. It integrates with grails resources plugin to allow subsequent minification gzip and more.
It's a simple fork from Matt Sheehan's grails-handlebars-resources plugin but unlike the latter it does not declare any resource module.

The goals are:
* readability: templates are in plain text files (not in gsp, or in javascript strings). They can be along with the ember app.
* performance: (of course)

## Installation

add this line to BuildConfig.groovy
     runtime ":ember-handlebars-resources:0.1-SNAPSHOT"

**warning** : this plugin requires rhino 1.7R4 (and above). previous version should be excluded from other plugins. Typically, if you use lesscss resources and handlebars
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

Note: I chose '.embbars' to be the arbitrary extension managed by this plugin; My first thought was '.emberhandlebars' but it's just too long for me...

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

### Using in the Browser

Template functions are stored in the `Handlebars.templates` object using the template name. If the template name is
`person/show`, then the template function can be accessed from `Handlebars.templates['person/show']`. See the Template Names section for how template names are calculated.

See the [Handlebars.js website](http://handlebarsjs.com/) for more information on using Handlebars template functions.

## Template Names

Template names are based on the resource URL. If the URL is `templates/foo.handlebars`, then the template name will be `templates/foo`.
Note that the `.handlebars` extension is removed.

The default path separator is `/`. If you want to change it, you can specify a value for `templatesPathSeparator` in the configuration. For example,
adding

    grails.resources.mappers.handlebars.templatesPathSeparator = '.'

will change the template name to `templates.foo`.

If you specify a value for `templatesRoot` in the configuration, then that value will be stripped from the template name. For example, adding

    grails.resources.mappers.handlebars.templatesRoot = 'templates'

will change the template name to just `foo`.

## Configuration

All configuration variables should be relative to:

    grails.resources.mappers.handlebars

*   **templatesRoot**: The root folder of the templates relative to `web-app`. This value will be stripped from template paths when calculating the template name. Default is none.
*   **templatesPathSeparator**: The delimiter to use for template names. Default is `/`

## Changelog

### v0.3.1

*   fixed issue #2

### v0.3

*   changed default templatesPathSeparator to `/`

### v0.2

*   Updated template naming scheme to handle nested templates in a manner similar to the [ember-rails plugin](https://github.com/emberjs/ember-rails)