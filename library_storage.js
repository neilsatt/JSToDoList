// Local Storage Utility Library
"use strict";
var getStorage = function(key) {
    //get string from storage or an empty string if nothing in storage
    var storage = localStorage.getItem(key) || "";
    if (storage === "") { 
        return []; // return empty if nothing in local storage
    } else {
        return storage.split("|"); // return array 
    }
};

var setStorage = function(key, arr) {
    if (Array.isArray(arr)) { // confirm 2nd param is an array
        var storageString = arr.join("|"); // separate all of the tasks with a pipe symbol
        localStorage.setItem(key, storageString); // add to local storage
    }
};

var clearStorage = function(key) {
    localStorage.setItem(key, "");
};