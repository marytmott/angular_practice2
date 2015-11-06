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
    // console.log(categories);
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
    // if ($scope.shoppingBag.length) {
      //update quantity
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
    // } else {
    //   //if shopping bag is empty
    //   tea.quantity = quantity;
    //   $scope.shoppingBag.push(tea);
    // }
  };
  $scope.checkout = function() {
    $location.path('/shoppingBag');
  }
}]);