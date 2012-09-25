
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    var buffer = "", stack1, foundHelper, tmp1, self = this, escapeExpression = this.escapeExpression, functionType = "function", blockHelperMissing = helpers.blockHelperMissing;
    function program1(depth0, data) {
        var buffer = "", stack1, stack2, stack3;
        data.buffer.push("\n  <li>\n    <p>Hello, ");
        stack1 = depth0;
        stack2 = "name";
        stack3 = helpers._triageMustache;
        tmp1 = {};
        tmp1.hash = {};
        tmp1.contexts = [];
        tmp1.contexts.push(stack1);
        tmp1.data = data;
        stack1 = stack3.call(depth0, stack2, tmp1);
        data.buffer.push(escapeExpression(stack1) + "</p>\n    <p>You are level ");
        stack1 = depth0;
        stack2 = "level";
        stack3 = helpers._triageMustache;
        tmp1 = {};
        tmp1.hash = {};
        tmp1.contexts = [];
        tmp1.contexts.push(stack1);
        tmp1.data = data;
        stack1 = stack3.call(depth0, stack2, tmp1);
        data.buffer.push(escapeExpression(stack1) + " </p>\n  </li>\n  ");
        return buffer;
    }
    data.buffer.push("<ul>\n  ");
    foundHelper = helpers.users;
    stack1 = foundHelper || depth0.users;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    tmp1.data = data;
    if (foundHelper && typeof stack1 === functionType) {
        stack1 = stack1.call(depth0, tmp1);
    } else {
        stack1 = blockHelperMissing.call(depth0, stack1, tmp1);
    }
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n</ul>");
    return buffer;
}
);
}());
