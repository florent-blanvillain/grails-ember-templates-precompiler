
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, escapeExpression = this.escapeExpression, self = this;
    function program1(depth0, data) {
        var buffer = "", stack1;
        data.buffer.push("\n    <b>Posts:</b> ");
        stack1 = helpers._triageMustache.call(depth0, "view.posts", {hash:{}, contexts:[depth0], data:data});
        data.buffer.push(escapeExpression(stack1) + "\n    <br>\n    <b>Hobbies:</b> ");
        stack1 = helpers._triageMustache.call(depth0, "view.hobbies", {hash:{}, contexts:[depth0], data:data});
        data.buffer.push(escapeExpression(stack1) + "\n");
        return buffer;
    }
    data.buffer.push("User: ");
    stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:{}, contexts:[depth0], data:data});
    data.buffer.push(escapeExpression(stack1) + " ");
    stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:{}, contexts:[depth0], data:data});
    data.buffer.push(escapeExpression(stack1) + "\n");
    stack1 = helpers.view.call(depth0, "App.InfoView", {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    return buffer;
}
);
}());
