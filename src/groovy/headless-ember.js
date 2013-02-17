// DOM
var Element = {};
Element.firstChild = function () { return Element; };
Element.innerHTML = function () { return Element; };

var document = { createRange: false, createElement: function() { return Element; } };
var window = this;
this.document = document;

// Console
var console = window.console = {};
console.log = console.info = console.warn = console.error = function(){};

// jQuery
window.ENV = window.ENV || {};
// Don't worry about jQuery version
ENV['FORCE_JQUERY'] = true;
var jQuery = window.jQuery = function() { return jQuery; };
jQuery.ready = function() { return jQuery; };
jQuery.inArray = function() { return jQuery; };
jQuery.jquery = "1.9.1";
jQuery.event = { fixHooks: {} };
var $ = jQuery;

// Ember
function precompileEmberHandlebars(string) {
  return Ember.Handlebars.precompile(string).toString();
}
