app.factory('PackService', function ($http) {
  return {
    all: function() {
      return $http.get('http://localhost:3000/api/packs').then(function (players) {
      // return $http.get('https://shrouded-inlet-22118.herokuapp.com/', {method: "jsonp"}).then(function (players) {
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

    // packValue: function () {
    //   var total = 0;
    //   this.all().then(function (results) {
    //     console.log(results);
    //     for (var i = 0; i < results.length; i++) {
    //       total += (results[i].fifa_rating);
    //     }
    //   });
    //   console.log(total);
    //   return total;
    // }
  }
})
