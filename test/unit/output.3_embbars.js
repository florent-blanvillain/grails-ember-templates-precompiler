
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [2, ">= 1.0.0-rc.3"];
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, hashTypes, escapeExpression = this.escapeExpression, self = this;
    function program1(depth0, data) {
        var buffer = "", hashTypes;
        data.buffer.push("\n    <b>Posts:</b> ");
        hashTypes = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.posts", {hash:{}, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data})));
        data.buffer.push("\n    <br>\n    <b>Hobbies:</b> ");
        hashTypes = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.hobbies", {hash:{}, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data})));
        data.buffer.push("\n");
        return buffer;
    }
    data.buffer.push("User: ");
    hashTypes = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "firstName", {hash:{}, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data})));
    data.buffer.push(" ");
    hashTypes = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "lastName", {hash:{}, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data})));
    data.buffer.push("\n");
    hashTypes = {};
    stack1 = helpers.view.call(depth0, "App.InfoView", {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    return buffer;
}
);
}());
