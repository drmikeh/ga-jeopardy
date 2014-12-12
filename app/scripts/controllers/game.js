'use strict';

angular.module('jeopardyApp')
.controller('GameCtrl', function ($scope, $modal, $log, GameService) {

  $scope.subjects = ['Ruby', 'Rails', 'JavaScript', 'AngularJS', 'OOP'];

  $scope.getGame = function(name) {
    GameService.getGame(name).success(function(game) {
      $scope.game = game;
      $scope.score = 0;
    });
  };

  $scope.getGame('game1');

  $scope.doQuestion = function(question) {
    var modalInstance = $modal.open({
      templateUrl: 'views/question.html',
      controller: 'QuestionCtrl',
      size: 'lg',
      resolve: {
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
