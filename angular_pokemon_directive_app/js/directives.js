app.directive('pmPokemonDetails', function() {
  return {
    templateUrl: '/partials/pokemon-details.html',
    scope: {
      pokemon: '=pokemonData'
    }
  };
});