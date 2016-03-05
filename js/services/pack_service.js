app.factory('PackService', function ($http) {
  return {
    all: function() {
      return $http.get('http://localhost:3000/api/packs');
    }
  }
})
