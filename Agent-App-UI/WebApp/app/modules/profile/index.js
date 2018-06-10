'use strict';

angular.module('profile', [
    'profile.controller']
).run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]).config(
    ['$stateProvider',
     '$urlRouterProvider',
     '$httpProvider',
     '$httpProvider',
     function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('header.leftnav.profile' ,{
            url: '/profile',
            cache: false,
            templateUrl: '/static/modules/profile/views/profile.html',
            controller: 'profileCtrl',
            params: {
                ticket: null
            },
            label: 'Profile',
        })

    }]);
