var app = angular.module('movieApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'SearchController'
    })
    .when('/:id/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
    .when('/:movie', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .otherwise({redirectTo: '/'});

  // $locationProvider.html5Mode(true);
}]);