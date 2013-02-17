
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [2, ">= 1.0.0-rc.3"];
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, options, hashTypes, escapeExpression = this.escapeExpression, self = this, functionType = "function", blockHelperMissing = helpers.blockHelperMissing;
    function program1(depth0, data) {
        var buffer = "", hashTypes;
        data.buffer.push("\n  <li>\n    <p>Hello, ");
        hashTypes = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{}, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data})));
        data.buffer.push("</p>\n    <p>You are level ");
        hashTypes = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "level", {hash:{}, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data})));
        data.buffer.push(" </p>\n  </li>\n  ");
        return buffer;
    }
    data.buffer.push("<ul>\n  ");
    options = {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[], types:[], hashTypes:hashTypes, data:data};
    if (stack1 = helpers.users) {
        stack1 = stack1.call(depth0, options);
    } else {
        stack1 = depth0.users;
        stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
    }
    hashTypes = {};
    if (!helpers.users) {
        stack1 = blockHelperMissing.call(depth0, stack1, options);
    }
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n</ul>");
    return buffer;
}
);
}());
