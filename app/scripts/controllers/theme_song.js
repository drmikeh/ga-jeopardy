'use strict';

angular.module('jeopardyApp')
.controller('ThemeSongCtrl', function (ngAudio) {

  this.themeSong = ngAudio.load('sounds/theme-song.mp3');
  this.themeSong.volume = 0.8;
  this.themeSong.play();
  this.isThemeSongCollapsed = true;

});
