'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:CompletedCtrl
 * @description
 * # CompletedCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('CompletedCtrl', function ($scope, TodoListService) {
  	
  	//GET COMPLETED
  	$scope.completed = {};
    try {
    	$scope.completed = TodoListService.getCompletedListItems();
    } catch(error){
    	console.log("error!");
    }

    	//COMPLETE
    $scope.completeTodo = function($index){
    	//console.log($index);
    	TodoListService.finishTodo($index);
    }

  });
