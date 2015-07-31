'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */

angular.module('mytodoApp')
  .controller('MainCtrl',  function ($scope, TodoListService) {
    //GET
    $scope.todos = {};
    try {
    	$scope.todos = TodoListService.getListItems();
    } catch(error){
    	console.log("error!");
    }

    //CREATE
    $scope.addTodo = function(){
        TodoListService.createTodo($scope.newTodo);
        $scope.newTodo = "";
    };

    //DELETE
    $scope.removeTodo = function($index){
    	TodoListService.deleteActive($index);
    };
/*
    //COMPLETE
    $scope.completeTodo = function($index){
    	//console.log($index);
    	TodoListService.finishTodo($index);
    }
*/
  });
