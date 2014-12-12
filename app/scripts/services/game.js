'use strict';

angular.module('jeopardyApp')
.service('GameService', function ($http) {

  this.getGame = function(name) {
    return $http.get('/data/' + name + '.json');
  };

});
