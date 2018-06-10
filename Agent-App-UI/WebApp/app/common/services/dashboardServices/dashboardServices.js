angular.module('dashboard.service', [])
    .factory('dashboardService', [
        '$http',
        '$cookies',
        '$rootScope',
        '$sessionStorage',
        function($http, $cookies, $rootScope, $sessionStorage) {

            var service = {};
            service.getSiteDetails = getSiteDetails;
            service.getGraphData = getGraphData;
            return service;

            function getSiteDetails() {
                var result = $http.get($rootScope.endPoint + '/api/site/list/');
                return result;
            }

            function getGraphData(data) {
                var result = $http.post($rootScope.endPoint + '/api/site/data/', angular.toJson(data));
                return result;
            }

        }
    ]);
