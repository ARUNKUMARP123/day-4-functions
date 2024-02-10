//1. Anonymous Functions & IIFE:
//a. Convert all the strings to title caps in a string array

// Anonymous Function
const convertToTitleCaps1 = function (arr) {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

// IIFE
(function (arr) {
  console.log("Title Caps Array:", convertToTitleCaps1(arr));
})(['apple', 'banana', 'orange', 'kiwi', 'grape']);

//b. Sum of all numbers in an array
// Anonymous Function
const sumOfNumbers1 = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

// IIFE
(function (arr) {
  console.log("Sum of Numbers:", sumOfNumbers1(arr));
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//c. Return all the prime numbers in an array
// Anonymous Function
const getPrimeNumbers1 = function (arr) {
  return arr.filter(num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

// IIFE
(function (arr) {
  console.log("Prime Numbers:", getPrimeNumbers1(arr));
})([2, 3, 5, 7, 8, 11, 13, 17, 19]);

//d. Return all the palindromes in an array
// Anonymous Function
const getPalindromes1 = function (arr) {
  return arr.filter(str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  });
};

// IIFE
(function (arr) {
  console.log("Palindromes:", getPalindromes1(arr));
})(['level', 'hello', 'noon', 'radar']);


//e. Return median of two sorted arrays of the same size.
// Anonymous Function
const getMedian = function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = mergedArray.length;
  const middle = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
};

// IIFE
(function (arr1, arr2) {
  console.log("Median:", getMedian(arr1, arr2));
})([1, 3, 5], [2, 4, 6]);


//f. Remove duplicates from an array
// Anonymous Function
const removeDuplicates = function (arr) {
  return [...new Set(arr)];
};

// IIFE
(function (arr) {
  console.log("Array with Duplicates Removed:", removeDuplicates(arr));
})([1, 2, 2, 3, 4, 4, 5, 6, 6]);


//g. Rotate an array by k times
// Anonymous Function
const rotateArray = function (arr, k) {
  const rotations = k % arr.length;
  return [...arr.slice(rotations), ...arr.slice(0, rotations)];
};

// IIFE
(function (arr, k) {
  console.log("Rotated Array:", rotateArray(arr, k));
})([1, 2, 3, 4, 5], 2);



//2. Arrow Functions:
//a. Print odd numbers in an array
const printOddNumbers = arr => {
  const oddNumbers = arr.filter(num => num % 2 !== 0);
  console.log("Odd Numbers:", oddNumbers);
};

// Example usage
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//b. Convert all the strings to title caps in a string array
const convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

// Example usage
console.log("Title Caps Array:", convertToTitleCaps(['apple', 'banana', 'orange', 'kiwi', 'grape']));


//c. Sum of all numbers in an array
const sumOfNumbers = arr => arr.reduce((acc, num) => acc + num, 0);

// Example usage
console.log("Sum of Numbers:", sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//d. Return all the prime numbers in an array
const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

// Example usage
console.log("Prime Numbers:", getPrimeNumbers([2, 3, 5, 7, 8, 11, 13, 17, 19]));



//e. Return all the palindromes in an array
const isPalindrome = str => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const getPalindromes = arr => arr.filter(str => isPalindrome(str));

// Example usage
console.log("Palindromes:", getPalindromes(['level', 'hello', 'noon', 'radar']));
