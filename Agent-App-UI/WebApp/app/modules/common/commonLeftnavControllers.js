angular.module('common.leftnavController', ['common.services'])
    .controller('commonLeftNavCtrl', ['$scope',
        '$sessionStorage',
        '$state',
        '$http',
        '$rootScope',
        'headerService',
        '$timeout',

        function($scope, $sessionStorage, $state, $http, $rootScope, headerService, $timeout) {

            $scope.currentTab = 'home'

            $scope.date = new Date();

            $scope.hideLeftNav = false;

            $scope.selectTab = function(tabName) {
                $scope.currentTab = tabName;
            }

            // $scope.$on('IncomingCall', function(events, args) {
            //     if (args) {
            //         headerService.getTicketDetails(args.ticket).then(function(response) {
            //             $scope.showTicketDetails(response.data);
            //             $timeout(function(){
            //                 $rootScope.$broadcast('ConnectIncomingCall', $sessionStorage.call_details);
            //             }, 3000);
            //         });
            //     }
            // })

        }
    ])
