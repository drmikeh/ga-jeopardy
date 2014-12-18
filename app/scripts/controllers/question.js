'use strict';

angular.module('jeopardyApp')
.controller('QuestionCtrl', function ($modalInstance, ngAudio, category, question) {

  var correctSound   = ngAudio.load('sounds/final-reveal.mp3');
  var incorrectSound = ngAudio.load('sounds/buzzer.mp3');

  this.category = category;
  this.question = question;

  this.showAnswer = false;

  this.show = function() {
    this.showAnswer = true;
  };

  this.correct = function() {
    correctSound.play();
    $modalInstance.close(true);   // true indicates correct answer
  };

  this.incorrect = function() {
    incorrectSound.play();
    $modalInstance.close(false);  // false indicates incorrect answer
  };

  this.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
