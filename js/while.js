"use strict";

// Used a for loop because we know how many repetitions we need

console.log("This loop will double the previous output within given parameters.");
var i = 2;

while (i < 65537) {
    console.log(i);
    i = i * 2;
}
console.log("---------------------------------------");



// Used a do-while loop on this one because we don't know how many times it will need to iterate, but we need it to iterate at least once.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("I have to sell " + allCones + " ice cream cones in order to go home.");

do {
    // This is how you get a random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;

    if (allCones >= cones) {
        console.log(cones + " cone(s) sold...");
        allCones = allCones - cones;
        console.log("The remaining amount of cones is " + allCones + ".");
    } else {
        console.log("I cannot sell you " + cones + " cone(s). I only have " + allCones + " cone(s) left.");
    }

    if (allCones === 0) {
        console.log("Yay! I sold them all!");
        break;
    }

} while (allCones > 0);

console.log("---------------------------------------");




