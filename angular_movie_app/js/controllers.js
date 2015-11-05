app.controller('SearchController', ['$scope', '$location', function($scope, $location) {
  $scope.movie = {};
  $scope.encodedMovieTitle = encodeURIComponent($scope.movie.title);
  $scope.redirect = function() {
    $location.path($scope.movie.title);
  }
  $scope.clear = function() {
    $scope.movie = {};
  }
}]);
app.controller('HomeController', ['$scope', '$routeParams', 'OmdbSearch', function($scope, $routeParams, OmdbSearch) {
  OmdbSearch.search($routeParams.movie).then(function(data) {
    $scope.searchResults = data;
  });
}]);
app.controller('ShowController', ['$scope', '$routeParams', 'OmdbSearch', function($scope, $routeParams, OmdbSearch) {
  OmdbSearch.movieIdSearch($routeParams.id).then(function(data) {
    console.log(data);
    $scope.movieSpecs = data;
  });
}]);
//show page w/ info
