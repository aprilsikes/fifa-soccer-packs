var app = angular.module('april', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/api', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/api/packs', {
        templateUrl: 'partials/packs.html',
        controller: 'PackController'
      })
    $locationProvider.html5Mode(true);
});
