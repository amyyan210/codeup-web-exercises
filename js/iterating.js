(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Amy", "Radu", "Michael", "Simone"];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("There are " + names.length + " elements in this array.");

    // TODO: Create log statements that will print each of the names array elements individually.
    //
    // console.log("Name #1 is " + names[0] + ".");
    //
    // console.log("Name #2 is " + names[1] + ".");
    //
    // console.log("Name #3 is " + names[2] + ".");
    //
    // console.log("Name #4 is " + names[3] + ".");


    for (var i = 0; i < names.length; i++) {
        console.log("The name at index " + i + " is " + names[i] + ".");
    }

    names.forEach (function (element, index) {
        console.log("The name at index " + index + " is " + element + ".");
    });


})();
