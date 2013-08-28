
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4, ">= 1.0.0"];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = "", hashTypes, hashContexts, escapeExpression = this.escapeExpression;
    data.buffer.push("<div class=\"entry\">\n  <h1>");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("</h1>\n  <div class=\"body\">\n    ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "body", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("\n  </div>\n</div>");
    return buffer;
}
);
}());
