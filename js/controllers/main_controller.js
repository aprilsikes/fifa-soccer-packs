app.controller('MainController', ['$scope', '$http', 'PackService', function ($scope, $http, PackService) {
  $scope.openPack = function () {
    PackService.all();
  }
}])
