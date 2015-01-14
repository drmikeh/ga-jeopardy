'use strict';

angular
.module('jeopardyApp', [
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ui.router',
  'ui.router.stateHelper',
  // 'ct.ui.router.extras',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap',
  'cgBusy',
  'ngAudio'
])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state(
    {
      name: 'home',
      url: '/home',
      templateUrl: 'views/game.html',
      controller: 'GameCtrl as gameCtrl'
    },
    {
      name: 'about',
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }
  );
  
  $urlRouterProvider.otherwise('/home');
});
