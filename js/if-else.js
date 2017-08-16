"use strict";

// Don"t change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = "blue"; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

console.log(color);

if (color === "red") {
    console.log(color + " is the color of apples.");
} else if (color === "orange") {
    console.log(color + " is the color of a basketball.");
} else if (color === "yellow") {
    console.log(color + " is the color of bananas.");
} else if (color === "green") {
    console.log(color + " is the color of grass.");
} else if (color === "blue") {
    console.log(color + " is the color of the sky.");
} else {
    console.log("I do not know anything of that color.");
}

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

var message = (favorite === color) ? "Cool, that is my favorite color too!" : "That is not my favorite color.";
    console.log(message);

// --------------------------------------------------------------------------------------------------

var dollarAmountForSale = 200;
var name = "George";
var total = 320;
var discountedTotal = total * .9;

if (total <= dollarAmountForSale) {
    console.log("Hi " + name + "!");
    console.log("Your total is $" + total + ".");
    console.log("You are not receiving a discount.");
} else if (total > dollarAmountForSale) {
    console.log("Hi " + name + "!");
    console.log("Your total without the discount is $" + total + ".");
    console.log("Your total with the discount is $" + discountedTotal + ".");
}

// --------------------------------------------------------------------------------------------------

var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin === 0) {
    console.log("Buy a car!");
} else {
    console.log("Buy a house!");
}

var message = (flipACoin === 0) ? "Buy a car!" : "Buy a house!";
    console.log(message);

// --------------------------------------------------------------------------------------------------

var luckyNumber = Math.floor(Math.random()* 6);
var discount10 = 60 * .90;
var discount25 = 60 * .75;
var discount50 = 60 * .50;

switch (luckyNumber) {
    case 0:
        console.log("Sorry, no discount today.");
        break;
    case 1:
        console.log("Congrats! You will receive a 10% discount, bringing your total from $60 to " + discount10 + "!");
        break;
    case 2:
        console.log("Congrats! You will receive a 25% discount, bringing your total from $60 to " + discount25 + "!");
        break;
    case 3:
        console.log("Sorry, no discount today.");
        break;
    case 4:
        console.log("Congrats! You will receive a 50% discount, bringing your total from $60 to " + discount50 + "!");
        break;
    case 5:
        console.log("Congrats! You won our biggest promotion and will get all of your groceries for free!");
}

// --------------------------------------------------------------------------------------------------

var userConfirm = confirm("Would you like to enter a number?");

if (userConfirm) {
    var userNumber = prompt("Please type in a number.");

    if (isNaN(userNumber)) {
        alert("That is not a number. Please enter a number!");
    } else {

        if (userNumber % 2 == 1) {
            alert("Your number is odd.");
        } else {
            alert("Your number is even.");
        }

        alert("Your number + 100 is " + (parseInt(userNumber) + 100) + ".");

        if (userNumber > 0) {
            alert("Your number is positive.");
        } else if (userNumber < 0) {
            alert("Your number is negative.");
        } else {
            alert("Your number is 0 and is neither positive or negative.");
        }
    }
} else {
    alert(":(");
}