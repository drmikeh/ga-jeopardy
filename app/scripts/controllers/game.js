'use strict';

angular.module('jeopardyApp')
.controller('GameCtrl', function ($scope, $modal, $log, ngAudio, GameService) {

  $scope.getGame = function(name) {
    GameService.getGame(name).success(function(game) {
      $scope.game = game;
      $scope.score = 0;
    });
  };

  $scope.getGame('game1');

  var questionSound = ngAudio.load('sounds/bell.mp3');

  $scope.doQuestion = function(category, question) {
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
        $scope.score += question.value;
      }
      question.isDone = true;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});
