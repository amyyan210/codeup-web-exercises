"use strict";

//JS Challenge Question #1

for (var n = 1; n < 16; n++) {

    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0 && n % 5 != 0) {
        console.log("Fizz");
    } else if (n % 5 === 0 && n % 3 != 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}


//JS Challenge Question #2

var n = 0;

function repeatStr (n, string) {

    var repeatedString = string.repeat(n);
    console.log(repeatedString);
}

repeatStr(8, "hey");



//JS Challenge Question #3

function validPhoneNumber (userNumber) {

    if (userNumber == "(XXX) XXX-XXXX") {
        console.log("true");
    } else {
        console.log("false");
    }
}

validPhoneNumber("(222) 222-2222");


