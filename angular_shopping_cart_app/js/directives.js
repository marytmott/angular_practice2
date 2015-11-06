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
app.directive('tsTeaTitle', function() {
  return {
    templateUrl: '/partials/tea-title.html',
    scope: {
      tea: '=teaData'
    }
  };
});