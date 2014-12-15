'use strict';

angular.module('jeopardyApp')
.controller('ThemeSongCtrl', function ($scope, ngAudio) {

  $scope.themeSong = ngAudio.load('sounds/theme_song.mp3');
  $scope.themeSong.volume = 0.8;
  $scope.themeSong.play();
  $scope.isThemeSongCollapsed = true;

});
