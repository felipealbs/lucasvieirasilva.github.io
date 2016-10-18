'use strict';
app.service('siteService', ['$http', 'settings', function ($http, settings) {

    var serviceBase = settings.apiServiceBaseUri;

    this.send = function (model) {
        return $http.post(serviceBase + 'api/Site/SendContact', model, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (results) {
            return results;
        });
    };
}]);