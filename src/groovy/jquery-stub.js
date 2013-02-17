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

