(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self = this, escapeExpression = this.escapeExpression;
    data.buffer.push("<div class=\"entry\">\n  <h1>");
    stack1 = depth0;
    stack2 = "title";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "</h1>\n  <div class=\"body\">\n    ");
    stack1 = depth0;
    stack2 = "body";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\n  </div>\n</div>");
    return buffer;
}
);
}());