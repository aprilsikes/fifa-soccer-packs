app.controller('MainController', ['$scope', '$http', 'PackService', function ($scope, $http, PackService) {
  PackService.all().then(function (players) {
    console.log(players);
    $scope.players = players.data;
    console.log($scope.players);
  })
}])
