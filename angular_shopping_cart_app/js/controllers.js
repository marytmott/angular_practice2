app.controller('ShopController', ['$scope', '$location', 'ShopInventory', function($scope, $location, ShopInventory) {
  function makeCategoryArray(dataArr) {
    var categories = dataArr.map(function(tea) {
      return tea.categories;
    });
    //i <3 you underscore!
    //flatten array
    categories = _.flatten(categories);
    //remove duplicates
    categories = _.uniq(categories);
    return categories;
  }

  ShopInventory.getInventory().then(function(data) {
    console.log(data.data);
    $scope.teas = data.data;
    $scope.categories = makeCategoryArray(data.data);
  });
  $scope.alphabetical = '+name';
  $scope.shoppingBag = [];
  $scope.addToBag = function(tea, quantity) {
    var itemFound = false;
    quantity = parseInt(quantity);

    $scope.shoppingBag.forEach(function(item) {
      if (item._id === tea._id) {
        item.quantity = quantity;
        itemFound = true;
      }
    });
    if (!itemFound) {
      tea.quantity = quantity;
      $scope.shoppingBag.push(tea);
    }
  };
  $scope.checkout = function() {
    var shoppingBagStorage = JSON.stringify($scope.shoppingBag);
    localStorage.setItem('shoppingBag', shoppingBagStorage);
    $location.path('/shoppingBag');
  }
}]);
app.controller('ShoppingBagController', ['$scope', function($scope) {
  $scope.shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'));
  console.log($scope.shoppingBag);
}])