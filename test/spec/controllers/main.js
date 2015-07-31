'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });


  it('should add items to the list', function() {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should complete todos', function(){
    scope.completeTodo();
    expect(scope.completed.length).toBe(1);
    expect(scope.todos.length).toBe(0);
  });

  it('should remove items from the list', function(){
    scope.removeTodo();
    expect(scope.todos.length).toBe(0);
  });

});

