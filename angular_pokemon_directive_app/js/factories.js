app.factory('Pokemon', ['$http', '$q', function($http, $q) {
  var Pokemon = {};

  Pokemon.getFive = function() {
    var pokedex = 'http://pokeapi.co/api/v1/pokedex/1/';
    var onePokemonUrl = 'http://pokeapi.co/';
    var pokeUrls = [];
    var random;
    var deferred = $q.defer();


    $http.get(pokedex).success(function(data) {
      pokeData = data.pokemon;
      console.log(data.pokemon);

      //get 5 pokemon
      for (var i = 0; i < 5; i++) {
        random = Math.floor(Math.random() * pokeData.length);
        // console.log(random);
        pokeUrls.push(pokeData[random].resource_uri);
      }

      //request for info about pokemon
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

  // Pokemon.getImages = function() {
  //   var deferred = $q.defer;
  //   $q.all(pokeUrls)
  // };

  return Pokemon;
}]);


//sprite