function AppListCtrl($scope, $http, $templateCache) {
    $scope.listApps = function() {
        $http({method: 'GET', url: 'http://www.softinsa.pt:7009/rest/wine-cellar-php/api/wines', cache: $templateCache}).
            success(function(data, status, headers, config) {
                $scope.apps = data;                  //set view model
                $scope.view = './partials/partial2.html'; //set to list view
            }).
            error(function(data, status, headers, config) {
                $scope.apps = data || "Request failed";
                $scope.status = status;
                $scope.view = './partials/partial2.html';
            });
  }

  $scope.showApp = function(id) {
      $http({method: 'GET', url: 'http://www.softinsa.pt:7009/rest/wine-cellar-php/api/wines' + id, cache: $templateCache}).
          success(function(data, status, headers, config) {
              $scope.appDetail = data;               //set view model
              $scope.view = './partials/partial2.html'; //set to detail view
          }).
          error(function(data, status, headers, config) {
              $scope.appDetail = data || "Request failed";
              $scope.status = status;
              $scope.view = './partials/partial2.html';
          });
  }

$scope.view = './Partials//list.html'; //set default view
$scope.listApps();

}
AppListCtrl.$inject = ['$scope', '$http', '$templateCache'];