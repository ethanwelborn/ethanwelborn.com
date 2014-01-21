'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('ethanwelborncomApp'));

  var HomeCtrl,
    $scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: $scope
    });
  }));

  it('should bind a name to the scope', function() {
    expect($scope.name).toBeDefined();
  });
});
