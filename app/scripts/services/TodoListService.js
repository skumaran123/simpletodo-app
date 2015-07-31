'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.TodoListService
 * @description
 * # TodoListService
 * Service in the mytodoApp.
 */
angular.module("mytodoApp")
    .service('TodoListService', function (localStorageService) {
    var activeList = [];
    var completedList = [];
    var taskId = 0;

    //GET ACTIVE LIST
     this.getListItems = function(){
        return activeList;
    };

    //GET COMPLETED LIST
     this.getCompletedListItems = function($index){
        return completedList;
    };

    //CREATE
    var Todo = function Todo(task){
        this.task = task,
        this.taskId = taskId,
        this.dateAdded = new Date(),
        this.dateModified = undefined,
        this.dueDate = undefined
    };

    this.createTodo = function(task){
        taskId++;
        var thisTask = new Todo(task);
    	activeList.push(thisTask);
        console.log(activeList);
    };

    //COMPLETE
    this.finishTodo = function($index){
        activeList[$index].dateModified = new Date();
    	completedList.push(activeList.splice($index, 1));
    };

    //DELETE
    this.deleteActive = function($index){
    	activeList.splice($index, 1);
    };
    
  });
