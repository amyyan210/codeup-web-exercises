"use strict";

var userNumber = prompt("Please enter a number between 1 and 10.");
    for (var i = 1; i <= 10; i++) {
        console.log("Here are the multiplication tables for your number: " + userNumber + ".");
        console.log(userNumber + " x " + i + " = " + (userNumber * i));
    }

console.log("---------------------------------------");

console.log("This loop will print a random number between 20 and 200 and determine whether they are even or odd.");
// This is how you get a random number between 20 and 200
    for (var i = 1; i <= 10; i++) {
        var randomNumber = Math.floor(Math.random() * 180) + 20;

        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }
    }

console.log("---------------------------------------");

console.log("This loop will start at 100 and decrement by 5 each time until it reaches 5.");
for (var i = 100; i > 4; i = i - 5) {
    console.log(i);
}

console.log("---------------------------------------");
