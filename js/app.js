var app = angular.module('april', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/packs', {
        templateUrl: 'partials/packs.html',
        controller: 'PackController'
      })
    $locationProvider.html5Mode(true);
});
