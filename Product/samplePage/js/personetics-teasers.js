/**
 * @preserve Personetics story widget 
 * API version: v1.0
 * Client version: R2018.1.24_core7.1_5
 * Generated on: 01-28-18
 */

(function(window, Personetics, $, Handlebars, undefined){

this["Personetics"] = this["Personetics"] || {};
this["Personetics"]["UI"] = this["Personetics"]["UI"] || {};
this["Personetics"]["UI"]["Handlebars"] = this["Personetics"]["UI"]["Handlebars"] || {};
this["Personetics"]["UI"]["Handlebars"]["templates"] = this["Personetics"]["UI"]["Handlebars"]["templates"] || {};

this["Personetics"]["UI"]["Handlebars"]["templates"]["block-bar-chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pstory-block-frame pstory-block-bar-chart pstory-block-bar-chart "
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.direction || (depth0 != null ? depth0.direction : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"direction","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"pstory-block-container\">\r\n        <div class=\"pstory-block-content\">\r\n            <div class=\"pstory-bar-chart\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["block-line-chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pstory-block-frame pstory-block-line-chart pstory-block-line-chart "
    + container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"pstory-block-container\">\r\n        <div class=\"pstory-block-content\">\r\n            <div class=\"pstory-line-chart\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["block-pie-chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pstory-block-frame pstory-block-pie-chart\">\r\n    <div class=\"pstory-block-container\">\r\n        <div class=\"pstory-block-content\">\r\n            <div class=\"pstory-pie-chart\"></div>\r\n            <div class=\"pstory-pie-data\">\r\n                <div class=\"pstory-next-arrow\"></div>\r\n                <div class=\"pstory-pie-info\">\r\n                </div>\r\n                <div class=\"pstory-previous-arrow\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["block-pinGraph-chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pstory-block-frame pstory-block-pinGraph-chart_"
    + container.escapeExpression(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + " pstory-block-pinGraph-chart\">\r\n    <div class=\"pstory-block-container\">\r\n        <div class=\"pstory-block-content\">\r\n            <div class=\"pstory-pinGraph-chart\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["block-spline-chart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pstory-block-frame pstory-block-spline-chart\">\r\n    <div class=\"pstory-block-container\">\r\n        <div class=\"pstory-block-content\">\r\n            <div class=\"pstory-spline-chart\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["filter-inbox-template"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<ul role=\"tablist\">\r\n	<li role=\"tab\" class =\"perso-teaser-filter-tab selected\" data-id=\"all\" aria-selected=\"true\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.texts : depth0)) != null ? stack1.ttlinboxAll : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.texts : depth0)) != null ? stack1.ttlinboxAll : stack1), depth0))
    + "</li>\r\n	<li role=\"tab\" class =\"perso-teaser-filter-tab\" data-id=\"unread\" aria-selected=\"false\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.texts : depth0)) != null ? stack1.ttlinboxUnread : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.texts : depth0)) != null ? stack1.ttlinboxUnread : stack1), depth0))
    + "</li>\r\n	<li role=\"tab\" class =\"perso-teaser-filter-tab\" data-id=\"flagged\" aria-selected=\"false\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.texts : depth0)) != null ? stack1.ttlinboxHighlighted : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.texts : depth0)) != null ? stack1.ttlinboxHighlighted : stack1), depth0))
    + "</li>\r\n</ul>\r\n";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["doubleBox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"teaser-body\">\r\n        <div class=\"pstory-block-hbox-columns-frame double-box-container\">\r\n            <div class=\"pstory-hbox-column-frame\" data-width=\"6\">\r\n\r\n                <div class=\"pstory-hbox-column-frame perso-double-box perso-double-box-left\" data-v-align=\"middle\" data-width=\"12\">\r\n                    <div class=\"pstory-block-frame pstory-block-text\">\r\n                        <div class=\"pstory-block-content perso-double-box-value\">\r\n                            <span>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0["box-value1"] : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"pstory-block-frame pstory-block-text\">\r\n                        <div class=\"pstory-block-content perso-double-box-text\">\r\n                            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["box-label1"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"pstory-hbox-column-frame\" data-width=\"6\">\r\n\r\n                <div class=\"pstory-hbox-column-frame perso-double-box perso-double-box-right\" data-v-align=\"middle\" data-width=\"12\">\r\n                    <div class=\"pstory-block-frame pstory-block-text\">\r\n                        <div class=\"pstory-block-content perso-double-box-value solid-colored\">\r\n                            <span>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0["box-value2"] : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"pstory-block-frame pstory-block-text\">\r\n                        <div class=\"pstory-block-content perso-double-box-text \">\r\n                            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["box-label2"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["horizontalBar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"pstory-block-hbox-columns-frame teaser-body\">\r\n        <div class=\"pstory-hbox-column-frame\" data-width=\"12\" id=\""
    + alias1(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.chart : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["horizontalBarAndBox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"pstory-block-hbox-columns-frame teaser-body\">\r\n        <div class=\"pstory-hbox-column-frame\" data-width=\"8\">\r\n            <div id=\""
    + alias1(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.chart : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n        </div>\r\n\r\n        <div class=\"pstory-hbox-column-frame left-separator\" data-width=\"4\" data-v-align=\"middle\">\r\n            <div class=\"pstory-block-hbox-columns-frame\">\r\n                <div class=\"pstory-block-frame pstory-block-text\">\r\n                    <div class=\"pstory-block-content\">\r\n                        "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0["box-label"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                    </div>\r\n                </div>\r\n                <div class=\"pstory-block-frame pstory-block-text perso-percent-small\">\r\n                    <div class=\"pstory-block-content\">\r\n                        <span class=\"pluse\">+</span>\r\n                            "
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0["box-value"] : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <!--<div class=\"teaser-body\">-->\r\n    <!--</div>-->\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","hash":{"isAbsoluteURL":((stack1 = (depth0 != null ? depth0["main-image"] : depth0)) != null ? stack1.isAbsoluteURL : stack1),"backgroundImage":((stack1 = (depth0 != null ? depth0["main-image"] : depth0)) != null ? stack1.absUrl : stack1)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["imageAndBox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"pstory-block-hbox-columns-frame teaser-body\">\r\n        <div class=\"pstory-hbox-column-frame\" data-width=\"6\">\r\n            <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.absUrl : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["main-image"] : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" style=\"max-height: 100%; max-width: 100%\" />\r\n        </div>\r\n        <div class=\"pstory-hbox-column-frame\" data-v-align=\"middle\" data-width=\"6\">\r\n            \r\n            <div class=\"pstory-block-hbox-columns-frame\">\r\n\r\n                <div class=\"pstory-block-frame pstory-block-text\">\r\n                    <div class=\"pstory-block-content\">\r\n                        "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["box-label"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                    </div>\r\n                </div>\r\n                <div class=\"pstory-block-frame pstory-block-text perso-percent-large\">\r\n                    <div class=\"pstory-block-content\">\r\n                        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0["box-value"] : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["pie"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"pstory-block-hbox-columns-frame teaser-body\">\r\n        <div class=\"pstory-hbox-column-frame perso-first-pie\" data-width=\"4\">\r\n            <div id=\""
    + alias4(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.chart1 : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n            <div class=\"pstory-block-frame pstory-block-text perso-pie-text block-title\">\r\n                <div class=\"pstory-block-content\">\r\n                    "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.label1 : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"pstory-hbox-column-frame perso-second-pie\" data-width=\"4\">\r\n            <div id=\""
    + alias4(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.chart2 : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n            <div class=\"pstory-block-frame pstory-block-text perso-pie-text block-title\">\r\n                <div class=\"pstory-block-content\">\r\n                    "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.label2 : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"pstory-hbox-column-frame perso-last-pie\" data-width=\"4\">\r\n            <div id=\""
    + alias4(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.chart3 : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n            <div class=\"pstory-block-frame pstory-block-text perso-pie-text block-title\">\r\n                <div class=\"pstory-block-content\">\r\n                    "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.label3 : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["pinChart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"teaser-body\" id=\""
    + alias1(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.chart : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["simpleText"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["teaserHeader"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"teaser-header\">\r\n    <div class=\"pstory-block-hbox-columns-frame teaser-top\">\r\n        <div class=\"pstory-hbox-column-frame\" data-width=\"1.5\">\r\n            <div class=\"pstory-block-frame pstory-block-date-box\">\r\n                <div class=\"pstory-block-content\">\r\n                    <div class=\"pstory-block-date\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.day : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.month : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.year : stack1), depth0))
    + "</div>\r\n                    <div class=\"perso-double-v\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"pstory-block-frame\" data-width=\"9\" data-v-align=\"middle\">\r\n        <div class=\"pstory-block-content header-title\">\r\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.title : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"pstory-block-frame pstory-block-text teaser-text\">\r\n        <div class=\"pstory-block-content\">\r\n            "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0["teaser-text"] : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["teaserWidgetError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class='teaser-widget-error-wrapper'>\r\n    <div class='teaser-widget-error-container'>\r\n        <div class='teaser-widget-error-title'>Oh No!</div>\r\n        <div class='teaser-widget-error-icon'></div>\r\n        <div class='teaser-widget-error-text'>"
    + ((stack1 = ((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorMessage","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["teaserWrapperPartial"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "perso-highlighted";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isAbsoluteURL : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"             ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " class=\"image\" style=\"background-image: url("
    + container.escapeExpression(((helper = (helper = helpers.backgroundImage || (depth0 != null ? depth0.backgroundImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backgroundImage","hash":{},"data":data}) : helper)))
    + ")\"  \r\n             ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return " class=\"image "
    + container.escapeExpression(((helper = (helper = helpers.backgroundImage || (depth0 != null ? depth0.backgroundImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"backgroundImage","hash":{},"data":data}) : helper)))
    + "\" \r\n             ";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"perso-teaser-template perso-teaser-template-bar-box perso-"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "  "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.highlighted : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"perso-teaser-template_"
    + alias4(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"insightId","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.backgroundImage : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "    <div class=\"perso-read-more\">>></div>\r\n</div>";
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["textAndButton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"teaser-body\">\r\n        <div id=\"pstory-block-buttons_"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.buttons : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\" class=\"pstory-block-frame pstory-block-buttons\">\r\n            <div class=\"pstory-block-content\">\r\n                <a href=\"#!\" class=\"pstory-link-navigateTo pstory-button ripple-closed\" pnavigate-id=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.buttons : depth0)) != null ? stack1.options : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.navigateTarget : stack1), depth0))
    + "\" >"
    + ((stack1 = alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.buttons : depth0)) != null ? stack1.options : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["verticalBar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"teaser-body\" id=\""
    + alias1(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.chart : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["Personetics"]["UI"]["Handlebars"]["templates"]["verticalBarAndBox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return ((stack1 = container.invokePartial(partials.teaserHeader,depth0,{"name":"teaserHeader","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"pstory-block-hbox-columns-frame teaser-body\">\r\n        <div class=\"pstory-hbox-column-frame\" data-width=\"8\">\r\n            <div id=\""
    + alias1(((helper = (helper = helpers.insightId || (depth0 != null ? depth0.insightId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"insightId","hash":{},"data":data}) : helper)))
    + "_"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.chart : depth0)) != null ? stack1.blockId : stack1), depth0))
    + "\"></div>\r\n        </div>\r\n        <div class=\"pstory-hbox-column-frame\" data-width=\"4\">\r\n            <!--<div class=\"pstory-block-hbox-columns-frame\">-->\r\n\r\n            <div class=\"pstory-hbox-column-frame left-separator\" data-v-align=\"middle\" data-width=\"12\">\r\n                <div class=\"pstory-block-frame pstory-block-text\">\r\n                    <div class=\"pstory-block-content\">\r\n                        "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0["box-label"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                    </div>\r\n                </div>\r\n                <div class=\"pstory-block-frame pstory-block-text perso-percent-large\">\r\n                    <div class=\"pstory-block-content\">\r\n                        "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0["box-value"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.teaserWrapperPartial,depth0,{"name":"teaserWrapperPartial","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});})(window, window.Personetics = window.Personetics || {}, jQuery, window.Personetics.UI.Handlebars);


(function(window, Personetics, $, undefined){
    Personetics.story = Personetics.story || {};
    Personetics.story.BlockChartFactory = new function (){
        this.chartHelperFactoryMap = {};

        this.registerChartHelper = function(type, config){
            if(config.hasOwnProperty('helperClass')) {
                if (config.helperClass) {
                    // from cache
                    var entry = this.chartHelperFactoryMap[type];
                    if (!entry) {
                        entry = {
                            type: type,	// helper type
                            class: {},	// additional helpers based on css class
                            widthModes: {} // additional helpers based on screen width
                        };
                        this.chartHelperFactoryMap[type] = entry;
                    }
                    // map helper by class or by more specific css class
                    if (config.class) {
                        entry.class[config.class] = config.helperClass;
                    }
                    // map helper by width mode
                    //TODO: what happens when both width mode and css class are specified?
                    else if (config.widthMode) {
                        entry.widthModes[config.widthMode] = config.helperClass;
                    }
                    // default helper mapping
                    else {
                        entry.helperClass = config.helperClass;
                    }
                }
            }
            // backwards compatibility
            else{
                 this.chartHelperFactoryMap[type] = config;
            }
        };

        this.generateHelperClazz = function (name, config) {          
            var generatedChartHelper = null;
            if(typeof (name) !== "undefined" && name != null && this.chartHelperFactoryMap.hasOwnProperty(name)){
                var chartHelperClass = this.chartHelperFactoryMap[name].helperClass;
                if (config.hasOwnProperty("widthMode") && typeof config.widthMode !== 'undefined' && config.widthMode !== null &&
					config.widthMode.length > 0 && this.chartHelperFactoryMap[name].widthModes[config.widthMode] != undefined){
                    var chartHelperClass = this.chartHelperFactoryMap[name].widthModes[config.widthMode];
                }
                generatedChartHelper = new chartHelperClass();
                    
            } else {
                Personetics.log('The helper' + name + 'is not valid');
            }
            return generatedChartHelper;
        };
    };
})(window, window.Personetics = window.Personetics || {}, jQuery);
// an abstract block class. All other blocks should extend it
(function(window, Personetics, $, undefined){
    var Handlebars = Personetics.UI.Handlebars;
	Personetics.teaser = Personetics.teaser || {};

	Personetics.teaser.Block = Base.extend({
		initialize: function(parent, layoutInstructions, defaultConfig) {
			this.parent = parent;
			this.layoutInstructions = layoutInstructions;

			// setup block's template
			var tmplId = this.getHtmlTemplateId(layoutInstructions.class);
			if (tmplId)
				this.template = Handlebars.templates["block-" + tmplId];

			// Add defaultConfig to block
			if(typeof defaultConfig !== "undefined" && defaultConfig !== null){
				this.defaultConfig = defaultConfig;
			}
		},

		getHtmlTemplateId: function(clazz) {
			throw "No template id defined for block"
		},

		initBlock: function() {
		},

		handleQueryData: function(data){
			this.renderData(data);
			this.bindEvents();
		},

		setVisible: function(visible) {},

		beforeRender: function(el, layoutInstructions) {
			this.layoutInstructions = layoutInstructions;
		},

		render: function(el, layoutInstructions) {
			// don't override if saved in beforeRender
			this.layoutInstructions = this.layoutInstructions || layoutInstructions;
			this.el = el;
			var html = this.template(layoutInstructions);
			el.append(html);
			this.frameEl = el.find(".pstory-block-frame").last();
		},

		renderAgain: function(data){
			var html = this.template(data);
			$(this.frameEl).replaceWith(html);
		},

		renderData: function(data){},

		afterRender: function(el) {},

		bindEvents: function() {}
	});
})(window, window.Personetics = window.Personetics || {}, jQuery);

(function(window, Personetics, $, undefined){
    Personetics.teaser = Personetics.teaser || {};
    Personetics.teaser.TextBlock = Personetics.teaser.Block.extend({
        getHtmlTemplateId: function(clazz) {
            switch(clazz){
                case "note":
                case "perso-note":
                    return "txt-note";
                default:
                    return "txt";
                }
        }
    });
})(window, window.Personetics = window.Personetics || {}, jQuery);

(function(window, Personetics, $, undefined){
    Personetics.teaser = Personetics.teaser || {};
    Personetics.teaser.DateBoxBlock = Personetics.teaser.Block.extend({
        getHtmlTemplateId: function(clazz) {
            return "date-box";
        }
    });
})(window, window.Personetics = window.Personetics || {}, jQuery);

(function (window, Personetics, $, undefined) {
    Personetics.teaser = Personetics.teaser || {};
    Personetics.teaser.D3BarChartBlock = Personetics.teaser.Block.extend({
        CHART_TYPES:{
            MultiVertical : "multiVertical",
            MultiHorizontal: "multiHorizontal",
            SingleVertical: "vertical",
            SingleHorizontal: "horizontal"

        },
        getHtmlTemplateId: function(clazz) {
            return "bar-chart";
        },
        beforeRender: function(el, layoutInstructions, templateId){
            Personetics.teaser.Block.prototype.beforeRender.call(this, el, layoutInstructions);
            this.setSelected();
            this.barsDirection();
            this.beforeRenderChart(el, templateId);
        },
        setSelected: function setSelected(){
            var block = this;
            this.hasSelected = false;
            $.each(this.layoutInstructions.series,function(i, seriesArray){
                $.each(seriesArray, function(j, item){
                    if(item.selected == true){
                        block.hasSelected = true;
                        return false;
                    }
                });
            });
            if(this.hasSelected == false){
                $.each(this.layoutInstructions.series,function(i, seriesArray){
                    if(seriesArray.length > 0){
                        seriesArray[seriesArray.length - 1].selected = true;
                    }
                });
            }
        },
        render: function(el, layoutInstructions) {
            this.renderSelectedBar(layoutInstructions);
            this.renderBlock(el, layoutInstructions);
        },
        renderBlock: function (el, layoutInstructions) {
            Personetics.teaser.Block.prototype.render.call(this, el, layoutInstructions);

            var chartEl = this.frameEl.find(".pstory-bar-chart");
            if (chartEl.length > 0) {
                this.renderBarChart(chartEl, layoutInstructions);
            }
        },
        renderSelectedBar: function(layoutInstructions){
           
        },
        afterRender: function(){
            $(this.chartEl).addClass(this.layoutInstructions.direction);
            if(this.chartType == this.CHART_TYPES.MultiHorizontal){
                this.reverseData();                
            }
        },

        barsDirection: function barsDirection(){
            if(this.layoutInstructions.direction == "vertical" && Personetics.processor.PStoryConfig.isRtl()){
               this.barsDirectionRTL();
            }    
        },
        barsDirectionRTL: function barsDirectionRTL(){
             if($.isArray(this.layoutInstructions.categories)){
                    this.layoutInstructions.categories.reverse();
                }
                if($.isArray(this.layoutInstructions.series)){
                    $.each(this.layoutInstructions.series, function(i, series){
                        if($.isArray(series)){
                            series.reverse();
                        }
                    });
                }
        },
        beforeRenderChart: function(el, templateId){

            var direction = this.layoutInstructions.direction || "vertical";

            // if layoutInstructions.series contains a single series array, use the child array as the real series array
            if(this.layoutInstructions.series.length == 1 && $.isArray(this.layoutInstructions.series[0]))
                this.layoutInstructions.series = this.layoutInstructions.series[0];

            this.chartType = this.getChartType(direction, this.layoutInstructions.seriesLabels.length > 1);
            this.chartTypeHelper = this.chartType + "Helper";
            this.initChartHelper(this.chartTypeHelper);

            if(this.chartType == this.CHART_TYPES.MultiVertical)
                this.options = this.defaultConfig.columnChartMultiSeriesOptions;
            else if(this.chartType == this.CHART_TYPES.MultiHorizontal){
                this.options = this.defaultConfig.barChartOptions;
                this.reverseData();                
            }
            else if(this.chartType == this.CHART_TYPES.SingleHorizontal)
                this.options = this.defaultConfig.singleHorizontalChartOptions;
            else
                if(templateId == "verticalBarAndBoxTeaser"){
                    this.options = this.defaultConfig.columnChartAndBoxOptions;
                }
                else{
                    this.options = this.defaultConfig.columnChartOptions;
                }

            if(this.defaultConfig.hasOwnProperty('desktopScreenWidth') && this.defaultConfig.desktopScreenWidth !== 'undefined' && this.defaultConfig.desktopScreenWidth !== null){
                    this.options.desktopScreenWidth = this.defaultConfig.desktopScreenWidth;
            }
        },
        renderBarChart: function(el, layoutInstructions) {
            var data = layoutInstructions;
            var handleClickBind = Personetics.bind(this, this.handleClick);
            if(this.chartType == "multiHorizontal"){
                this.options.palette = this.defaultConfig.barGraphPalette;
                this.options.paletteLabels = this.defaultConfig.barGraphLabelsPalette;
                this.chartHelper.prepareMultiHorizontalChart(this, el);
                this.chartHelper.renderMultiHorizontalChart(this, el, this.layoutInstructions);
            }
            else{
                this.chartHelper.prepareChart(data, this.options, handleClickBind);
                this.chartHelper.renderChart(el);
            }
        },
        /**d3 render bars from bottom to top - for displaying bars in order from top to bottom data has to be reversed */
        reverseData: function reverseData(){
            this.layoutInstructions.series.reverse();
            $.each(this.layoutInstructions.series, function(index, item){
                item.reverse();
            });
        },
        handleClick: function(obj, clickedItemIndex) {
            if(this.hasSelected == false){
                return;
            }
            if(obj.amount == 0)
                return;
            var svg = this.frameEl.find('svg .perso-bar, svg .perso-chart-rect')[clickedItemIndex].className.animVal;
            if(svg.indexOf("selected") != -1){
                return;
            }

            /*jq not working*/
            var highlightedElements = this.frameEl.find('svg .perso-bar.selected, svg .perso-chart-rect.selected');
            $.each(highlightedElements,function (i,element) {
                element.className.baseVal= Personetics.utils.string.removeClass(element.className,'selected');
            });

            var highlightedLabels = this.frameEl.find('svg .perso-label');
            $.each(highlightedLabels,function (i,label) {
                label.className.baseVal= Personetics.utils.string.removeClass(label.className,'selected');
            });

            var highlightedxAxisLabels = this.frameEl.find('svg .perso-xAxis-label');
            $.each(highlightedxAxisLabels,function (i, xAxisLabel) {
                xAxisLabel.className.baseVal= Personetics.utils.string.removeClass(xAxisLabel.className,'selected');
            });


            //Check if the object has mode (series) or not
            if(obj.hasOwnProperty("mode")){
                //highlight selected elements
                var highlightSelectedInElements = this.frameEl.find('svg .perso-bar, svg .perso-chart-rect.In')[clickedItemIndex];
                var highlightSelectedOutElements = this.frameEl.find('svg .perso-bar, svg .perso-chart-rect.Out')[clickedItemIndex];
               
                //highlight selected labels
                var highlightSelectedInLabels = this.frameEl.find('svg .perso-label.In')[clickedItemIndex];
                var highlightSelectedOutLabels = this.frameEl.find('svg .perso-label.Out')[clickedItemIndex];

                highlightSelectedInElements.className.baseVal= Personetics.utils.string.addClass(highlightSelectedInElements.className,'selected');
                highlightSelectedOutElements.className.baseVal= Personetics.utils.string.addClass(highlightSelectedOutElements.className,'selected');

                highlightSelectedInLabels.className.baseVal= Personetics.utils.string.addClass(highlightSelectedInLabels.className,'selected'); 
                highlightSelectedOutLabels.className.baseVal= Personetics.utils.string.addClass(highlightSelectedOutLabels.className,'selected');


            } else {
                //choose the clicked item
                var clickedBar = this.frameEl.find('svg .perso-bar, svg .perso-chart-rect')[clickedItemIndex];
                var clickedBarLabel = this.frameEl.find('svg .perso-label')[clickedItemIndex];
                var clickedBarxAxis = this.frameEl.find('svg .perso-xAxis-label')[clickedItemIndex];   
                
                //add 'selected' flag to the clicked item
                clickedBar.className.baseVal= Personetics.utils.string.addClass(clickedBar.className,'selected');
                clickedBarLabel.className.baseVal= Personetics.utils.string.addClass(clickedBarLabel.className,'selected');
                if(clickedBarxAxis){
                    clickedBarxAxis.className.baseVal= Personetics.utils.string.addClass(clickedBarxAxis.className,'selected');
                }
                
            }
            this.parent.notifyEvent(this, "setSelectedValue", obj.category); 
            this.notifyReportEvent(obj.category);
        },

        //utils
        getChartType: function(direction, hasMultiSeries){
            var type = null;
            if(direction =="vertical" && hasMultiSeries){
                type = "multiVertical";
            }else if(direction =="horizontal" && hasMultiSeries){
                type = "multiHorizontal";
            }else if (direction =="vertical"){
                type = "vertical";
            }
            else if(direction =="horizontal"){
                type = "horizontal";
            }
            return type;
        },

        initChartHelper: function(type){
            this.chartHelper = Personetics.story.BlockChartFactory.generateHelperClazz(type, {}/*, this.story.cfg*/);
        }
    });
})(window, window.Personetics = window.Personetics || {}, jQuery);
(function (window, Personetics, $, undefined) {
    var d3 = Personetics.persoD3 || window.d3;
    Personetics.teaser = Personetics.teaser || {};
    Personetics.teaser.PieChartBlock = Personetics.teaser.Block.extend({
        getHtmlTemplateId: function (clazz) {
            return "pie-chart";
        },
        beforeRender: function (el, layoutInstructions) {
            Personetics.teaser.Block.prototype.beforeRender.call(this, el, layoutInstructions);
            this.options = this.defaultConfig.pieOptions;
            this.cornerRadiusPie = (typeof this.options.arcs.cornerRadius != "undefined") && (typeof this.options.arcs.cornerRadius.radiusCorner != "undefined") ? this.options.arcs.cornerRadius.radiusCorner: 9;
            this.setTotal(layoutInstructions);
            this.colors = d3.scale.ordinal().range(this.defaultConfig.pieGraphPalette());
            this.grayscaleId = "grayscale_" + +new Date();
        },
        /**pie beforeRender definations */
        pie/*setPieDefination*/: function () {
            var block = this;
            var totalAmount = block.totalAmountInt || 0;
            var normalizedValue = totalAmount * 0.05;
            return d3.layout.pie()
                .padAngle(-0.015)
                .value(function (d) {
                    var value = d.value + normalizedValue;
                    return value;
                });
        },
            setTotal: function setTotal(layoutInstructions){
                    // get centerText from config, and split it by "<br>"
                    var totalFromSrc = layoutInstructions.centerText;
                    this.totalText = totalFromSrc;
                if(layoutInstructions.hasOwnProperty('slices') && layoutInstructions.slices.length > 0){
                    var totalAmountObj = layoutInstructions.slices.reduce(function(total, slice){
                        return {value: total.value + slice.value};
                    });
                    this.totalAmountInt = totalAmountObj.value;
                }
                else{
                    this.totalAmountInt = 0;
                }
            },
            getGraphPalette: function () {
                return this.defaultConfig.pieGraphPalette;
            },

        /**render functions */
        render: function (el, layoutInstructions) {
            Personetics.teaser.Block.prototype.render.call(this, el, layoutInstructions);
            this.frameEl = el.find('.pstory-block-frame').last();
            var chartEl = this.frameEl.find(".pstory-pie-chart");
            if (chartEl.length > 0) {
                this.renderPieChart(chartEl, layoutInstructions);
            }
        },

        renderPieChart: function (el, layoutInstructions) {
            var block = this;
            this.setPieSize();
            /** */
            d3.selection.prototype.moveToFront = function() {
                return this.each(function(){
                    var gparent = this.parentNode;
                    gparent.parentNode.appendChild(gparent);
                });
            };

            block.arc = d3.svg.arc()
                .innerRadius(block.innerRadius)
                .outerRadius(block.outerRadius);

            block.arcOver = d3.svg.arc()
                .innerRadius(block.innerRadiusOver)
                .outerRadius(block.outerRadiusOver);
            
            this.renderPieBase(el);
            this.renderShadowFilter(block);//?? base or pie
            this.renderPie(el, layoutInstructions);
        },
        setPieSize: function setPieSize(percents){
           if (percents)
                var percents = percents;
           else
                var percents = {
                    heightPercent: 0.7,
                    innerRadiusPercent: 0.17,
                    outerRadiusPercent: 0.2,
                    innerRadiusOverPercent: 0.165,
                    outerRadiusOverPercent: 0.22
                }
            this.margin = {top: 0, right: 19, bottom: 0, left: 19};
            this.width = this.frameEl.find('.pstory-pie-chart').width();
            this.height = this.width * percents.heightPercent;
            this.radius = this.width / 2.3;

            var calculatedInnerRadiusRatio = percents.innerRadiusPercent * this.width;
            var calculatedOuterRadiusRatio = percents.outerRadiusPercent * this.width;
            var calculatedInnerRadiusOverRatio = percents.innerRadiusOverPercent * this.width;
            var calculatedOuterRadiusOverRatio = percents.outerRadiusOverPercent * this.width;

            this.innerRadius = this.radius - calculatedInnerRadiusRatio;
            this.outerRadius = this.radius - calculatedOuterRadiusRatio;
            this.innerRadiusOver = this.radius - calculatedInnerRadiusOverRatio;
            this.outerRadiusOver = this.radius - calculatedOuterRadiusOverRatio;

        },
        /**render svg base and base attributes */
            renderPieBase: function renderPieBase(el){
                this.svg = this.renderPieSvgBase(el);                
            },
            renderPieSvgBase: function (el) {
                var block = this;
                if (el) {
                    return ( d3.select(el.get(0)).append("svg")
                        .attr("focusable", false)
                        .attr("width", block.width)
                        .attr("height", block.height)
                        .append("g")
                        .attr("transform", "translate(" + block.width / 2 + "," + block.height / 2 + ")"));
                }
            },
        /**render the pie */
        
            renderPie: function(el, layoutInstructions){
                this.renderArcs(layoutInstructions);
                // this.renderTicks(block, layoutInstructions);
                // this.renderPieLabels(block, layoutInstructions);
                this.renderPieTitle(this.totalText);
            },
            renderArcs: function (layoutInstructions) {
                var block = this;
                var arcs = block.svg.selectAll(".arc")
                    .data(block.pie()(layoutInstructions.slices))
                    .enter().append("g")
                    .attr("class", "perso-arc");

                arcs.append("path")
                    .attr("d", block.arc)
                    .attr("class", function(d){
                        var clazz = "";
                        if(d.data.highlight){
                            clazz += "perso-selected";
                        }
                        return clazz;
                    })
                    .style("fill", function (d, i) {
                        return block.colors(i);
                    })
                    .on("click", function (obj, clickedItemIndex) {
                        if(!obj.data.hasOwnProperty("highlight")){
                            block.onPieItemClick(obj, clickedItemIndex, this);
                        }
                    });
            },
            renderTicks: function (block, layoutInstructions) {
                if (block) {
                    var ticks = block.svg.append('g')
                        .attr('class','perso-ticks')
                        .selectAll("line")
                        .data(block.pie()(layoutInstructions))
                        .enter().append("line");

                    ticks.attr('class','perso-tick')
                        .attr("x1", 0)
                        .attr("x2", 0)
                        .attr("y1", -block.radius *.8)
                        .attr("y2", -block.radius * .9)
                        .attr("stroke", "gray")
                        .attr("transform", function (d) {
                            return "rotate(" + (d.startAngle + d.endAngle) / 2 * (180 / Math.PI) + ")";
                        });
                }
            },
            renderPieLabels: function (block, layoutInstructions) {
                if (block) {
                    var labels = block.svg.append('g')
                        .attr('class','perso-pie-labels')
                        .attr("transform","translate(8,0)")
                        .selectAll("text")
                        .data(block.pie()(layoutInstructions))
                        .enter().append("text");
                    labels.attr("class", "perso-pie-label")
                        .attr("transform", function (d) {
                            var dist = block.radius + 20;
                            var angle = (d.startAngle + d.endAngle) / 2;
                            var x = dist * Math.sin(angle);
                            var y = -dist * Math.cos(angle);
                            return "translate(" + x + "," + y + ")";
                        })
                        .attr("dy", "-0.5em")
                        .attr("text-anchor", "middle")
                        .text(function (d) {
                            return d.data.category;
                        })
                        .call(block.wrapLabelText, screen.width * .28);
                }
            },
            renderPieTitle: function(totalText){
                this.svg.append('text')
                    .attr('class', 'perso-total-txt')
                    .attr('text-anchor','middle')
                    .attr('dy','.25em' )
                    .style('font-size',this.options.centerText.fontSize)
                    .style('font-weight',this.options.centerText.fontWeight)
                    .text(totalText);
            },
            renderPieAmount: function(totalAmount){
                this.svg.append('text')
                    .attr('class', 'perso-total-amount')
                    .attr('dy','.9em' )
                    .text(totalAmount);
            },

        /**events functions */
            onPieItemClick: function(obj, clickedItemIndex, clickedItem){
                var block = this;
                var oldSelectedArc = $('.perso-arc path.perso-selected');
                if (oldSelectedArc.length) {
                    oldSelectedArc[0].className.baseVal= Personetics.utils.string.removeClass(oldSelectedArc[0].className,'perso-selected');
                }
                var oldSelectedArcLabel = this.frameEl.find('.pstory-pie-chart svg .perso-pie-label.selected');
                if (oldSelectedArcLabel.length) {
                    oldSelectedArcLabel[0].className.baseVal= Personetics.utils.string.removeClass(oldSelectedArcLabel[0].className,'selected');
                }

                d3.select(clickedItem)
                    .attr("class", "perso-selected");

                var pstoryLabels = this.frameEl.find('.pstory-pie-chart svg .perso-pie-label');
                if(typeof pstoryLabels != 'undefined' && pstoryLabels.length > clickedItemIndex){
                    var clickedArcLabel = pstoryLabels[clickedItemIndex];
                    clickedArcLabel.className.baseVal= Personetics.utils.string.addClass(clickedArcLabel.className,'selected');

                }
                this.handleClick(obj, clickedItemIndex);
            },
        
        renderShadowFilter: function (block) {
            var filters = block.options.arcs.filter;
            var svgWithFilters = block.svg;
            if (filters) {
                $.each(filters, function (i, filter) {
                    if (filter) {
                        var filterSvg = svgWithFilters.append("filter")
                            .attr("id", filter.id);

                        filterSvg.append("feGaussianBlur")
                            .attr("in", filter.in)
                            .attr("stdDeviation", filter.stdDeviation);

                        filterSvg.append("feOffset")
                            .attr("dx", filter.dxOffset)
                            .attr("dy", filter.dyOffset);
                        var feMerge = filterSvg.append("feMerge");

                        feMerge.append("feMergeNode");

                        feMerge.append("feMergeNode")
                            .attr("in", filter.in);
                    }
                })
            }
        },
        
        handleClick: function (obj,clickedItemIndex) {
            var dataObj = obj;
            if(dataObj.data){
                dataObj = dataObj.data;
            }
            this.parent.notifyEvent(this, "setSelectedValue", dataObj.category);
        },
          
        // this function get svg path selected index
        getSelectedPathIndex: function(paths){
            var pathIndex = 0;
            if(paths.length){
                $.each(paths, function(i, path){
                    if(path.className.baseVal == 'perso-selected'){/*jq not work*/
                        pathIndex = i;
                        return false;
                    }
                })
            }
            return pathIndex;
        },
        wrapLabelText: function(text, width) {
            text.each(function() {
                var text = d3.select(this),
                    words = text.text().split(/\s+/).reverse(),
                    word,
                    line = [],
                    lineNumber = 0,
                    lineHeight = .95, // ems
                    y = text.attr("y"),
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
                while (word = words.pop()) {
                    line.push(word);
                    tspan.text(line.join(" "));
                    if (tspan.node().getComputedTextLength() > width) {
                        line.pop();
                        tspan.text(line.join(" "));
                        line = [word];
                        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", (++lineNumber * lineHeight * 1.5) + dy + "em").text(word);
                    }
                }
                if(lineNumber == 1){

                }
            });
        }
    });
})(window, window.Personetics = window.Personetics || {}, jQuery);

(function(window, Personetics, $, undefined){
    Personetics.teaser = Personetics.teaser || {};
    Personetics.teaser.D3PinGraphChartBlock = Personetics.teaser.D3BarChartBlock.extend({
        getHtmlTemplateId: function(clazz) {
            return "pinGraph-chart";
        },
        render: function(el, layoutInstructions) {
            Personetics.teaser.D3BarChartBlock.prototype.renderSelectedBar.call(this, layoutInstructions);
            this.renderBlock(el, layoutInstructions);
        },
        renderBlock: function (el, layoutInstructions) {
            Personetics.teaser.Block.prototype.render.call(this, el, layoutInstructions);

            var chartEl = this.frameEl.find(".pstory-pinGraph-chart");
            if (chartEl.length > 0) {
                this.renderBarChart(chartEl, layoutInstructions);
            }
        },
        renderBarChart: function(el,data) {
            this.chartHelper.prepareChart(data, this.options);
            this.chartHelper.renderChart(el);
        },
        beforeRenderChart: function(el, layoutInstructions){
            // if layoutInstructions.series contains a single series array, use the child array as the real series array
            if(this.layoutInstructions.series.length == 1 && $.isArray(this.layoutInstructions.series[0]))
                this.layoutInstructions.series = this.layoutInstructions.series[0];
            this.chartType = this.getChartType();
            this.chartTypeHelper = (this.chartType +"Helper");
            this.initChartHelper(this.chartTypeHelper);
            this.options = this.defaultConfig.pinGraphChartOptions;
            if(this.defaultConfig.hasOwnProperty('desktopScreenWidth') && this.defaultConfig.desktopScreenWidth !== 'undefined' && this.defaultConfig.desktopScreenWidth !== null){
                this.options.desktopScreenWidth = this.defaultConfig.desktopScreenWidth;
            }
        },

        getChartType: function(){
            var type = 'pinGraph';
            return type;
        }
    });
})(window, window.Personetics = window.Personetics || {}, jQuery);
(function (window, Personetics, $, undefined) {
    var d3 = Personetics.persoD3 || window.d3;
    Personetics.teaser = Personetics.teaser || {};
    Personetics.teaser.lineChartBlock = Personetics.teaser.Block.extend({
        getHtmlTemplateId: function (clazz) {
            return "line-chart";
        },

        beforeRender: function (el, layoutInstructions) {
            if (layoutInstructions.categories && layoutInstructions.series && layoutInstructions.seriesLabels) {
                Personetics.teaser.Block.prototype.beforeRender.call(this, el, layoutInstructions);
                this.texts = {
                    // add texts
                };
                this.beforeRenderChart();
            } else {
                Personetics.log("DotsLineChartBlock.beforeRender() Error: invalid categories and/or series and/or seriesLabels properties - not rendering");
            }
        },

        getGraphPalette: function () {
            return this.defaultConfig.lineChartPalette;
        },

        beforeRenderChart: function () {
            this.chartType = 'lineChart';
            // if layoutInstructions.series contains a single series array, use the child array as the real series array
            if (this.layoutInstructions.series.length == 1 && $.isArray(this.layoutInstructions.series[0])) {
                this.layoutInstructions.series = this.layoutInstructions.series[0];
            }
            this.chartTypeHelper = this.chartType + "Helper";
            this.initChartHelper(this.chartTypeHelper);
            this.options = this.defaultConfig.lineChartOptions;
        },

        render: function (el, layoutInstructions) {
            Personetics.teaser.Block.prototype.render.call(this, el, layoutInstructions);
            var chartEl = this.frameEl.find('.pstory-line-chart');
            if (chartEl.length > 0) {
                var data = layoutInstructions;
                var el = chartEl;
                var options = this.options;
                this.chartHelper.prepareChart(data, options);
                this.chartHelper.renderChart(el);
            }
        },
        initChartHelper: function(type){
            this.chartHelper = Personetics.story.BlockChartFactory.generateHelperClazz(type, {}/*, this.story.cfg*/);

        }
    });
})(window, window.Personetics = window.Personetics || {}, jQuery);
(function(window, Personetics, $, undefined){
	Personetics.teaser = Personetics.teaser || {};
	Personetics.teaser.PBlockFactory = new function() {

		this.types = {
			"TYPE_CONTAINER": "layout"
		};

		this.blockFactoryMap = {};

		this.index = "0";

		this.registerBlock = function(type, config) {
			var entry = this.blockFactoryMap[type];
			if(config.blockClass) {
				// from cache
				if (!entry) {
					entry = {
						type: type,	// block type
						class: {},	// additional blocks based on css class
						widthModes: {}
					};
					this.blockFactoryMap[type] = entry;
				}
				// map block by class or by more specific css class
				if (config.class) {
					entry.class[config.class] = config.blockClass;
				}
				// map block by width mode
				else if(config.widthMode) {
					entry.widthModes[config.widthMode] = config.blockClass;
				}
				// default block mapping
				else{
					entry.blockClass = config.blockClass;
				}
			}
			if(config.hasOwnProperty("defaultConfig")){
				entry.defaultConfig = config.defaultConfig;
			}
		};

		this.createBlock = function(parent, layoutInstructions, story) {
			var block;
			var blockClass;
			var storyCfg = story ? story.cfg : null;
			var type = layoutInstructions.type;
			if(type == this.types.TYPE_CONTAINER){
				blockClass = Personetics.teaser.LayoutBlock;
				layoutInstructions.layoutId = "layout-" + this.index;
				this.index++;
			}
			else {
				var cClass = storyCfg ? layoutInstructions.class || storyCfg.chartsLibClass : null;
				var widthMode = storyCfg ? storyCfg.widthMode : null;
				var entry = this.blockFactoryMap[type];
				if (entry) {
					if (widthMode) {
						blockClass = entry.widthModes[widthMode];
					}
					if (cClass) {
						blockClass = entry.class[cClass];
					}

					if (!blockClass)
						blockClass = entry.blockClass;
				}
				if (!blockClass) {
					blockClass = Personetics.teaser.Block;
					Personetics.log("Invalid block type '" + type + "'");
				}
			}
			block = new blockClass(parent, layoutInstructions, entry.defaultConfig);
			return block;
		};
	};
})(window, window.Personetics = window.Personetics || {}, jQuery);

(function (window, Personetics, $, undefined) {

    var Handlebars = Personetics.UI.Handlebars;
    var SkinSetup = function SkinSetup() {
    };

    var extraConfigsMap = {
        imagePath: '../personetics-chase/skins/vanilla/images/'
    };

    SkinSetup.prototype.init = function registerBlocks() {
        this.registerDefaultBlocks();
        this.registerDefaultChartHeplers();
        this.registerPartialTemplates();
    };

    SkinSetup.prototype.registerBlock = function (type, config) {
        Personetics.teaser.PBlockFactory.registerBlock(type, config);
    };

    SkinSetup.prototype.registerChartHelper = function (name, clazz) {
        Personetics.story.BlockChartFactory.registerChartHelper(name, clazz);
    };

    SkinSetup.prototype.registerPartialTemplates = function registerPartialTemplates() {
        var me = this;
        var partialTemplates = this.getPartialTemplates();
        partialTemplates.forEach(function (partial) {
            var partialTemplate = Handlebars.templates[partial.id];
            if (typeof partialTemplate !== "undefined" && partialTemplate !== null)
                Handlebars.registerPartial(partial.name, partialTemplate);
        });
    };
    SkinSetup.prototype.getPartialTemplates = function getPartialTemplates() {
        return [
            {
                "name": "teaserWrapperPartial",
                "id": "teaserWrapperPartial"
            },
            {
                "name": "teaserHeader",
                "id": "teaserHeader"
            }
        ];
    };

    SkinSetup.prototype.registerDefaultBlocks = function registerDefaultBlocks(type) {
        this.registerBlock("txt", {
            blockClass: Personetics.teaser.TextBlock
        });
        this.registerBlock("text", {
            blockClass: Personetics.teaser.TextBlock
        });
        this.registerBlock("date-box", {
            blockClass: Personetics.teaser.DateBoxBlock
        });
        this.registerBlock("image", {
            blockClass: Personetics.teaser.ImageBlock
        });
        this.registerBlock("bar-chart", {
            blockClass: Personetics.teaser.D3BarChartBlock,
            defaultConfig: {
                desktopScreenWidth: 790,
                columnChartOptions: {
                    maxBarHeight: 60, 
                    svgHeight: 95,
                    svgWidth: 300,
                    barTop: 7,
                    xAxisTop: 75,
                    yAxisLineDisplay: false,
                    yAxisTextDisplay: false,
                    yAxisTop: 10,

                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 43,
                        bottom: 40
                    },
                    height: 180,
                    chart: {
                        transX: 0,//spacing variable
                        transY: 10
                    },
                    labels: {
                        drawLabels: false,
                        marginBottom: 18,
                        marginTop: -10
                    },
                    rectangles: {
                        width: 12,
                        space: 34,
                        borderRadius: {
                            rx: 6,
                            ry: 6
                        },
                        marginFromBottom: 15,
                        marginFromLeft: 0,
                        gradients: [{
                            id: "selectedGradient",
                            offset: ["0%", "100%"],
                            stopColors: ["#6888d2", "#536fb1"]
                        }],
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        },
                        transition: {
                            duration: 1000,
                            delay: 500
                        }
                    },
                    selected: {},
                    axis: {
                        xAxis: {
                            hide: false
                        }
                    }
                },
                columnChartAndBoxOptions:{
                    maxBarHeight: 60, 
                    svgHeight: 95,
                    svgWidth: 187,
                    barTop: 18.8,
                    xAxisTop: 0,
                    yAxisHeight: 128,
                    yAxisLineDisplay: false,
                    yAxisTextDisplay: false,
                    yAxisTop: 0,

                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 43,
                        bottom: 40
                    },
                    height: 180,
                    chart: {
                        transX: 0,//spacing variable
                        transY: 10
                    },
                    labels: {
                        drawLabels: false,
                        marginBottom: 18,
                        marginTop: -10
                    },
                    rectangles: {
                        width: 7,
                        space: 20,
                        borderRadius: {
                            rx: 3,
                            ry: 3
                        },
                        marginFromBottom: 15,
                        marginFromLeft: 0,
                        gradients: [{
                            id: "selectedGradient",
                            offset: ["0%", "100%"],
                            stopColors: ["#6888d2", "#536fb1"]
                        }],
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        },
                        transition: {
                            duration: 1000,
                            delay: 500
                        }
                    },
                    selected: {},
                    axis: {
                        xAxis: {
                            hide: false
                        }
                    }
                },
                columnChartMultiSeriesOptions: {
                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 34,
                        right: 24,
                        bottom: 72,
                        left: 24
                    },
                    totalHeight: 220,

                    labels: {
                        drawLabels: true,
                        marginTop: -16,
                        marginBottom: 4,
                        right: 3
                    },
                    rectangles: {
                        width: 9,
                        paddingTop: 30,
                        paddingLeft: -19,
                        paddingRight: 22,
                        paddingBottom: 33,
                        seriesPadding: 12.5,
                        transX: 4,
                        minHeight: 0.25,
                        borderRadius: {
                            rx: 4,
                            ry: 4
                        },
                        marginFromBottom: 5,
                        gradients: {
                            selectedInGradient: {
                                id: "selectedInGradient",
                                offset1: "0%",
                                offset2: "100%",
                                stopColor1: "#7193e2",
                                stopColor2: "#485f96"
                            },
                            selectedOutGradient: {
                                id: "selectedOutGradient",
                                offset1: "0%",
                                offset2: "100%",
                                stopColor1: "#ffcc00",
                                stopColor2: "#ffb80a"
                            }
                        },
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        },
                        transition: {
                            duration: 1000,
                            delay: 500
                        }
                    },
                    selected: {},
                    axis: {
                        translation: {
                            x: 2.5,
                            y: "height"
                        },
                        xAxis: {
                            hide: false,
                            tickPadding: 10,
                            minimizedPadding: {
                                top: 22,
                                bottom: 15
                            }
                        },
                        yAxis: {
                            hide: true
                        }
                    }
                },
                barChartOptions: {
                    chartHeight: 102,
                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 19,
                        right: 20,
                        bottom: 0,
                        left: 20

                    },
                    drawLabels: false,
                    rectangles: {
                        height: 7,//height for iphone 5 screen TODO - remove this height from configs
                        color: "rgba(169, 167, 167, 1)",
                        paddingTop: -22,//?
                        paddingLeft: 21,
                        paddingBottom: 5,
                        seriesPadding: 5,
                        borderRadius: {
                            rx: 4,
                            ry: 4
                        },
                        gradients: {
                            selectedInGradient: {
                                id: "selectedInGradient",
                                offset1: "0%",
                                offset2: "100%",
                                stopColor1: "#7193e2",
                                stopColor2: "#485f96"
                            },
                            selectedOutGradient: {
                                id: "selectedOutGradient",
                                offset1: "0%",
                                offset2: "100%",
                                stopColor1: "#ffcc00",
                                stopColor2: "#ffb80a"
                            }
                        },
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        }
                    },
                    labels: {
                        paddingLeft: 40,
                        minWidth: 100
                    },
                    selected: {},
                    axis: {
                        xAxis: {
                            hide: true
                        },
                        yAxis: {
                            hide: false,
                            paddingRight: 20,
                            transValue: -20
                        }
                    }
                },
                singleHorizontalChartOptions: {
                    chartHeight: 100,
                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 10,
                        right: 12,
                        bottom: 12,
                        left: 5

                    },
                    drawLabels: false,
                    rectangles: {
                        height: 7,
                        color: "rgba(169, 167, 167, 1)",
                        borderRadius: {
                            rx: 4,
                            ry: 4
                        },
                        groupMargins: {

                            //   It's possible to use negative values
                            top: -3.5,
                            left: 35
                        },
                        gradients: {
                            selectedGradient: {
                                id: "selectedGradient",
                                offset1: "0%",
                                offset2: "100%",
                                stopColor1: "#6888d2",
                                stopColor2: "#536fb1"
                            }
                        },
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        }
                    },
                    labels: {
                        paddingLeft: 40,
                        minWidth: 100
                    },
                    selected: {},
                    axis: {
                        xAxis: {
                            hide: true
                        },
                        yAxis: {
                            hide: false
                        }
                    }
                },
                barGraphPalette: ['url(#selectedOutGradient)', 'url(#selectedInGradient)'],
                barGraphLabelsPalette: ['rgba(40, 36, 37, 1)', 'rgba(84, 113, 180, 1)'],
                multiVerticalPalette: ['url(#selectedGradient)', 'rgba(215, 215, 215, 1)'],
                multiVerticalLabelsPalette: ['rgba(147, 145, 149, 1)', 'rgba(40, 36, 37, 1)'],
                columnGraphPalette: ['#5D68C2', '#3B49B6', '#1729AF', '#111F88', '#08176C'],
                barChartMultiSeriesLabels: function (labels) {
                    return function () {
                        if (labels && labels.length > 0) {
                            var label = labels[this.series.index];
                            return ("<span class='" + this.series.name + "'>" + label + "</span>");
                        }
                        else {
                            return "";
                        }
                    }
                }
            }
        });
        this.registerBlock("pie-chart", {
            blockClass: Personetics.teaser.PieChartBlock,
            defaultConfig: {
                pieGraphPalette: function (selectedTabId) {
                    if (selectedTabId == "Out")
                        return ['#ffce40', '#ffb608', '#ff9819', '#fe7d3f', '#f9652b', '#df4c3a', '#c72735'];
                    return ['#6787d1', '#027ac4', '#7390c5', '#3095bd', '#45a5d3', '#5acafa', '#95dafb'];
                },
                pieOptions: {
                    arcs: {
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        },
                        cornerRadius: {
                            radiusCorner: 9
                        },
                    },
                    centerText: {
                        fontSize: 15,
                        fontWeight: 300
                    },
                    showInfoContainer: false
                }
            }
        });
        this.registerBlock("map", {
            blockClass: Personetics.story.MapBlock
        });
        this.registerBlock("pin-chart", {
            blockClass: Personetics.teaser.D3PinGraphChartBlock,
            defaultConfig: {
                desktopScreenWidth: 790,
                pinGraphChartOptions: {
                    svgHeight: 95,
                    svgWidth: 300,
                    maxBarHeight: 53, 
                    labelTop: 0,
                    barTop: 11,
                    xAxisTop: 75,
                    yAxisHeight: 0,
                    yAxisTop: 0,
                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 43,
                        bottom: 40
                    },
                    height: 180,
                    chart: {
                        transX: 0,
                        transY: 10
                    },
                    totalHeight: 220,
                    labels: {
                        drawLabels: false,
                        marginBottom: 18,
                        marginTop: 4.5
                    },
                    rectangles: {
                        width: 7,
                        space: 42,
                        borderRadius: {
                            rx: 3,
                            ry: 3
                        },
                        gradients: {
                            selectedGradient: {
                                id: "selectedGradient",
                                offset: ["0%", "100%"],
                                stopColors: ["#6888d2", "#536fb1"]
                            }
                        },
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        },
                        transition: {
                            duration: 1000,
                            delay: 500
                        }
                    },
                    selected: {},
                    axis: {
                        translation: {
                            x: 0,
                            y: "height"
                        },
                        xAxis: {
                            hide: false,
                            tickPadding: 10,
                            collapsedPadding: {
                                top: 22,
                                bottom: 15
                            }
                        },
                        yAxis: {
                            x: 0,
                            y: 0,
                            hide: true
                        }
                    }
                }
            }
        });
        this.registerBlock("pin-graph", {
            blockClass: Personetics.teaser.D3PinGraphChartBlock,
            defaultConfig: {
                desktopScreenWidth: 790,
                pinGraphChartOptions: {
                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    margin: {
                        top: 35,
                        right: 20,
                        bottom: 40,
                        left: 15
                    },
                    height: 102,
                    chart: {
                        transX: 0,
                        transY: 0
                    },
                    totalHeight: 102,
                    labels: {
                        drawLabels: false,
                        marginBottom: 18,
                        marginTop: 4.5,
                        marginRight: 5
                    },
                    rectangles: {
                        minHeightPercent: 0.15,
                        width: 8,
                        borderRadius: {
                            rx: 3,
                            ry: 3
                        },
                        marginFromBottom: 10,
                        marginFromLeft: 0,
                        gradients: {
                            selectedGradient: {
                                id: "selectedGradient",
                                offset1: "0%",
                                offset2: "100%",
                                stopColor1: "#6888d2",
                                stopColor2: "#536fb1"
                            }
                        },
                        filter: {
                            dropShadow: {
                                id: "dropShadow",
                                in: "SourceGraphic",
                                stdDeviation: 3,
                                dxOffset: 1,
                                dyOffset: 2
                            }
                        },
                        transition: {
                            duration: 1000,
                            delay: 500
                        }
                    },
                    selected: {},
                    axis: {
                        translation: {
                            x: 0,
                            y: "height"
                        },
                        xAxis: {
                            hide: false,
                            tickPadding: 8,
                            minimizedPadding: {
                                top: 22,
                                bottom: 15,
                                fontSize: 12,
                                fontWeight: 300,
                                color: '#A94F48'
                            },
                            fontSize: 12,
                            fontWeight: 300,
                            color: '#000'
                        },
                        yAxis: {
                            hide: true,
                            x: 0,
                            y: 0,
                            fontSize: 0,
                            fontWeight: 0,
                            color: '#000'
                        }
                    }
                }
            }
        });
        this.registerBlock("line-chart",{
            blockClass: Personetics.teaser.lineChartBlock,
            defaultConfig: {
                lineChartOptions:{
                    screen: {
                        ratio_medium: 1.17,
                        ratio_large: 1.3
                    },
                    //general
                    svgHeight: 95,
                    svgWidth:300,	
                    //line
                    line_left: 18,
                    line_top: 14,
                    line_width:256,
                    line_height:64,
                    //line area
                    area_display: false,
                    //line style
                    lineStyle_interpolate:'cardinal',//cardinal/linear/monotone
                    lineStyle_thickness: 3,
                    //x axis
                    xAxis_display: false,
                    //y axis
                    yAxis_display: false,				
                    //transition
                    duration: 2000,
                    //dots
                    dots_radius:3.5,
                    dots_radius_selected:4.5,
                    //labels
                    labels_display: false,
                    //horizonalLine
                    horizonalLine_display:false,
        
                    highlightBy: 'last'	// defines the criteria for style dots as selected dot, there are 4 options - max/min/first/last(default).
    
                },
                lineChartPalette: ['rgba(169, 167, 167, 1)']
            }
        });
        this.registerBlock("h-box", {
            blockClass: Personetics.teaser.HBoxBlock
        });
    };

    SkinSetup.prototype.registerDefaultChartHeplers = function registerDefaultChartHeplers() {
        this.registerChartHelper("verticalHelper", {
            helperClass: Personetics.utils.d3Helpers.VerticalChartHelper
        });
        this.registerChartHelper("horizontalHelper", {
            helperClass: Personetics.utils.d3Helpers.HorizontalChartHelper
        });
        this.registerChartHelper("multiVerticalHelper", {
            helperClass: Personetics.utils.d3Helpers.MultiVerticalChartHelper
        });
        this.registerChartHelper("multiHorizontalHelper", {
            helperClass: Personetics.utils.d3Helpers.MultiHorizontalChartHelper
        });
        this.registerChartHelper("pinGraphHelper", {
            helperClass: Personetics.utils.d3Helpers.PinGraphChartHelper
        });
    };

    SkinSetup.prototype.registerTemplates = function registerTemplates() {
        var loader = new HandlebarTemplateLoader("../skins/vanilla/templates/");
        loader.load("simpleText", "simple-teaser");
        loader.load("image", "image-teaser");
        loader.load("verticalBar", "bar-teaser");
        loader.load("horizontalBarAndBox", "compare-box-teaser");
        loader.load("pinChart", "bar-teaser");
        loader.load("pie", "pies-teaser");
        loader.load("textAndButton", "buttons-teaser");
        loader.load("imageAndBox", "image-box-teaser");
        loader.load("verticalBarAndBox", "bar-box-teaser");
        loader.load("doubleBox", "double-box-teaser");
        loader.load("horizontalBar", "bar-teaser");

        loader.loadPartial("teaserHeader", "teaser-header-partial");
        loader.loadPartial("teaserWrapperPartial", "teaser-wrapper-partial");
    };

    SkinSetup.prototype.getConfigById = function getExtraConfigs(id) {
        var configById = null;
        if (extraConfigsMap.hasOwnProperty(id)) {
            configById = extraConfigsMap[id];
        }
        return configById;
    };

    SkinSetup.prototype.getDateFormat = function getDateFormat() {
        return "dd/mm/yy";
    };

    window.SkinSetup = SkinSetup;

})(window, window.Personetics = window.Personetics || {}, jQuery);

(function(window, Personetics, $, undefined){
    var HandlebarsTeaserHelpers = function HandlebarsTeaserHelpers(parent){
        this.parent = parent;
    };

    HandlebarsTeaserHelpers.prototype.registerHelpers = function createView(){

        Handlebars.registerHelper("renderBarChart", function(layoutInstructions){
            this.renderBarChart(layoutInstructions);
        }.bind(this))

    };

    HandlebarsTeaserHelpers.prototype.renderBlock = function renderBlock(parentEl, layoutInstructions, insightId){
        var el = parentEl.find("#" + insightId + "_" + layoutInstructions.blockId);

        if(el.length > 0) {
            var block = Personetics.teaser.PBlockFactory.createBlock(this.parent, layoutInstructions);
            block.beforeRender(el, layoutInstructions, insightId);
            block.render(el, layoutInstructions);
            block.afterRender();
            block.bindEvents();
        }
    };

    window.HandlebarsTeaserHelpers = HandlebarsTeaserHelpers;

})(window, window.Personetics = window.Personetics || {}, jQuery);

(function(window, Personetics, $, undefined){
    var Widget = function Widget(config){
        this.config = config;
    };

    Widget.prototype.start = function start(element){
        this.element = element;
    };

    Widget.prototype.stop = function stop(){

    };

    Personetics.Widget = Widget;

})(window, window.Personetics = window.Personetics || {}, jQuery);
var WidgetEventHandler = function WidgetDelegate(){
};

WidgetEventHandler.prototype.sendToPServer = function sendToPServer(widget, data, onReceive){
    Personetics.utils.PLogger.debug(widget.getName() + " sending data to PServer: " + JSON.stringify(data));
};

WidgetEventHandler.prototype.navigateToPage = function navigateToPage(widget, params){
    Personetics.utils.PLogger.debug(widget.getName() + " navigating to page " + json.stringify(params));
};

WidgetEventHandler.prototype.widgetError = function widgetError(widget, errorParams){
    Personetics.utils.PLogger.debug(widget.getName() + " has encoutered an error: " + JSON.stringify(errorParams));
};

WidgetEventHandler.prototype.widgetStopped = function widgetStopped(widget){
    Personetics.utils.PLogger.debug(widget.getName() + " has stopped");
};

WidgetEventHandler.prototype.handleWidgetEvent = function handleWidgetEvent(widget, event){

};

/*
 o	On indicator click
 	Start teaser widget
 o	On teaser clicked
 	Start story widget
 o	On navigat to
 	Show message

 */
(function(window, Personetics, undefined){
    var Handlebars = Personetics.UI.Handlebars;
    var horizontalBarChartsTemplates = ["horizontalBar", "horizontalBarAndBox", "columnHorizontalBoxTeaser"];

    var imageFileExtensions = ["png", "jpg", "svg", "bmp"];

    var HandlebarsTeaserWidget = function HandlebarsTeaserWidget(config) {
        Personetics.Widget.call(this, config);

        this.helpers = new HandlebarsTeaserHelpers(this);
    };

    HandlebarsTeaserWidget.prototype = Object.create(Personetics.Widget.prototype);

    HandlebarsTeaserWidget.prototype.start = function start(parentEl) {
        Personetics.Widget.prototype.start.call(this, parentEl);

        var me = this;

        var insightId = this.config.insight.id;
        this.lang = this.config.lang;
        Personetics.processor.PStoryConfig.setConfig("lang", this.lang);

        this.teaserId = "perso-teaser-template_" + insightId;

        var teaserBlocks;
        var templateId;
        var isTextTeasers = false;
        if (!this.config.insight.hasOwnProperty("teaserTemplate") || this.config.insight.teaserTemplate === null || this.config.insight.teaserTemplate.length == 0)
            isTextTeasers = true;

        if (!this.config.insight.hasOwnProperty("teaserBlocks") || this.config.insight.teaserBlocks === null)
            isTextTeasers = true;

        if (isTextTeasers) {
            templateId = "simpleText";
            teaserBlocks = [{
                "blockId": "date",
                "type": "date-box",
                "date": ""
            }, {
                "blockId": "title",
                "type": "text",
                "text": ""
            }, {
                "blockId": "teaser-text",
                "type": "text",
                "text": this.config.insight.text
            }];
        }
        else {
            templateId = this.config.insight.teaserTemplate;
            teaserBlocks = this.config.insight.teaserBlocks;
        }

        var template = Handlebars.templates[templateId];

        if (template) {

            var newTeaserBlocks = {
                insightId: insightId,
                status: this.config.insight.status,
                highlighted: this.config.insight.highlighted
            };

            teaserBlocks.forEach(function (layoutInstructions, index) {

                if (layoutInstructions.hasOwnProperty("date")) {
                    var dateStr = layoutInstructions.date.trim();
                    var month = Personetics.utils.date.monthName(dateStr, me.lang, true);

                    if (typeof window.skinSetup.getDateFormat == "function") {
                       if (window.skinSetup.getDateFormat() == "dd/mm/yy") {
                            month = Personetics.utils.date.monthNumber(dateStr);
                            var year = Personetics.utils.date.yearNumber(dateStr, true);
                            layoutInstructions.year = year;
                       }
                    }
                    layoutInstructions.month = month;
                    var day = Personetics.utils.date.dayNumber(dateStr ,"DD");
                    layoutInstructions.day = day;
                }

                var urlObj = {};
                if (layoutInstructions.type == "image") {
                    urlObj = Personetics.imageMap.getImageClass(layoutInstructions.url, "teaser_images");
                    layoutInstructions.isAbsoluteURL = urlObj.isAbsoluteURL;
                    layoutInstructions.absUrl = urlObj.url;
                }
                if (layoutInstructions.blockId == "icon") {
                    urlObj = Personetics.imageMap.getImageClass(layoutInstructions.url, "icons");
                    layoutInstructions.isAbsoluteURL = urlObj.isAbsoluteURL;
                    layoutInstructions.absUrl = urlObj.url;
                }
                if(!(isNaN(new Date(layoutInstructions.text))))
                {
                    layoutInstructions.isDate = true;
                }
                newTeaserBlocks[layoutInstructions.blockId] = layoutInstructions;
            });

            var html = template(newTeaserBlocks);
            parentEl.append(html);

            this.afterRender(parentEl, newTeaserBlocks);
        }
        else {
            Personetics.utils.PLogger.error("HandlebarsTeaserWidget.start() - Couldn't find template: '" + templateId + "'");
        }
    };

    HandlebarsTeaserWidget.prototype.afterRender = function (parentEl, teaserBlocks) {
        // set hbox column width
        $(".pstory-hbox-column-frame").each(function () {

            var parentWidth = $(this).parent().width();

            var weight = $(this).data("width");
            var width = Math.floor(weight / 12 * parentWidth);
            width = width;// - 2; // to compensate for inline-block width
            $(this).css("width", width);

            var parentHeight = $(this).parent().height();
            $(this).css("height", parentHeight);
        });

        // render blocks
        for (var blockId in teaserBlocks) {
            if (teaserBlocks.hasOwnProperty(blockId)) {
                var layoutInstructions = teaserBlocks[blockId];

                if (layoutInstructions) {
                    // add direction to horizontal bar charts
                    if (layoutInstructions.type == "bar-chart" && horizontalBarChartsTemplates.indexOf(this.config.insight.teaserTemplate) >= 0)
                        layoutInstructions.direction = "horizontal";

                    this.helpers.renderBlock(parentEl, layoutInstructions, teaserBlocks.insightId);
                }
            }
        }

        // bind teaser click event
        var enterKeyCode = 13;
        var spaceKeyCode = 32;
        var me = this;
        me.teaserClickBind = me.config.widgetType === "inbox-story-widget"? Personetics.bind(this, this.teaserInboxClick) : Personetics.bind(this, this.teaserClick);
        parentEl.find("#" + me.teaserId).bind("click", {
            userId: me.config.userId,
            insightId: me.config.insight.id,
            instanceId: me.config.insight.insightId,
            lang: me.lang
        }, me.teaserClickBind);

        parentEl.find("#" + me.teaserId).bind("keydown", {
            userId: me.config.userId,
            insightId: me.config.insight.id,
            instanceId: me.config.insight.insightId,
            lang: me.lang
        }, function(e){
            if([enterKeyCode,spaceKeyCode].indexOf(e.which) !== -1 ){
                me.teaserClickBind(e);
            }
        });

        parentEl.find('#'+me.teaserId).attr('tabindex',0);
    };

    HandlebarsTeaserWidget.prototype.teaserClick = function teaserClick(event){
        var params = {
            userId: event.data.userId,
            insightId: event.data.insightId,
            instanceId: event.data.instanceId,
            eventType: "teaserClick",
            lang: event.data.lang,
            clickedTeaser:$(event.currentTarget),
            teaserId:this.teaserId
        };
        if (typeof personetics !== 'undefined' && personetics !== null && personetics.hasOwnProperty("sendWidgetEvent"))
            personetics.sendWidgetEvent(this, params);
        else
            Personetics.utils.PLogger.debug("personetics JS API is not available");
    },

        HandlebarsTeaserWidget.prototype.teaserInboxClick = function teaserInboxClick(event) {
            var params = {
                userId: event.data.userId,
                insightId: event.data.insightId,
                instanceId: event.data.instanceId,
                lang: event.data.lang,
                clickedTeaser: $(event.currentTarget),
                teaserId: this.teaserId,
                widget:this.config.widget
            };
            if (typeof personetics !== 'undefined' && personetics !== null && personetics.hasOwnProperty("sendWidgetEvent"))
                personetics.sendWidgetEvent(this, params);
            else
                Personetics.utils.PLogger.debug("personetics JS API is not available");

            this.config.widget.startStory(params);
        },

    HandlebarsTeaserWidget.prototype.notifyEvent = function (block, eventName, params) {
        Personetics.utils.PLogger.debug("Block: '" + block.layoutInstructions.type + "':'" + block.layoutInstructions.blockId + "' event:'" + event + "' params: " + params);
    };

    window.HandlebarsTeaserWidget = HandlebarsTeaserWidget;

})(window, window.Personetics = window.Personetics || {});

(function(window, Personetics, undefined){
    var Handlebars = Personetics.UI.Handlebars;
    var filterInbox = function filterInbox(widget){
    	this.parentEl = widget.element;
    	this.widget = widget;
    	this.renderer = Personetics.bind(widget, widget.__proto__.renderTeasers);
    	this.afterRenderer = Personetics.bind(widget, widget.__proto__.afterRender);

    	this.texts = {
            "ttlinboxAll": Personetics.dictionary.getText("ttlinboxAll"),
            "ttlinboxHighlighted": Personetics.dictionary.getText("ttlinboxHighlighted"),
            "ttlinboxUnread": Personetics.dictionary.getText("ttlinboxUnread")
        };

    	var tmpl = Handlebars.templates['filter-inbox-template'];
    	var html = tmpl({
    	    "texts": this.texts
    	});
    	this.el = this.parentEl.find(".perso-teaser-filter-wrapper");
        this.el.append(html);
    	this.afterRender();
    };

    filterInbox.prototype.bindEvents = function(){
    	var helper = this;
    	this.el.find(".perso-teaser-filter-tab").bind("click", function(e){
            helper.onSelectTab($(e.target))
        });
    };

    filterInbox.prototype.onSelectTab = function(selected){
        var selectedTabId = selected.data("id");
        this.el.find(".perso-teaser-filter-tab").removeClass('selected');
        selected.addClass('selected');
        this.filteredInsights = this.filterInsights(selectedTabId);
        this.parentEl.find(".perso-multi-teaser-template").empty();
        if(typeof this.renderer == 'function'){
        	this.renderer(this.filteredInsights);
        }
        if(typeof this.afterRenderer == 'function'){
        	this.afterRenderer(this.parentEl, this.filteredInsights, selectedTabId);
        }
        if(this.widget.config.hasOwnProperty("callbackOnSuccess") && typeof this.widget.config.callbackOnSuccess !== "undefined")
        {
            this.widget.config.callbackOnSuccess(this.widget.config);
        }
    };

    filterInbox.prototype.filterInsights = function filterInsights(selectedId){
        var filteredInsights;
        var insights = this.widget.insights;
        if( typeof insights === "undefined" || insights === null)
            return [];
        switch (selectedId){
            case "all":
                filteredInsights = insights;
                break;
            case "flagged": 
                filteredInsights = insights.filter(function(item){
                    return item.highlighted;
                });
                break;
            case "unread":
            case "new":
            filteredInsights = insights.filter(function(item){
                return item.status == "unread" || item.status == "new";
            });
                break;
            default:
                filteredInsights = insights;
        }

        return filteredInsights;
    };

    filterInbox.prototype.afterRender = function(){
    	this.bindEvents();
    };

    filterInbox.prototype.onGetInsights = function(insights){
    	this.insights = insights;
    };

    window.filterInbox = filterInbox;
})(window, window.Personetics = window.Personetics || {});
(function(window, Personetics, undefined){
    var HandlebarsMultiTeaserWidget = function HandlebarsMultiTeaserWidget(config){
        Personetics.Widget.call(this, config);
    };

    HandlebarsMultiTeaserWidget.prototype = Object.create(Personetics.Widget.prototype);

    HandlebarsMultiTeaserWidget.prototype.start = function start(el) {
        Personetics.Widget.prototype.start.call(this, el);
        el.empty();
        var me = this;

        this.renderTitle(el);
        this.renderWrapper(el);

        if (this.config.hasOwnProperty('payload') && typeof (this.config.payload) !== 'undefined' && this.config.payload !== null) {
            this.handlePayload();
        } else {
            this.sendGetInsights();
        }

    };

    HandlebarsMultiTeaserWidget.prototype.handlePayload = function handlePayload(){
        if (this.config.hasOwnProperty('isPayloadEncoded') && typeof this.config.isPayloadEncoded !== 'undefined' &&
            (this.config.isPayloadEncoded == true || this.config.isPayloadEncoded == "true"  )) {
            var decodedPayload = JSON.parse(Personetics.utils.encodeDecode.Base64.decode(this.config.payload));
            this.insights = decodedPayload.insights;
        } else {
            this.insights = this.config.payload.insights;
        }
        this.onGetInsightsResponse({insights: this.insights});
    };

    HandlebarsMultiTeaserWidget.prototype.sendGetInsights = function sendGetInsights(){
        if(typeof personetics !== 'undefined' && personetics !== null && personetics.hasOwnProperty("getInboxInsights")){
            var bankInfo = this.config.bankInfo;
            this.showLoading();
            personetics.getInboxInsights(bankInfo,
                Personetics.bind(this, this.onGetInsightsResponse),
                Personetics.bind(this, this.onError));
        }
    };

    HandlebarsMultiTeaserWidget.prototype.renderTitle = function renderTitle(el){
        if (this.config.filter == true) {
            var inboxTitle = Personetics.dictionary.getText("ttlinbox");
            var titleHtml = '<div class="pstory-title perso-teaser-title">' +
                '<div aria-live="assertive" role="text" class="pstory-title-text">' + inboxTitle + '</div>' +
                '<input aria-label="close" type="button" class="pstory-title-close">' +
                '</div>';
            el.append(titleHtml);
            el.append("<div class='perso-teaser-filter-wrapper'></div>");
            
            this.filter = new window.filterInbox(this);

            //Close Rich teasers
            var newEl = $(titleHtml);
            var closeEl = $(".pstory-title-close");
            var widget = this;
            closeEl.bind("click", function () {
                widget.closeHandler()
            });
            el.attr('aria-label', inboxTitle);
        }
    };

    HandlebarsMultiTeaserWidget.prototype.renderWrapper = function renderWrapper(el){
        el.append("<div class='perso-multi-teaser-template'></div>");
        this.parentEl = el;
        this.el = el.find(".perso-multi-teaser-template").last();
    };

    HandlebarsMultiTeaserWidget.prototype.onGetInsightsResponse = function onGetInsightsResponse(json){
        this.insights = json.insights || json;
        this.hideLoading();
        if(this.insights){
            if(this.insights.length > 0){
                this.renderTeasers(this.insights);
                this.afterRender(this.parentEl);
            }
            else{
                this.onEmptyInsights(null, Personetics.dictionary.getText("teasersWidgetNoInsightsText"));
            } 
            
        }
        else{
            this.onError(null, Personetics.dictionary.getText("teasersWidgetErrorText"));
        }
    };

    HandlebarsMultiTeaserWidget.prototype.onEmptyInsights = function onEmptyInsights(){
        this.updateHeight();
        this.el.empty();
        var params = {
            textLarge: Personetics.dictionary.getText("noInsigthsTextSecondMsg"),
            textSmall: Personetics.dictionary.getText("noInsigthsTextFirstMsg"),
            imgClass: "noInsights"
        };
        var html = Personetics.utils.messages.noInsightsMessage(params);
        this.el.append(html);
    };

    HandlebarsMultiTeaserWidget.prototype.onError = function onError(serverError, errorMessage){
        this.updateHeight();
        this.el.empty();
        var params = {
            textLarge:Personetics.dictionary.getText("OhNo"),
            textSmall:Personetics.dictionary.getText("inboxTechnicalIssues"),
            imgClass:"errorImage"
        };
        var html = Personetics.utils.messages.errorMessage(params);
        this.el.append(html);
        
    };


    HandlebarsMultiTeaserWidget.prototype.renderTeasers = function renderTeasers(insights) {
        var config = this.config;
        var el = this.el;
        var insightIdToDisplay = null;
        if (config.hasOwnProperty("insightIdToDisplay")) {
            insightIdToDisplay = config.insightIdToDisplay;
        }

        if (typeof insights !== "undefined" && insights !== null) {
            if (insightIdToDisplay !== null) {
                insights.forEach(function (insight, index) {
                    if (insight.id == insightIdToDisplay) {
                        config.insight = insight;
                        var widget = Personetics.UI.PWidgetFactory.createWidget('teaser-widget-single', config);
                        widget.start(el);
                    }
                });
            }
            else {
                insights.forEach(function (insight, index) {
                    config.insight = insight;
                    var widget = Personetics.UI.PWidgetFactory.createWidget('teaser-widget-single', config);
                    widget.start(el);
                });
            }
        }
    };

    HandlebarsMultiTeaserWidget.prototype.afterRender = function afterRender(el, insights, selectedTabId) {
        this.updateHeight();
        if(typeof insights !== 'undefined' && insights.length == 0){
            if(selectedTabId === "all"){
                this.sendGetInsights();
            }else {
                var params = {
                    text: Personetics.dictionary.getText("nothingToShowHere")
                };
                var html = Personetics.utils.messages.noFilteredInsightsMessage(params);
                this.el.append(html);
            }
        }
    };

    HandlebarsMultiTeaserWidget.prototype.updateHeight = function updateHeight() {
        var totalSiblingsHeight = 0;
        var siblings = this.el.siblings();
        $.each(siblings, function(i, sibling){
            if($(sibling).is(":visible")){
                totalSiblingsHeight += $(sibling).outerHeight(true);
            }
        });
        this.el.height(this.parentEl.height() - totalSiblingsHeight);
    }

    HandlebarsMultiTeaserWidget.prototype.showLoading = function showLoading(){
        this.el.append("<div class='perso-loading-wrapper'><div>" + Personetics.dictionary.getText("insightsLoadInsights") + "</div><div class='perso-loading'></div></div>");
    };

    HandlebarsMultiTeaserWidget.prototype.hideLoading = function hideLoading(){
        this.el.find(".perso-loading-wrapper").remove();
    };

    HandlebarsMultiTeaserWidget.prototype.closeHandler = function closeHandler(){
        if(typeof personetics !== 'undefined' && personetics !== null && personetics.hasOwnProperty("getDeviceType")) {
            var deviceType = personetics.getDeviceType();
        }
        if  (deviceType === 'web'){
           //currently it's do nothing
        }
        else {
            if (typeof personetics !== 'undefined' && personetics !== null) {
                var bridge = personetics.getJSBridge();
                if (bridge && ($.isFunction(bridge.sessionEnded))) {
                    Personetics.utils.PEventReporting.setValue("1");
                    bridge.sessionEnded();
                }
                else
                    Personetics.log("Events Delegate not defined");
            }
        }
    };

    window.HandlebarsMultiTeaserWidget = HandlebarsMultiTeaserWidget;

})(window, window.Personetics = window.Personetics || {});

(function(window, Personetics, undefined){
    var HandlebarsMultiTeaserWidgetCarousel = function HandlebarsMultiTeaserWidgetCarousel(config){
        window.HandlebarsMultiTeaserWidget.call(this, config);
    };

    HandlebarsMultiTeaserWidgetCarousel.prototype = Object.create(window.HandlebarsMultiTeaserWidget.prototype);

    HandlebarsMultiTeaserWidgetCarousel.prototype.start = function start(el) {
        window.HandlebarsMultiTeaserWidget.prototype.start.call(this, el);
    };

    HandlebarsMultiTeaserWidgetCarousel.prototype.renderTitle = function renderTitle(el){

    };

    HandlebarsMultiTeaserWidgetCarousel.prototype.sendGetInsights = function sendGetInsights(){
        if(typeof personetics !== 'undefined' && personetics !== null && personetics.hasOwnProperty("getInsights")){
            var bankInfo = this.config.bankInfo;
            this.showLoading();
            personetics.getInsights(bankInfo,
                Personetics.bind(this, this.onGetInsightsResponse),
                Personetics.bind(this, this.onError));
        }
    };

    HandlebarsMultiTeaserWidgetCarousel.prototype.afterRender = function afterRender(el) {
        var $innerWrapperEl = el.find('.perso-multi-teaser-template');
        window.HandlebarsMultiTeaserWidget.prototype.afterRender.call(this);
        addCarouselClasses(el);
        this.bindCarousel(el);
        addNextAccountForAccessibility(el);
        this.addSelectedButtonForAccessibility(el);
        if(this.config.widthMode === 'desktop'){
            $innerWrapperEl.attr("tabindex",0);
            $innerWrapperEl.find(".carousel-item [tabindex='0']").removeAttr('tabindex');
            $('#personetics-teaser-widget-carousel').find('#perso-teaser-acc-button, .perso-next-button').attr('tabindex', -1);
        }
        
    };

    HandlebarsMultiTeaserWidgetCarousel.prototype.renderWrapper = function renderWrapper(el) {
        window.HandlebarsMultiTeaserWidget.prototype.renderWrapper.call(this, el);

        var $innerWrapperEl = el.find('.perso-multi-teaser-template');
        $innerWrapperEl.wrap('<div class="carousel-animate carousel-wrapper"></div>');
        $innerWrapperEl.addClass('carousel-inner-wrapper');
    };
    var addNextAccountForAccessibility = function addNextAccountForAccessibility(el){
        var container = el;
        var nextAccText = "click to select next teaser";
        var nextAccButton = $('<input type="button" class="perso-next-button" aria-label="' + nextAccText + '" />')
        container.append(nextAccButton);
        var nextTeaser = el.find('.carousel-item.selected:not([clone="true"])').next();
        if(nextTeaser.length == 0)
            return;
        var top = nextTeaser.offset().top - container.offset().top;
        var left = nextTeaser.offset().left - container.offset().left;
        var visibleHeight = Math.min(nextTeaser.height(), container.height() - top);
        var visibleWidth = Math.max(10, container.width() - left);
        nextAccButton.css({
            'top': top,
            'left': left,
            'height': visibleHeight,
            'width': visibleWidth,
            'position': 'absolute',
            'background': 'transparent',
            'border': 'none',
            'outline': 'none'
        });
        container.css('position', 'relative');
        nextAccButton.siblings().css({'position': 'relative'});
        bindEventsForAccButton(el, nextAccButton);
    };
    var bindEventsForAccButton = function bindEventsForAccButton(el, nextAccButton){
        nextAccButton.bind('click', function(){
            var nextTeaser = el.find('.carousel-item.selected:not([clone="true"])').next();
            if(nextTeaser.length == 0)
                nextTeaser = el.find('.carousel-item.selected:not([clone="true"])').prev();
            nextTeaser.click();
        })
    };

    HandlebarsMultiTeaserWidgetCarousel.prototype.addSelectedButtonForAccessibility = function addSelectedButtonForAccessibility(el){
        var container = el;
        var selectedTeaser = el.find('.carousel-item.selected:not([clone="true"])');
        
        var teaserAccButton = $('<input id="perso-teaser-acc-button" type="button" class="account-button selected perso-teaser-acc-button"/>');
        container.append(teaserAccButton);
        if(selectedTeaser.length == 0)
            return;   
        this.setSelectedAccButtonLabel();  
               
        var top = selectedTeaser.offset().top - container.offset().top;
        var left = selectedTeaser.offset().left - container.offset().left;
        var visibleHeight = Math.min(selectedTeaser.height(), container.height() - top);
        var visibleWidth = Math.max(10, container.width() - left);
        teaserAccButton.css({
            'top': top,
            'left': left,
            'height': visibleHeight,
            'width': visibleWidth,
            'position': 'absolute',
            'background': 'transparent',
            'border': 'none',
            'outline': 'none'
        });
        container.css('position', 'relative');
        teaserAccButton.siblings().css({'position': 'relative'});
        bindEventsForTeaserAccButton(el, teaserAccButton);
    };
    HandlebarsMultiTeaserWidgetCarousel.prototype.setSelectedAccButtonLabel = function setSelectedAccButtonLabel(){
       el = this.parentEl
        var selectedTeaser = el.find('.carousel-item.selected:not([clone="true"])');
        var selectedTeaserId = selectedTeaser.attr('pstory-id');
        el.find('#perso-teaser-acc-button').attr('aria-labelledby',selectedTeaserId);
    };
    var bindEventsForTeaserAccButton = function bindEventsForTeaserAccButton(el, teaserAccButton){
        teaserAccButton.bind('click', function(){
            selectedTeaserId = teaserAccButton.attr('aria-labelledby');
            var selectedTeaser = el.find('#'+ selectedTeaserId);
            selectedTeaser.click();
        })
    };
    var addCarouselClasses = function addCarouselClasses(el) {
        var $teaserTemplateElms = el.find('.perso-teaser-template');
        var carouselItemTemplate = '<div class="carousel-item" role="button"></div>';
        $teaserTemplateElms.each(function () {
            $(this).wrap(carouselItemTemplate);
            //add pstory id for carousel
            var pstoryId = $(this).attr('id');
            $(this).parent().attr('pstory-id', pstoryId);
        })
    };

    HandlebarsMultiTeaserWidgetCarousel.prototype.bindCarousel = function bindCarousel(el){
        var param = getOptionsWidth(el);
        param.afterCarouselEnd = Personetics.bind(this, this.setSelectedAccButtonLabel);
        this.carouselAnimation = new Personetics.utils.carouselAnimation.bindCarouselEventsForAnimation(el,param);
    };

    var getOptionsWidth = function getOptionsWidth(el){
        var container = el.find('.perso-multi-teaser-template');
        var teaserWidth = container.find('.carousel-item').outerWidth(true);

        return {itemWidth: teaserWidth, selectedItemWidth : teaserWidth, numItemsDispaly: container.children().length};
    };

    window.HandlebarsMultiTeaserWidgetCarousel = HandlebarsMultiTeaserWidgetCarousel;
})(window, window.Personetics = window.Personetics || {});
