var output_adaptation_algorithm = 'for (var i = 1; i <= Object.keys(output.dataJson).length; i++) {outfromanother=callMicroservice(output.dataJson[i].Microservice_ID, "default",output.dataJson[i].input); output[i] = outfromanother; } out(output);for (var i = 1; i <= Object.keys(output.dataJson).length; i++) { outfromanother=callMicroservice(output.dataJson[i].Microservice_ID, "default",output.dataJson[i].input); output[i] = outfromanother;} out(output);'
var flow_config = {
    "name": "test_flow_microservice",
    "description": "Test Flow Microservice",
    "public": true,
    "defaultOperationId": "default",
    "operations": {
        "default": {
            "name": "default",
            "description": "default operation",
            "isDefault": true,
            "autostart": false,
            "configuration": {
                "connectorId": "org.adoxx.microservice.api.connectors.impl.ContentProviderConnector",
                "outputDescription": "",
                "outputAdaptationAlgorithm": output_adaptation_algorithm,
                "statusCheckAlgorithm": "",
                "configStart": {},
                "configCall": {
                    "content": {
                        "value": ""
                    },
                    "fileId": {
                        "value": ""
                    },
                    "contentType": {
                        "value": "JSON"
                    },
                    "contentMIME": {
                        "value": ""
                    },
                },
                "inputs": {}
            }
        }
    },
    "moreInfos": {
        "ownerHtml": "<a href=\"http://www.adoxx.org\">ADOxx Team</a>",
        "presentationImageUrl": "https://www.adoxx.org/live/image/layout_set_logo?img_id=179909&t=1521267871183",
        "descriptionHtml": "<p>Test Flow Microservice</p>",
        "visible": true
    }
};
$(function () {
    $('#representation_form').on('submit', function (e) {
        e.preventDefault();
        var data = "{\"inputs\":{\"userinput\":\"" + $('#representation').val() + "\"}}"
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/callMicroserviceForced?microserviceId=" + $('#microservice_id').val() + "&operationId=default",
            data: data,
            success: function (response) {
                $.each(response.data, function (i, f) {
                    var tblRow = "<tr class='" + f.layout + "'>" + "<td>" + JSON.stringify(f) + "</td>" + "</tr>"
                    $(tblRow).appendTo("#userdata tbody");
                })
            },
            dataType: 'json',
            contentType: "application/json",
        });
    });
});
$(function () {
    $('#create_form').on('submit', function (e) {
        e.preventDefault();
        flow_config.operations.default.configuration.configCall.content.value = $('#confignewms').val();
        var flow_config_json_string = JSON.stringify(flow_config);
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/createMicroservice",
            data: flow_config_json_string,
            success: function (response) {
                var tblRow = "<tr>" + "<td>" + response.data.microserviceId + "</td>" + "</tr>"
                $(tblRow).appendTo("#userdata tbody");
            },
            dataType: 'json',
            contentType: "application/json",
        });
    });
});
///////////////////////////////////////////////////////////////////////////////////////////
$(function () {
    $('#olive_form').on('submit', function (e) {
        e.preventDefault();
        var viewModuleConfig = {
            mscEndpoint: 'http://localhost:8080/micro-service-controller-rest/rest/',
            viewName: ''
        };
        var viewModuleContent = [{
            menuName: 'Output of flow microservice',
            microserviceId: $('#olive_text').val(),
            operationId: 'default',
            microserviceInputJSON: '{"":{}}',
            microserviceOutputAdaptAlg: output_adaptation_algorithm
        }, ];
        var viewModule = olive.modules.newOliveViewUI(viewModuleConfig);
        viewModule.setContent(viewModuleContent);
        $('#viewPanel').append(viewModule.render());
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////
$(function () {
    $('#tile_form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/callMicroserviceForced?microserviceId=" + $('#tile_text').val() + "&operationId=default",
            data: '{"":{}}',
            success: function (response) {
                $.each(response.data, function (i, f) {
                    var tile = '<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front">' + i + '</div><div class="flip-card-back"><p>' + JSON.stringify(f) + '</p></div></div></div>'
                    $(tile).appendTo("#viewPanelTile");
                })
            },
            dataType: 'json',
            contentType: "application/json",
        });
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function () {
    $('#buttons_form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/retrieveMicroserviceConfiguration?microserviceId=" + $('#buttons_text').val(),
                   success: function (response) {
                $.each(JSON.parse(response.data.operations.default.configuration.configCall.content.value), function (i, f) {



                    var microserviceStartButton= $('<button class="btn btn-info btn-sm" type="button">Start</button>').click(function (e) {
                        e.preventDefault();
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/startMicroservice?microserviceId=" + f.Microservice_ID + "&operationId=default",
                             success: function (response) {
                             alert("microservice started");
                            },
                            dataType: 'json',
                            contentType: "application/json",
                        });




                    });

                    var microserviceStopButton= $('<button class="btn btn-info btn-sm" type="button">Stop</button>').click(function (e) {
                        e.preventDefault();
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/stopMicroservice?microserviceId=" + f.Microservice_ID + "&operationId=default",
                             success: function (response) {
                             alert("microservice stopped");
                            },
                            dataType: 'json',
                            contentType: "application/json",
                        });




                    });

                    var microserviceCheckButton= $('<button class="btn btn-info btn-sm" type="button">Check</button>').click(function (e) {
                        e.preventDefault();
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:8080/micro-service-controller-rest/rest/msc/checkMicroserviceStatus?microserviceId=" + f.Microservice_ID + "&operationId=default",
                             success: function (response) {
                             alert(JSON.stringify(response.data.connectorInstanceStatus));
                            },
                            dataType: 'json',
                            contentType: "application/json",
                        });




                    });






                var tile = '<br><br><div><h2><div class="badge badge-success"> Microservice name: '+ f.name +'           </div><div class="badge badge-primary"> Microservice operation name: '+ f.Microservice_Operation +'</div></h2></div>'
                $(tile).appendTo("#viewPanelTile");
                $(microserviceStartButton).appendTo("#viewPanelTile");
                $(microserviceStopButton).appendTo("#viewPanelTile");
                $(microserviceCheckButton).appendTo("#viewPanelTile");
                });
            },
            dataType: 'json',
            contentType: "application/json",
        });
    });
});