'use strict';

angular.module('jeopardyApp')
.controller('QuestionCtrl', function ($scope, $modalInstance, category, question) {

  $scope.category = category;
  $scope.question = question;

  $scope.showAnswer = false;

  $scope.show = function() {
    $scope.showAnswer = true;
  };

  $scope.correct = function() {
    $modalInstance.close(true);   // true indicates correct answer
  };

  $scope.incorrect = function() {
    $modalInstance.close(false);  // false indicates incorrect answer
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
