# Handlebars.js Resources plug-in for Grails

This plug-in is for precompiling emberjs's handlebars templates on the server side. It integrates with grails resources plugin to allow subsequent minification gzip and more.
It's a simple fork from Matt Sheehan's grails-handlebars-resources plugin but unlike the latter it does not declare any resource module.

The goals are:
* readability: templates are in plain text files (not in gsp, or in javascript strings). They can be along with the ember app.
* performance: (of course)

## Typical use case

# directory structure
>web-app
>├── js
>│   ├── ember-app
>│   │   ├── controllers
>│   │   │   ├── annuaire.js
>│   │   │   └── tabs.js
>│   │   ├── app.js
>│   │   ├── templates
>│   │   │   ├── annuaireitem.emberhandlebars
>│   │   │   └── tab.emberhandlebars
>│   │   └── views
>│   │       ├── annuaireItem.js
>│   │       ├── annuaire.js
>│   │       ├── tab.js
>│   │       └── tabs.js


## Installation

    add :
     runtime ":ember-handlebars-resources:0.1-SNAPSHOT"
    in BuildConfig.groovy
    warning : this plugin requires rhino 1.7R4 (and certainly above). previous version must be exclude from other plugins. Typically, if you use lesscss resources and handlebars
    resources plugin:
            compile (":lesscss-resources:1.3.0.3") {
                excludes([ group: 'rhino', name: 'js'],[name: 'rhino'])
            }
            runtime (":handlebars-resources:0.3.1")  {
                excludes([ group: 'rhino', name: 'js'],[name: 'rhino'])
            }

## Usage

### Declaring Resources

    application {
        dependsOn 'your-emberjs-and-handlebars-resource-module'
        resource url: 'templates/person.emberhandlebars', attrs: [type: 'js'], bundle:'bundle_application'
        resource url: 'templates/error.emberhandlebars', attrs: [type: 'js'], bundle:'bundle_application'
        resource url:'js/application.js'
    }

#### Settings

*   **dependsOn**: `handlebars` or `handlebars_runtime`. If only using precompiled templates the smaller handlebars_runtime should be used.
*   **url**: location of the handlebars template file.
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