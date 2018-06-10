angular.module('profile.controller', ['profile.services'])
    .controller('profileCtrl', ['$scope',
        '$sessionStorage',
        '$state',
        '$http',
        'profileService',
        '$stateParams',
        '$rootScope',

        function($scope, $sessionStorage, $state, $http, profileService, $stateParams, $rootScope) {

            $scope.personal_info = $sessionStorage.personal_info;
            $scope.updateUser = updateUser
            $scope.passwordChanged = false

            var userData = profileService.getUserProfile();
            userData.then(function(response) {
                $scope.user = response.data;
            });

            function updateUser() {
                if ($scope.user.old_password && !$scope.user.new_password || $scope.user.new_password && !$scope.user.old_password) {
                    alert("Hang On!!! Please enter both old and new passwords Or leave both blank")
                    return;
                }
                else {
                    if ($scope.user.old_password && $scope.user.new_password) {
                        if ($scope.user.new_password.length < 8) {
                            alert("Password Should be minimum of 8 length")
                            return;
                        }
                        else {
                            $scope.passwordChanged = true
                        }
                    }
                    var updateData = profileService.updateUserProfile($scope.user);
                    updateData.then(function(response) {
                        if ($scope.passwordChanged) {
                            alert("User Deatil and Password has been Updated successfully! Request you to please Re-login")
                        }
                        alert("Data Updated Successfully !!!")
                    });
                    updateData.error(function(response) {
                        alert("Failed To Update Data", response.data.msg)
                    })
                }
            }
        }
    ])
