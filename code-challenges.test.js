// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

describe("Divisible by 3", () => {
    it("Returns whether the given number is divisible by 3, false otherwise", () => {
        expect(isDivisibleBy3(num1)).toEqual("15 is divisible by three")
        expect(isDivisibleBy3(num2)).toEqual("0 is divisible by three")
        expect(isDivisibleBy3(num3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

// Pseudocode:
// isDivisibleBy3
// param num
// num is evenly div by 3 if remainder is 0 after dividing by 3. use %
// return a string whether the num is divisible or not

// Returns a string on whether the given num is divisible by 3
const isDivisibleBy3 = (num) => {
    return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("string array capitalized", () => {
    var expected1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var expected2 = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

    it("Capitalizes the strings in an array", () => {
        expect(capitalizeStrArr(randomNouns1)).toEqual(expected1)
        expect(capitalizeStrArr(randomNouns2)).toEqual(expected2)
    })
})

// b) Create the function that makes the test pass.

// Pseudocode:
// capitalizeStrArr
// param arr
// map each value and use .toUpperCase() on the 0th index for each element
// such that (value) => value[0].toUpperCase(), then concatenate it with the
// rest of the string using str.substring(1). So potato => P + otato
// returns arr

// Given an array of strings, returns a new array with the first letter
// of each string capitalized
const capitalizeStrArr = (arr) => {
    return arr.map(val => val[0].toUpperCase() + val.substring(1))
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe("Index of first vowel", () => {
    it("Returns the index of the first vowel for the given string", () => {
        expect(findIdxOfFirstVowel(vowelTester1)).toEqual(1)
        expect(findIdxOfFirstVowel(vowelTester2)).toEqual(0)
        expect(findIdxOfFirstVowel(vowelTester3)).toEqual(2)
    })
})


// b) Create the function that makes the test pass.

// Pseudocode:
// findIdxOfFirstVowel
// param str
// loops through each char in string and checks if the char is a vowel.
// once the first vowel is found, return i
// returns num representing the idx

// Returns the index of the first vowel found in the given string
const findIdxOfFirstVowel = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i"
                || str[i] === "o" || str[i] === "u") {
                    return i
                }
    }
}