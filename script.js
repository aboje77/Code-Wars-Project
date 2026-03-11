/*
==============================================
STRING MANIPULATION FUNCTIONS
==============================================
*/

/**
 * Reverse a String
 * This function takes a string as input and returns the reversed version.
 * Steps:
 * 1. Split the string into an array of characters
 * 2. Reverse the array
 * 3. Join the characters back into a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example
console.log("Reverse:", reverseString("hello"));



/**
 * Count Characters
 * This function returns the number of characters in a string.
 * It simply uses the built-in length property.
 */
function countCharacters(str) {
  return str.length;
}

// Example
console.log("Character Count:", countCharacters("hello world"));



/**
 * Capitalize Words
 * This function capitalizes the first letter of each word in a sentence.
 * Steps:
 * 1. Split the sentence into words
 * 2. Convert the first letter of each word to uppercase
 * 3. Join the words back into a sentence
 */
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example
console.log("Capitalized:", capitalizeWords("hello world from javascript"));



/*
==============================================
ARRAY FUNCTIONS
==============================================
*/

/**
 * Find Maximum Value
 * This function finds the largest number in an array.
 * It uses the Math.max() function with the spread operator.
 */
function findMax(arr) {
  return Math.max(...arr);
}

// Example
console.log("Max:", findMax([3, 7, 2, 9, 5]));



/**
 * Find Minimum Value
 * This function finds the smallest number in an array.
 * It uses the Math.min() function with the spread operator.
 */
function findMin(arr) {
  return Math.min(...arr);
}

// Example
console.log("Min:", findMin([3, 7, 2, 9, 5]));



/**
 * Sum of Array
 * This function calculates the total sum of all numbers in an array.
 * It uses the reduce() method.
 */
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Example
console.log("Sum:", sumArray([1, 2, 3, 4, 5]));



/**
 * Filter Array
 * This function filters elements of an array based on a condition.
 * The condition is passed as a callback function.
 */
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example: filter numbers greater than 5
console.log("Filtered:", filterArray([2, 4, 6, 8, 10], num => num > 5));



/*
==============================================
MATHEMATICAL FUNCTIONS
==============================================
*/

/**
 * Factorial Function
 * The factorial of a number n is:
 * n! = n × (n-1) × (n-2) ... × 1
 * This function uses recursion.
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

// Example
console.log("Factorial:", factorial(5));



/**
 * Prime Number Check
 * A prime number is a number greater than 1
 * that has no divisors other than 1 and itself.
 */
function isPrime(num) {

  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false;

  // Loop from 2 to square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {

    // If divisible by any number, it is not prime
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Example
console.log("Is 7 Prime?", isPrime(7));
console.log("Is 10 Prime?", isPrime(10));



/**
 * Fibonacci Sequence
 * The Fibonacci sequence is a series where each number
 * is the sum of the two previous numbers.
 * Example: 0, 1, 1, 2, 3, 5, 8...
 */
function fibonacci(n) {

  // Start with the first two numbers
  let sequence = [0, 1];

  // Generate the rest of the numbers
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Example
console.log("Fibonacci:", fibonacci(7));