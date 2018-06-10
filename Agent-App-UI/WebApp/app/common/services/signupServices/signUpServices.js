angular.module('signUp.service', [])
    .factory('signUpService', [
        '$http',
        '$rootScope',
        function($http, $rootScope) {

            var service = {};
            service.signUp = signUp;
            return service;

            function signUp(data) {
                var result = $http.post($rootScope.endPoint + '/api/user/register/', angular.toJson(data))
                return result;
            };
        }
    ]);
