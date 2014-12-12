'use strict';

/**
 * @ngdoc function
 * @name jeopardyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jeopardyApp
 */
angular.module('jeopardyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
