sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'trav.ust.ma.travelproc',
            componentId: 'TravelObjectPage',
            contextPath: '/Travel'
        },
        CustomPageDefinitions
    );
});