var SampleEventDelegate = function () {

    this.sessionEnded = function () {
        console.log("Customer: sessionEnded");
        var data = {
            requestString: "sessionEnded"
        };
        this.sendRequestToPServer(data);
    };

    this.registered = function () {
        console.log("Customer: Registration completed");
    };

    this.sessionStarted = function () {
        console.log("Customer : sessionStarted");
    };


    /**
    * Send data to native interface
    * @param requestId
    * @param data
    */
    this.sendRequestToPServer = function (data, requestId) {
        console.log("Personetics Events Delegate requestDataFromNative: " + JSON.stringify(data) + ", requestId: " + requestId);

        var requestString = data.hasOwnProperty("requestString") ? data.requestString : "sendRequestToPServer";
        var json = { requestData: data, requestId: requestId };

        var channel = personetics.getDeviceType();
        if (channel === 'ios') {
            this.callIphoneBridge(json, requestString, requestId);
            /* Added for backward support to UIWebView */
            this.callIUIWebViewPhoneBridge(json, requestString, requestId);
        }
        else if (channel === 'android') {
            this.callAndroidBridge(json, requestString, requestId);
        }
        else {
            if (channel === 'web') {
                return;
            }
            else
                throw "invalid deviceTyoe '" + channel + "'";
        }

    };

    /**
    * Receive data from native
    * @param requestId
    * @param data
    */
    this.handlePServerResponse = function (data, requestId) {
        var decodedData = Personetics.utils.encodeDecode.Base64.decode(data);
        try {
            decodedData = $.parseJSON(decodedData);
        } catch (error) {
            decodedData = {
                ok: false,
                status: '600',
                statusMessage: "A network error occurred - check your network and try again."
            };
        }

        personetics.handlePServerResponse(decodedData, requestId);
    };

    this.navigateToPage = function (params) {
        console.log("Customer : navigateToPage, Params : " + JSON.stringify(params));

        var data = {
            requestString: "navigateToPage",
            data: params
        };

        this.sendRequestToPServer(data);
    };

    this.sessionError = function (error) {
        var data = {
            requestString: "sessionError",
            data: error
        };
        var dataError = error;
        try {
            JSON.parse(error);
        } catch (e) {
            if (dataError === null || typeof dataError !== 'object')
                dataError = { status: '600', statusMessage: "A network error occurred - check your network and try again." };
            dataError = JSON.stringify(dataError);
        }
        console.log("Customer : sessionError, Params: " + dataError);
        data.data = dataError;
        this.sendRequestToPServer(data);
    };

    this.widgetEvent = function widgetEvent(widget, params) {
        var eventType = params.eventType;
        switch (eventType) {
            case "teaserClick":
                this.sendGetInsights();   
                this.startWidgetConfig = params;
                break;
        }
    };

    this.sendGetInsights = function sendGetInsights(){
        personetics.getInboxInsights(undefined,
            Personetics.bind(this, this.startStoryWidget),
            Personetics.bind(this, this.onError));
    };
    this.startStoryWidget = function startStoryWidget(json){
        this.startWidgetConfig.widgetType = "story-widget-multi-carousel";
        this.startWidgetConfig.el = $("body");
        this.startWidgetConfig.teasersPayload = json.insights;
        personetics.startWidget(this.startWidgetConfig);
        delete this.startWidgetConfig;
    };
    this.onError = function onError(err){
       console.log(' getInboxInsights error: ' + err);
    };

};