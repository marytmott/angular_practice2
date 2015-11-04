app.factory('Pokemon', ['$http', '$q', function($http, $q) {
  var Pokemon = {};

  Pokemon.getFive = function() {
    var pokedex = 'http://pokeapi.co/api/v1/pokedex/1/';
    var pokemonUrl = 'http://pokeapi.co/';
    // var spriteUrl = 'http://pokeapi.co';  //DRY this with above
    var pokeUrls = [];
    var random;
    var deferred = $q.defer();

    $http.get(pokedex).success(function(data) {
      pokeData = data.pokemon;
      console.log(data.pokemon);

      //get 5 pokemon
      for (var i = 0; i < 5; i++) {
        random = Math.floor(Math.random() * pokeData.length);
        pokeUrls.push(pokeData[random].resource_uri);
      }

      //request for info about pokemon
      $q.all(pokeUrls.map(function(pokemonLink) {
        return $http.get(pokemonUrl + '/' + pokemonLink).then(function(data) {
          var spriteResource = data.data.sprites;
          console.log('sprite', data.data.sprites.length);
          if (spriteResource.length) {
          console.log('sprite2', spriteResource[0].resource_uri);
            // console.log('link', spriteResource);
            return $http.get(pokemonUrl + spriteResource[0].resource_uri).then(function(sprite) {
              data.data.image = pokemonUrl + sprite.data.image;
              return data.data;
            });
          } else {
            data.data.image = null;
            return data.data;
          }
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


//sprite