//#1

// did not finish!
// function checkSign (number1, number2, number3) {
//     if (number1 < 0 && number2 < 0 && number3 < 0) {
//         return "-";
//     } else if (number1 > 0 && number2 > 0 && number3 > 0) {
//         return "+";
// }
//

function checkSign (number1, number2, number3) {
    var product = number1 * number2 * number3;
    if (product.toString().indexOf("-") == -1) {
        return "+";
    } else {
        return "-";
    }
}

console.log(checkSign("-1", "10", "-3"));


// #2
var numbers = [-16, -17, 0];

function sortNumbers (a, b) {
    return b-a;
}
console.log(numbers.sort(sortNumbers));


// #3
function convertCelsiusToFarenheit (celsius) {
    var farenheit = celsius * (9/5) + 32;
    return farenheit;
}

console.log(convertCelsiusToFarenheit(10));

function convertFarenheitToCelsius (farenheit) {
    var celsius = (farenheit - 32) * (5/9);
    return celsius;
}

console.log(convertFarenheitToCelsius(104));


// #4
function checkNumbers(firstNumber, secondNumber) {
    if (firstNumber + secondNumber === 50 || firstNumber === 50 || secondNumber === 50) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumbers(15, 55));


// #5
function addPy (string) {
    if (string.indexOf("py") === -1 && string.indexOf("Py") === -1) {
        return "py" + string;
    } else {
        return string;
    }
}

console.log(addPy("thon"));