"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var color = colors[Math.floor(Math.random()*colors.length)];
//
// var favorite = 'blue'; // TODO: change this to your favorite color from the list
//
// // TODO: Create a block of if/else statements to check for every color except indigo and violet.
// // TODO: When a color is encountered log a message that tells the color, and an object of that color.
// //       Example: Blue is the color of the sky.
//
// if (color === "red") {
//     console.log(color + " is the color of apples.");
// } else if (color === "orange") {
//     console.log(color + " is the color of a basketball.");
// } else if (color === "yellow") {
//     console.log(color + " is the color of bananas.");
// } else if (color === "green") {
//     console.log(color + " is the color of grass.");
// } else if (color === "blue") {
//     console.log(color + " is the color of the sky.");
// } else {
//     console.log("I do not know anything of that color.");
// }
//
// // TODO: Have a final else that will catch indigo and violet.
// // TODO: In the else, log: I do not know anything by that color.
//
// // TODO: Using the ternary operator, conditionally log a statement that
// //       says whether the random color matches your favorite color.
//
// var message = (favorite === color) ? "Cool, that is my favorite color too!" : "That is not my favorite color.";
//     console.log(message);


var name = "George";
var total = 320;
var discountedTotal = total * .9;

if (total <= 200) {
    console.log("Hi " + name + "!");
    console.log("Your total is $" + total + ".");
    console.log("You are not receiving a discount.");
} else if (total > 200) {
    console.log("Hi " + name + "!");
    console.log("Your total without the discount is $" + total + ".");
    console.log("Your total with the discount is $" + discountedTotal + ".");
}