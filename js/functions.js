"use strict";
(function () {

// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  *  > sayHello("codeup") // returns "Hello, codeup!"
//  */

    function sayHello(name) {
        console.log("Hello, " + name + "!");
    }

    sayHello("Codeup");


    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     * console.log 'helloMessage' to check your work
     * Now store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    var helloMessage = sayHello("Amy");
    console.log(helloMessage);

    var myName = "Amy";
    sayHello(myName);

    console.log("----------------------");


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random

    var random = Math.floor((Math.random() * 100) + 1);
    console.log("Your random number is " + random + ".");

    /**
     * TODO:
     * Create a function called 'isOdd' that takes a number as a parameter.
     * The function should use the ternary operator to return a message.
     * The message should contain the number being checked, and whether or not the
     * number is odd
     *
     * Example
     *  > isOdd(42) // returns "42 is not odd!"
     *
     * Call the function 'isOdd' passing the variable 'random' as a parameter.
     * console.log *outside of the function* to check your work
     */

    function isOdd(number) {
        var message = (number % 2 === 1) ? number + " is odd." : number + " is even.";
        return message;
    }

    console.log(isOdd(random));

    console.log("----------------------");


    /**
     * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant
     *
     * the function should accept a tip percentage and the total of the bill, and
     * return the amount to tip
     *
     * Example
     *  > calculateTip(0.20, 20) // returns 4
     */

    function calculateTip(tipPercentage, bill) {
        var tip = tipPercentage * bill;
        var totalBill = tip + bill;

        console.log("A " + tipPercentage * 100 + "% tip on your bill of " + bill + " is $" + tip + ", for a total bill of $" + totalBill + ".");
    }

    console.log(calculateTip(0.2, 100));

    console.log("----------------------");


    /**
     * TODO: use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

    var tipPercentage = 0;
    var bill = 0;

    function calculateTip() {

        var tipPercentage = parseFloat(prompt("What percentage would you like to tip?"));
        var bill = parseFloat(prompt("How much was your total bill?"));
        var tipWithPercent = (tipPercentage / 100) * bill;
        var tip = tipPercentage * bill;
        var totalBillWithPercent = tipWithPercent + bill;
        var totalBill = tip + bill;

        if (tipPercentage > 1) {
            console.log("A " + tipPercentage + "% tip on your bill of $" + bill + " is $" + tipWithPercent + ", for a total bill of $" + totalBillWithPercent + ".");

        } else {
            console.log("A " + (tipPercentage * 100) + "% tip on your bill of " + bill + " is $" + tip + ", for a total bill of $" + totalBill + ".");
        }
    }

    console.log(calculateTip(tipPercentage, bill));

    console.log("----------------------");

})();