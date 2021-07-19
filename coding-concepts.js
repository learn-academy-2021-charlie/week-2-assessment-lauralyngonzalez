// ASSESSMENT 2: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: ["C", "h", "a", "r", "l", "i", "e", " ", "2", "0", "2", "1"]
// b) Verify and explain: 
// [
//   'C', 'h', 'a', 'r',
//   'l', 'i', 'e', ' ',
//   '2', '0', '2', '1'
// ]
//
// Correct except for the single quotes in the answer. split("") is a built-in function
// for strings and will return an array of substrings divided by the
// argument if provided. In this case, the pattern is the empty string so it will split
// on empty space.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: Wrong, undefined. There is no return on the `Hello ${name}!`
// console.log() is trying to find a string or other object to use but greeter()
// returns nothing. Therefore undefined is passed in => console.log(undefined) 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Correct. Map used on arrays will create a new array
// populated with each element multiplied by 2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: Correct. Filter used on arrays will create a new array
// with all the values where the condition is true. The condition here is check if
// the value is even, that is if its remainder divided by 2 is 0.


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: Undefined
// b) Verify and explain:
// Learn { student: 'George', cohort: 'Charlie', year: 2021 }
// Incorrect. I thought the () would be needed for new Learn() but it works.
// Logging the object learnStudent will output the JSON string with each key-value pair.
