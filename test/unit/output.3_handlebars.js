
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self = this, escapeExpression = this.escapeExpression;
    function program1(depth0, data) {
        var buffer = "", stack1, stack2, stack3;
        data.buffer.push("\n    <b>Posts:</b> ");
        stack1 = depth0;
        stack2 = "view.posts";
        stack3 = helpers._triageMustache;
        tmp1 = {};
        tmp1.hash = {};
        tmp1.contexts = [];
        tmp1.contexts.push(stack1);
        tmp1.data = data;
        stack1 = stack3.call(depth0, stack2, tmp1);
        data.buffer.push(escapeExpression(stack1) + "\n    <br>\n    <b>Hobbies:</b> ");
        stack1 = depth0;
        stack2 = "view.hobbies";
        stack3 = helpers._triageMustache;
        tmp1 = {};
        tmp1.hash = {};
        tmp1.contexts = [];
        tmp1.contexts.push(stack1);
        tmp1.data = data;
        stack1 = stack3.call(depth0, stack2, tmp1);
        data.buffer.push(escapeExpression(stack1) + "\n");
        return buffer;
    }
    data.buffer.push("User: ");
    stack1 = depth0;
    stack2 = "firstName";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + " ");
    stack1 = depth0;
    stack2 = "lastName";
    stack3 = helpers._triageMustache;
    tmp1 = {};
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    data.buffer.push(escapeExpression(stack1) + "\n");
    stack1 = depth0;
    stack2 = "App.InfoView";
    stack3 = helpers.view;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.contexts = [];
    tmp1.contexts.push(stack1);
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    tmp1.data = data;
    stack1 = stack3.call(depth0, stack2, tmp1);
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    return buffer;
}
);
}());
