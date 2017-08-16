"use strict";

// Don"t change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single random
//     another with a single random color value
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    case "red":
        console.log(color + " is the color of apples.");
        break;
    case "orange":
        console.log(color + " is the color of a basketball.");
        break;
    case "yellow":
        console.log(color + " is the color of bananas.");
        break;
    case "green":
        console.log(color + " is the color of grass.");
        break;
    case "blue":
        console.log(color + " is the color of the sky.");
        break;
    default:
        console.log("I do not know anything of that color.");


    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}
