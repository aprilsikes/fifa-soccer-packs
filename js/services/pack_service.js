app.factory('PackService', function ($http) {
  return {
    all: function() {
      return $http.get('https://shrouded-inlet-22118.herokuapp.com/api/packs', {method: "jsonp"}).then(function (players) {
        console.log(players);
        console.log(players.data);
        var array2 = players.data;
        var array = [];
        for (var i = 0; i < 12; i++) {
          array.push(array2[Math.floor(Math.random() * (50 - 0 + 1)) + 0]);
        }
        console.log(array);
        return array;
      })
    },

  }
})
