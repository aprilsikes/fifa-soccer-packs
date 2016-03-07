app.controller('PackController', ['$scope', '$http', 'PackService', function ($scope, $http, PackService) {
  // PackService.all().then(function (players) {
  //   console.log(players);
  //   $scope.players = players.data;
  //   console.log($scope.players);
  // })

  $scope.openPack = function () {
    PackService.all();
  }

  PackService.all().then(function (players) {
    // console.log(players);
    $scope.players = players;
  })
  console.log($scope.players);

  // $scope.players = PackService.all();

  // PackService.packValue().then(function (results) {
  //   $scope.packValue = results;
  // })
  // console.log($scope.packValue);
}])
