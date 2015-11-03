var app = angular.module('shoppingCart', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/cart.html',
      controller: 'cartController'
    })
    .otherwise({redirectTo: '/'});
}]);