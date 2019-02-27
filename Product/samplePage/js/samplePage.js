var home = function home() {
    this.url = "../personetics/execute";
    this.initialize = function initialize() {

        this.config = {
            lang: "fr",
            deviceType: "web",
            ctxId: "dashboard",
            payload: payload,
            isPayloadEncode: true,
            filter: false
        };

        if (typeof payload != 'undefined' && payload !== null) {
            payload = Personetics.utils.encodeDecode.Base64.encode(JSON.stringify(payload));
        }
        else {
            var payload = null;
        };
        // init skin setup
        window.skinSetup = new SkinSetup();
        window.skinSetup.init();
    };
    this.initialize();

    this.getUrlParams = function getUrlParams() {
        var getParams = {
            userId: Personetics.utils.url.getParameterByName("userId"),
            pserverUrl: Personetics.utils.url.getParameterByName("pserverUrl"),
            isPredefined: Personetics.utils.url.getParameterByName("isPredefined"),
            teasersView: Personetics.utils.url.getParameterByName("teasersView"),
            config: Personetics.utils.url.getParameterByName("config")
        };
        return getParams;
    };

    this.callStartWidget = function callStartWidget(config) {
        personetics.startWidget(config);
    };

    this.onDocumentReady = function onDocumentReady() {
        var getParams = this.getUrlParams();

        this.config.el = $("body");
        this.config.userId = getParams.userId;
        this.config.widgetType = (getParams.teasersView == 'Carousel') ? 'teaser-widget-carousel' : 'teaser-widget';
        this.config.pserverUrl = this.url;
        if (typeof getParams.userId !== 'undefined') {
            if (getParams.isPredefined && window.testData) {
                this.config.payload = this.buildPayLoad();
                this.config.payload.insights = window.testData.richTeaser;
                this.callStartWidget(this.config);
            } else{
                    this.callStartWidget(this.config);
            }

        };


        $('.close-button').click(function () {
            var deviceType = personetics.getDeviceType();
            var bridge = personetics.getJSBridge();
            if (deviceType != "web") {
                bridge.sessionEnded();
            } else {
                window.location = "login.html";
            }
        });

    };

    this.buildPayLoad = function(){
        var payload = {
            lang: "fr",
            deviceType: "web",
            ctxId: "dashboard",
            insights:null,
            isPayloadEncode: true
        };
        return payload;
    };
};

var myHome = new home();
$(document).ready(function () {
    myHome.onDocumentReady();
});
