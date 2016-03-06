app.factory('PackService', function ($http) {
  return {
    all: function() {
      return $http.get('http://localhost:3000/api/packs').then(function (players) {
        console.log(players);
        console.log(players.data);
        var array2 = players.data;
        var array = [];
        for (var i = 0; i < 12; i++) {
          array.push(array2[Math.floor(Math.random() * (5 - 0 + 1)) + 0]);
        }
        console.log(array);
        return array;
      })
    }
  }
})
