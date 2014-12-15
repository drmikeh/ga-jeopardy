'use strict';

angular.module('jeopardyApp')
.controller('QuestionCtrl', function ($scope, $modalInstance, ngAudio, category, question) {

  var correctSound   = ngAudio.load('sounds/final-reveal.mp3');
  var incorrectSound = ngAudio.load('sounds/buzzer.mp3');

  $scope.category = category;
  $scope.question = question;

  $scope.showAnswer = false;

  $scope.show = function() {
    $scope.showAnswer = true;
  };

  $scope.correct = function() {
    correctSound.play();
    $modalInstance.close(true);   // true indicates correct answer
  };

  $scope.incorrect = function() {
    incorrectSound.play();
    $modalInstance.close(false);  // false indicates incorrect answer
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
