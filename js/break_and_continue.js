"use strict";

console.log("This loop will print all odd numbers between 1 and 50 except for the number you enter.");

;while (true) {
    var userNumber = prompt("Please enter an odd number between 1 and 50.");

    if ((userNumber % 2 == 1) && ((userNumber >= 1) && (userNumber <= 50))) {
        alert("Thank you!");
        break;
    }

    alert (userNumber + " does not meet our requirements.");
}

for (var i = 1; i < 50; i++) {
    if (i % 2 == 1 && i != userNumber) {
        console.log("Here is an odd number: " + i + ".");
    } else if (i == userNumber) {
        console.log("We are skipping your number: " + userNumber + ".");
        continue;
    }
}

console.log("---------------------------------------");

