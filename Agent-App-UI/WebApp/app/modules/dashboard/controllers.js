angular.module('dashboard.controller', ['dashboard.services'])
    .controller('dashboardCtrl', ['$scope', '$sessionStorage', '$state', '$http', 'dashboardService',
        function($scope, $sessionStorage, $state, $http, dashboardService) {
            $scope.personal_info = $sessionStorage.personal_info;
            $scope.getGraphData = getGraphData;
            $scope.updateGraphData = updateGraphData
            $scope.chart1Interval = [3,5,10,24]
            $scope.chart2Interval = [1,3,5,24]
            $scope.selectedSite = ""
            $scope.minValueSelected = ""
            $scope.quaterValueSelected = ""

            $scope.filterMinChart = function(value) {
              $scope.minValueSelected = value
                var data = {
                  "instantaneous": true,
                  "id": $scope.selectedSite.id,
                  "time_interval": value
                }
                var graphData = dashboardService.getGraphData(data);
                graphData.then(function(response) {
                    $scope.minWiseData = [response.data.instantaneous_yaxis];
                    $scope.minWiseLabel = response.data.instantaneous_xaxis;
                });
            }

            $scope.filterQuaterChart = function(value) {
              $scope.quaterValueSelected = value
                var data = {
                  "interval": true,
                  "id": $scope.selectedSite.id,
                  "time_interval": value
                }
                var graphData = dashboardService.getGraphData(data);
                graphData.then(function(response) {
                    $scope.quaterWiseData = [response.data.interval_yaxis];
                    $scope.quaterWiseLabel = response.data.interval_xaxis;
                });
            }

            var siteList = dashboardService.getSiteDetails();
            siteList.then(function(response) {
                $scope.activeData = response.data.active_data;
                $scope.inactiveData = response.data.inactive_data;
                $scope.proposedData = response.data.proposed_data;
            });

            function getGraphData(obj) {
                $scope.selectedSite = obj
                var data = {
                  "instantaneous": true,
                  "interval": true,
                  "id": obj.id
                }
                var graphData = dashboardService.getGraphData(data);
                graphData.then(function(response) {
                    $scope.minWiseData = [response.data.instantaneous_yaxis];
                    $scope.quaterWiseData = [response.data.interval_yaxis];
                    $scope.minWiseLabel = response.data.instantaneous_xaxis;
                    $scope.quaterWiseLabel = response.data.interval_xaxis;
                });
            }


              $scope.series1 = ['Instantaneous Graph'];
              $scope.series2 = ['Interval Graph'];

              $scope.onClick = function (points, evt) {
                console.log(points, evt);
              };

              function updateGraphData() {
                $scope.data = $scope.data2
              }

              $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
              $scope.options = {
                scales: {
                  yAxes: [
                    {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                    }
                  ]
                }
              };
        }
    ]);
