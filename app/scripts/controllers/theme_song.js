'use strict';

angular.module('jeopardyApp')
.controller('ThemeSongCtrl', function (ngAudio, GameService) {

  this.themeSong = GameService.themeSong;
  this.themeSong.volume = 0.8;
  this.themeSong.play();
  this.isThemeSongCollapsed = true;

});
