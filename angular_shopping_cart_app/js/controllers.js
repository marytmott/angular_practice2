app.controller('ShopController', ['$scope', 'ShopInventory', function($scope, ShopInventory) {
  ShopInventory.getInventory().then(function(data) {
    // console.log(data.data);
    $scope.teas = data.data;
    // $scope.categories = data.data.map()
  });
  $scope.tea = {};
  // $scope.tea.quantity = 1;
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
    console.log($scope.shoppingBag);
  };

  // check if item exists and modify it!
}]);