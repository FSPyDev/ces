'use strict';

angular.module('dashboard', [
    'dashboard.controller'
]).config(
    ['$stateProvider',
     '$urlRouterProvider',
     '$httpProvider',
     function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider

        .state('header.leftnav.dashboard', {
            url: '/dashboard',
            cache: false,
            templateUrl: '/static/modules/dashboard/views/dashboard.html',
            controller: 'dashboardCtrl',
            label: 'Dashboard',
        })
    }]);
