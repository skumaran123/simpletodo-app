'use strict';

describe('Service: TodoListService', function () {

  // load the service's module
  beforeEach(module('mytodoApp'));

  // instantiate service
  var TodoListService;
  beforeEach(inject(function (_TodoListService_) {
    TodoListService = _TodoListService_;
  }));

  it('should do something', function () {
    expect(!!TodoListService).toBe(true);
  });

});

