
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, hashTypes, escapeExpression = this.escapeExpression;
    data.buffer.push("<div class=\"entry\">\n  <h1>");
    stack1 = {};
    hashTypes = {};
    stack1 = helpers._triageMustache.call(depth0, "title", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
    data.buffer.push(escapeExpression(stack1) + "</h1>\n  <div class=\"body\">\n    ");
    stack1 = {};
    hashTypes = {};
    stack1 = helpers._triageMustache.call(depth0, "body", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
    data.buffer.push(escapeExpression(stack1) + "\n  </div>\n</div>");
    return buffer;
}
);
}());
