'use strict';

angular.module('jeopardyApp')
.controller('QuestionCtrl', function ($modalInstance, ngAudio, GameService, category, question) {

  this.category = category;
  this.question = question;

  this.showAnswer = false;

  this.show = function() {
    this.showAnswer = true;
  };

  this.correct = function() {
    GameService.correctSound.play();
    $modalInstance.close(true);   // true indicates correct answer
  };

  this.incorrect = function() {
    GameService.incorrectSound.play();
    $modalInstance.close(false);  // false indicates incorrect answer
  };

  this.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
