
(function(){
    Ember.TEMPLATES['input'] = Ember.Handlebars.template(
function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [3, ">= 1.0.0-rc.4"];
    helpers = helpers || Ember.Handlebars.helpers;
    data = data || {};
    var buffer = "", stack1, hashTypes, hashContexts, options, escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
    function program1(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n    <b>Posts:</b> ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.posts", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n    <br>\n    <b>Hobbies:</b> ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.hobbies", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n");
        return buffer;
    }
    function program3(depth0, data) {
        var buffer = "", stack1, hashTypes, hashContexts;
        data.buffer.push("\n    <ul class=\"nav nav-list span2\" style=\"width: 100%\">\n        <li><strong><a href=\"#resume\">Informations g\xe9n\xe9rales</a></strong></li>\n        <li><strong><a ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers.action.call(depth0, "highlight", "offers", {hash:{}, contexts:[depth0, depth0], types:["ID", "STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push(">Offres</a></strong></li>\n        ");
        hashTypes = {};
        hashContexts = {};
        stack1 = helpers.each.call(depth0, "offers", {hash:{}, inverse:self.program(7, program7, data), fn:self.program(4, program4, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
        if (stack1 || stack1 === 0) {
            data.buffer.push(stack1);
        }
        data.buffer.push("\n        <li><strong><a ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers.action.call(depth0, "highlight", "references", {hash:{}, contexts:[depth0, depth0], types:["ID", "STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push(">Ref\xe9rences</a></strong></li>\n        ");
        hashTypes = {};
        hashContexts = {};
        stack1 = helpers.each.call(depth0, "references", {hash:{}, inverse:self.program(12, program12, data), fn:self.program(9, program9, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
        if (stack1 || stack1 === 0) {
            data.buffer.push(stack1);
        }
        data.buffer.push("\n    </ul>\n");
        return buffer;
    }
    function program4(depth0, data) {
        var buffer = "", stack1, hashContexts, hashTypes;
        data.buffer.push("\n            ");
        hashContexts = {"tagName":depth0};
        hashTypes = {"tagName":"STRING"};
        stack1 = helpers.view.call(depth0, {hash:{"tagName":("li")}, inverse:self.noop, fn:self.program(5, program5, data), contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
        if (stack1 || stack1 === 0) {
            data.buffer.push(stack1);
        }
        data.buffer.push("\n        ");
        return buffer;
    }
    function program5(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("<a ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers.action.call(depth0, "highlightOffer", "view._parentView.contentIndex", {hash:{}, contexts:[depth0, depth0], types:["ID", "ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push(">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("</a>");
        return buffer;
    }
    function program7(depth0, data) {
        data.buffer.push("\n            <li>Aucune offre</li>\n        ");
    }
    function program9(depth0, data) {
        var buffer = "", stack1, hashContexts, hashTypes;
        data.buffer.push("\n            ");
        hashContexts = {"tagName":depth0};
        hashTypes = {"tagName":"STRING"};
        stack1 = helpers.view.call(depth0, {hash:{"tagName":("li")}, inverse:self.noop, fn:self.program(10, program10, data), contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
        if (stack1 || stack1 === 0) {
            data.buffer.push(stack1);
        }
        data.buffer.push("\n        ");
        return buffer;
    }
    function program10(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("<a ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers.action.call(depth0, "highlightReference", "view._parentView.contentIndex", {hash:{}, contexts:[depth0, depth0], types:["ID", "ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push(">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("</a>");
        return buffer;
    }
    function program12(depth0, data) {
        data.buffer.push("\n            <li>Aucune r\xe9f\xe9rence</li>\n        ");
    }
    function program14(depth0, data) {
        var buffer = "", stack1, hashTypes, hashContexts, options;
        data.buffer.push("\n    ");
        hashTypes = {};
        hashContexts = {};
        options = {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
        data.buffer.push(escapeExpression(((stack1 = helpers.partial), stack1 ? stack1.call(depth0, "user_info", options) : helperMissing.call(depth0, "partial", "user_info", options))));
        data.buffer.push("\n");
        return buffer;
    }
    function program16(depth0, data) {
        var buffer = "", hashTypes, hashContexts;
        data.buffer.push("\n    Last Login: ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "lastLogin", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n    User Info: ");
        hashTypes = {};
        hashContexts = {};
        data.buffer.push(escapeExpression(helpers.template.call(depth0, "user_info", {hash:{}, contexts:[depth0], types:["STRING"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
        data.buffer.push("\n");
        return buffer;
    }
    data.buffer.push("User: ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "firstName", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push(" ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "lastName", {hash:{}, contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("\n");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers.view.call(depth0, "App.InfoView", {hash:{}, inverse:self.noop, fn:self.program(1, program1, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["if"].call(depth0, "isLoaded", {hash:{}, inverse:self.noop, fn:self.program(3, program3, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["with"].call(depth0, "currentUser", {hash:{}, inverse:self.noop, fn:self.program(14, program14, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n");
    hashTypes = {};
    hashContexts = {};
    stack1 = helpers["with"].call(depth0, "loggedInUser", {hash:{}, inverse:self.noop, fn:self.program(16, program16, data), contexts:[depth0], types:["ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data});
    if (stack1 || stack1 === 0) {
        data.buffer.push(stack1);
    }
    data.buffer.push("\n<div>");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "helperName", "somePropertyThatDoesntChange", {hash:{}, contexts:[depth0, depth0], types:["ID", "ID"], hashContexts:hashContexts, hashTypes:hashTypes, data:data})));
    data.buffer.push("</div>\n");
    hashContexts = {"value":depth0};
    hashTypes = {"value":"ID"};
    options = {hash:{"value":("name")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.input), stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n");
    hashContexts = {"type":depth0, "checked":depth0};
    hashTypes = {"type":"ID", "checked":"ID"};
    options = {hash:{"type":("checkbox"), "checked":("isActive")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.input), stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n");
    hashContexts = {"value":depth0};
    hashTypes = {"value":"ID"};
    options = {hash:{"value":("name")}, contexts:[], types:[], hashContexts:hashContexts, hashTypes:hashTypes, data:data};
    data.buffer.push(escapeExpression(((stack1 = helpers.textarea), stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
    return buffer;
}
);
}());
