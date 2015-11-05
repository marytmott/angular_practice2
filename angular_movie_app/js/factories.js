app.factory('OmdbSearch', ['$http', function($http) {
  var OmdbSearch = {};

  OmdbSearch.search = function(movieTitle) {
    var encodedTitle = encodeURIComponent(movieTitle);
    var url = 'http://www.omdbapi.com/?s=' + encodedTitle + '&y=&plot=short&r=json';

    return $http.get(url).then(function(response) {
      return response.data.Search;
    });
  };

  OmdbSearch.movieIdSearch = function(movieId) {
    var url = 'http://www.omdbapi.com/?i=' + movieId + '&plot=short&r=json';

    return $http.get(url).then(function(response) {
      return response.data;
    });
  };

  return OmdbSearch;
}]);