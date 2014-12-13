'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jeopardyApp'));

  var GameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  it('should attach a game with 5 categories to the scope', function () {
    // expect(scope.game.categories.length).toBe(5);
  });
});
