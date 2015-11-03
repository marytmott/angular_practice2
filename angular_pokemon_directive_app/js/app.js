var app = angular.module('pokemonDirective', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/pokemon.html',
      controller: 'PokemonController'
    })
    .otherwise({redirectTo: '/'});
}]);