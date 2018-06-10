angular.module('header.service',[])
       .factory('headerService',[
       '$http',
       '$cookies',
       '$rootScope',
       '$sessionStorage',
       function($http, $cookies, $rootScope, $sessionStorage) {

        var service = {};
        service.logout = Logout;
        return service;

        function Logout(){
            var payload = {
                    "token": $sessionStorage.access_token,
                }
            $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
            $http.defaults.headers.common.Authorization = 'Bearer '+ $sessionStorage.access_token;
            var url =  $http.post($rootScope.endPoint + '/api/logout/', data=payload);
            return url;
        };

}]);
