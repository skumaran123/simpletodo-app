'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.TodoListService
 * @description
 * # TodoListService
 * Service in the mytodoApp.
 */
angular.module("mytodoApp")
    .service('TodoListService', function () {
    var activeList = [];
    var completedList = [];
    var taskId = 0;

    //GET ACTIVE LIST
     this.getListItems = function(){
        return activeList;
    };

    //GET COMPLETED LIST
     this.getCompletedListItems = function(){
        console.log(completedList);
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
        //console.log(activeList[$index]);
        activeList[$index].dateModified = new Date();
    	var fin = activeList.splice($index, 1);
        completedList.unshift(fin[0]);
    };

    //DELETE
    this.deleteActive = function($index){
    	activeList.splice($index, 1);
    };

    this.uncompleteTodo = function($index){
        completedList[$index].dateModified = new Date();
        var unfin = completedList.splice($index, 1);
        activeList.unshift(unfin[0]);
    };
    
  });
