'use strict';

angular.module('jeopardyApp')
.controller('GameCtrl', function ($modal, $log, ngAudio, GameService) {

  var that = this;

  this.getGame = function(name) {
    GameService.getGame(name).success(function(game) {
      that.game = game;
      that.score = 0;
    });
  };

  this.getGame('game1');

  var questionSound = ngAudio.load('sounds/bell.mp3');

  this.doQuestion = function(category, question) {
    questionSound.play();
    var modalInstance = $modal.open({
      templateUrl: 'views/question.html',
      controller: 'QuestionCtrl',
      size: 'lg',
      backdrop: 'static', // backdrop is present but modal window is not closed when clicking outside of the modal window.
      keyboard: false,    // indicates whether the dialog should be closable by hitting the ESC key
      resolve: {
        category: function() {
          return category;
        },
        question: function () {
          return question;
        }
      }
    });

    modalInstance.result.then(function (correct) {
      if (correct) {
        that.score += question.value;
      }
      question.isDone = true;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});
