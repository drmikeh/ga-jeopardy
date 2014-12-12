'use strict';

angular
.module('jeopardyApp', [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/game.html',
      controller: 'GameCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
