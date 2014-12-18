'use strict';

angular.module('jeopardyApp')
.service('GameService', function ($http, ngAudio) {

  this.themeSong      = ngAudio.load('sounds/theme-song.mp3');
  this.correctSound   = ngAudio.load('sounds/final-reveal.mp3');
  this.incorrectSound = ngAudio.load('sounds/buzzer.mp3');

  this.getGame = function(name) {
    return $http.get('/data/' + name + '.json');
  };

});
