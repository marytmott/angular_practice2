var app = angular.module('shoppingCart', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/shop.html',
      controller: 'ShopController'
    })
    .otherwise({redirectTo: '/'});
}]);