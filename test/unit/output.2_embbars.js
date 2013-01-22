
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, stack2, foundHelper, hashTypes, escapeExpression = this.escapeExpression, self = this, functionType = "function", blockHelperMissing = helpers.blockHelperMissing;
    function program1(depth0, data) {
        var buffer = "", stack1, hashTypes;
        data.buffer.push("\n  <li>\n    <p>Hello, ");
        stack1 = {};
        hashTypes = {};
        stack1 = helpers._triageMustache.call(depth0, "name", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
        data.buffer.push(escapeExpression(stack1) + "</p>\n    <p>You are level ");
        stack1 = {};
        hashTypes = {};
        stack1 = helpers._triageMustache.call(depth0, "level", {hash:stack1, contexts:[depth0], types:["ID"], hashTypes:hashTypes, data:data});
        data.buffer.push(escapeExpression(stack1) + " </p>\n  </li>\n  ");
        return buffer;
    }
    data.buffer.push("<ul>\n  ");
    foundHelper = helpers.users;
    if (foundHelper) {
        stack1 = foundHelper.call(depth0, {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[], types:[], hashTypes:hashTypes, data:data});
    } else {
        stack1 = depth0.users;
        stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
    }
    stack2 = {};
    hashTypes = {};
    if (!helpers.users) {
        stack1 = blockHelperMissing.call(depth0, stack1, {hash:stack2, inverse:self.noop, fn:self.program(1, program1, data), contexts:[], types:[], hashTypes:hashTypes, data:data});
    }
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n</ul>");
    return buffer;
}
);
}());
