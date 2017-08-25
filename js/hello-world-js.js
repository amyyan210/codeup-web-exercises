(function () {

    "use strict";

    /*
     * How many times a lucky number is repeated for every 100 customers?
     */
    var luckyNumber;
    var i = 0;
    var numberZero = 0;
    var numberOne = 0;
    var numberTwo = 0;
    var numberThree = 0;
    var numberFour = 0;
    var numberFive = 0;


    while (i < 100) {
        luckyNumber = Math.floor(Math.random() * 6);
        i++;
        console.log(luckyNumber);

        switch (luckyNumber) {
            case 0:
                numberZero++;
                break;
            case 1:
                numberOne++;
                break;
            case 2:
                numberTwo++;
                break;
            case 3:
                numberThree++;
                break;
            case 4:
                numberFour++;
                break;
            case 5:
                numberFive++;
                break;
        }

    }


// The output should be something like

console.log("0 appeared " + numberZero + " times");
console.log("1 appeared " + numberOne + " times");
console.log("2 appeared " + numberTwo + " times");
console.log("3 appeared " + numberThree + " times");
console.log("4 appeared " + numberFour + " times");
console.log("5 appeared " + numberFive + " times");

var sumOfCount = numberZero + numberOne + numberTwo + numberThree + numberFour + numberFive;

// The total should always be 100
console.log("The total amount of iterations is " + sumOfCount + ".");


})();