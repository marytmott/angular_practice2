app.controller('PokemonController', ['$scope', 'Pokemon', function($scope, Pokemon) {
  Pokemon.getFive().then(function(pokemons) {
    $scope.pokemons = pokemons;
    console.log(pokemons[0]);

  });
}]);