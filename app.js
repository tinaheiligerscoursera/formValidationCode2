(function() {
  'use strict';

  angular.module('validationApp', []);

  angular.module('validationApp')
  .controller('mainController', function($scope) {
    $scope.submitForm = function(isValid) {
      if (isValid) {
        alert('Info submitted! YAY!');
      }
    };
  });

})();