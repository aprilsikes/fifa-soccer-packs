app.controller('PackController', ['$scope', '$http', 'PackService', function ($scope, $http, PackService) {

  $scope.openPack = function () {
    PackService.all();
  }

  PackService.all().then(function (players) {
    $scope.players = players;
    console.log($scope.players);
  })

}])
