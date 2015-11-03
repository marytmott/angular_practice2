app.factory('Pokemon', ['$http', '$q', function($http, $q) {
  var Pokemon = {};

  //use q to get info about the pokemon returned

// console.log('executed');
  Pokemon.getFive = function() {
    var pokedex = 'http://pokeapi.co/api/v1/pokedex/1/';
    var onePokemonUrl = 'http://pokeapi.co/';
    var pokeUrls = [];
    var random;
    var fivePokemon = [];
    var deferred = $q.defer();


    $http.get(pokedex).success(function(data) {
      // var data = JSON.parse(data);
      pokeData = data.pokemon;
      console.log(data.pokemon);
    //get 5 random pokemon
    //make $q requests
      //do this at the http call?
      //get 5 pokemon
      for (var i = 0; i < 5; i++) {
        random = Math.floor(Math.random() * pokeData.length);
        // console.log(random);
        pokeUrls.push(pokeData[random].resource_uri);
      }

      console.log(pokeUrls);
      $q.all(pokeUrls.map(function(pokemonUrl) {
        return $http.get(onePokemonUrl + pokemonUrl).then(function(data) {
          return data.data;
        });
      })).then(function(pokemons) {
        deferred.resolve(pokemons);
        //collectung data, puts it into original promise
      });
    });

    return deferred.promise;
  };

  return Pokemon;
}]);

//name
//types
//moves (6)
//sprite