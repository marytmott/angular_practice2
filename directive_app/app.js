var app = angular.module('yoyoDirectiveApp', []);
app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyos = [
    {
      name: 'Duncan Metal Drifter',
      img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
    },
    {
      name: 'Kirby Yoyo Attack',
      img: 'http://vignette3.wikia.nocookie.net/kirby/images/6/6e/Yoyo.png/revision/latest?cb=20081111121529&path-prefix=en'
    }
  ];
}]);
app.directive('gsYoyoDetails', function() {
  return {

    link: function(scope, element, attrs, controller, transcludeFn) {
      console.log('link');
      console.log(scope);
      console.log(element);
      console.log(attrs);
      console.log(controller);
      console.log(transcludeFn);

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'yellow');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    },
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyo: '=yoyoData'
    }
  };
});