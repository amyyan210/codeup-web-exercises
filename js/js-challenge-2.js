"use strict";

// Question #1

// function removeVowels (character) {
//     for (var i = 0; i < character.length; i++)
//         if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//             return character;
//         }
// }


// function removeVowels (characters) {
//     var stringConvertedToArray = characters.split("");
//
//     for (characters = 0; characters < stringConvertedToArray.length; characters++) {
//         var vowelA = indexOf("a");
//         var vowelE = indexOf("e");
//         var vowelI = indexOf("i");
//         var vowelO = indexOf("o");
//         var vowelU = indexOf("u");
//     }
//
// }
// //convert string to array, loop through characters, return without vowels
//
// console.log(removeVowels("Hello everyone!"));


// Question #2


function reverseAndMirror (string1, string2) {

    var string2Array = string2.split("");
    string2Array.reverse();


    var string1Array = string1.split("");
    string1Array.reverse();


    return string2Array.join("") + "@@@" + string1Array.join("");

}

console.log(reverseAndMirror("Water", "wATER"));


// Question #3


function DNAStrand (string) {

    var DNAArray = string.split("");

    for (var i = 0; i > DNAArray.length; i++) {

        if (DNAArray.includes("A")) {
            DNAArray.splice(DNAArray.indexOf("A"), 1, "T");
        }

        if (DNAArray.includes("C")) {
            DNAArray.splice(DNAArray.indexOf("C"), 1, "G");
        }

        if (DNAArray.includes("T")) {
            DNAArray.splice(DNAArray.indexOf("T"), 1, "A");
        }

        if (DNAArray.includes("G")) {
            DNAArray.splice(DNAArray.indexOf("G"), 1, "C");
        }

        return DNAArray.join("");
    }
}

console.log(DNAStrand("ATTGC"));