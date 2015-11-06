app.directive('tsTeaDetails', function() {
  return {
    templateUrl: '/partials/tea-details.html',
    scope: {
      tea: '=teaData'
    }
  };
});
app.directive('tsTeaImage', function() {
  return {
    templateUrl: '/partials/tea-image.html',
    scope: {
      tea: '=teaData'
    }
  };
});
app.directive('tsTeaName', function() {
  return {
    templateUrl: '/partials/tea-name.html',
    scope: {
      tea: '=teaData'
    }
  };
});
app.directive('tsInfoCart', function() {
  console.log('called');
  return {
    templateUrl: '/partials/tea-info-cart.html',
    scope: {
      tea: '=teaData'
    }
  };
});