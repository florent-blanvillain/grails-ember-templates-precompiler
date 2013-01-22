
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, hashTypes, escapeExpression = this.escapeExpression, self = this;
    function program1(depth0, data) {
        var buffer = "", stack1, hashTypes;
        data.buffer.push("\n    <b>Posts:</b> ");
        stack1 = {};
        hashTypes = {};
        stack1 = helpers._triageMustache.call(depth0, "view.posts", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
        data.buffer.push(escapeExpression(stack1) + "\n    <br>\n    <b>Hobbies:</b> ");
        stack1 = {};
        hashTypes = {};
        stack1 = helpers._triageMustache.call(depth0, "view.hobbies", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
        data.buffer.push(escapeExpression(stack1) + "\n");
        return buffer;
    }
    data.buffer.push("User: ");
    stack1 = {};
    hashTypes = {};
    stack1 = helpers._triageMustache.call(depth0, "firstName", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
    data.buffer.push(escapeExpression(stack1) + " ");
    stack1 = {};
    hashTypes = {};
    stack1 = helpers._triageMustache.call(depth0, "lastName", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
    data.buffer.push(escapeExpression(stack1) + "\n");
    stack1 = {};
    hashTypes = {};
    stack1 = helpers.view.call(depth0, "App.InfoView", {hash:stack1, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    return buffer;
}
);
}());
