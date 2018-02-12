
var loginPage = function loginPage(){
    this.initialize = function initialize(){
        this.url = "../personetics/execute";
        this.insightsTemplate = "<div class='perso-teaser' data-id='{{id}}'>{{text}}</div>";
    };
    this.initialize();

    this.onDocumentReady = function onDocumentReady(){
        this.bindEvents();
    };

    this.bindEvents = function bindEvents(){
        var me = this;
        $("#initPersoneticsButton").click(function(){
            me.userId = $("#userId").val();
            me.isPredefined = $('#isUsePredefinedCheckbox').attr('checked');
            me.teasersView = $('#view-selector :selected').text();
            if(me.userId && me.userId.length > 0)
                window.location = "samplePage.html?userId=" + me.userId + "&isPredefined=" + me.isPredefined + "&teasersView=" + me.teasersView + "&pserverUrl=" + me.url;
            else
                alert("Please fill out all inputs");
        });
    };
};

var myLogin = new loginPage();
$(document).ready(function(){
    myLogin.onDocumentReady();
});
