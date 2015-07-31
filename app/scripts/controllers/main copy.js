'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    //Local Storage for Todos
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    
    $scope.$watch('todos', function() {
        localStorageService.set('todos', $scope.todos);
    } , true);
    
    //Local Storage for Completed Todos
    var completedInStore = localStorageService.get('completed');
    $scope.completed = completedInStore || [];
    
    $scope.$watch('completed' , function(){
        localStorageService.set('completed', $scope.completed);
    }, true);
                                                
    //CREATE
    $scope.addTodo = function(){
        $scope.todos.push($scope.todo);
        $scope.todo = "";
    };
    
    //DESTROY
    $scope.removeTodo = function($index){
        $scope.todos.splice($index, 1);
    };
    
    //COMPLETE
    $scope.completeTodo = function($index, localStorageService){
        $scope.completed.push($scope.todos.splice($index,1));
    };
  });
