"use strict";
var $ = function(id) { return document.getElementById(id); }; // helper function to get document by id

var tasks = []; // stores/keeps track of tasks


// Show tasks or empty string in Textarea
var displayTaskList = function() {
    var list = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if there are tasks, split will convert the string to an array of substrings
        if (storage.length > 0) { 
            tasks = storage.split("|"); // tasks show up in localstorage separated by the pipe symbol, split string based on where pipe symbol is
        }
    }
    
    // if there are tasks in array, sort them aphabetically
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n"); // join/separate the tasks with a new line
    }
    
    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();
}

// Click event for Add button
var addToTaskList = function() {   
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task."); // make sure user enters a value
    } else {  
        // add task to array and local storage
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|"); // we separate the items in local storage with a pipe symbol

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

// Click event for Clear button - remove from array and localStorage
var clearTaskList = function() {
    tasks.length = 0; // remove
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

// 
window.onload = function() {
   $("add_task").onclick = addToTaskList;
   $("clear_tasks").onclick = clearTaskList;    
    displayTaskList();
}