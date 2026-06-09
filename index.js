// ---------------------------------------------------------------------problem 1




function reverseString(str) {
  return str.split('').reverse().join('');
}


console.log(reverseString("hello"));


// -------------------------------------------------------------------------problem 2

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}


console.log(countVowels("programming")); 

// ---------------------------------------------------------------------- problem 3


function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

// ---------------------------------------------------------------------- problem 4


function findLargestNumber(arr) {
  return Math.max(...arr);
}


console.log(findLargestNumber([5, 1, 9, 3]));



//---------------------------------------------------------------------- problem 5


function removeDuplicates(arr) {
  const unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 


//---------------------------------------------------------------------- problem 6



function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num; 
  }
  return sum;
}


console.log(sumArray([1, 2, 3, 4])); 


//---------------------------------------------------------------------- problem 7


function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}


console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); 


//---------------------------------------------------------------------- problem 8

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num; 
    
  }
  return sum;
}



console.log(sumArray([1, 2, 3, 4])); 



//---------------------------------------------------------------------- problem 9
function factorial(n) {
  if (n < 0) return undefined; 
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i; 
  }
  return result;
}


console.log(factorial(5)); // 120


//---------------------------------------------------------------------- problem 10


function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}


pingPong();


//---------------------------------------------------------------------- problem 11

const numbers = [1, 2, 5, 4, 6];
const tournament_runs = [[], [], []];
const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
]

// console.log(numbers[0])
// console.log(exam_marks[0])
const first_class_marks = exam_marks[0]
console.log(first_class_marks[0])
// console.log(exam_marks[0][0])
exam_marks[0][1] = 66
exam_marks[1].pop()
exam_marks[1].push(44)

// console.log(exam_marks)
for(const marks of exam_marks){
    console.log(marks)
}

//---------------------------------------------------------------------- problem 12

let numbers = [10, 5, 25, 8, 40];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest);

//---------------------------------------------------------------------- problem 13

let number = 7;
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}

//---------------------------------------------------------------------- problem 13


let text = "javascript";
let count = 0;

for (let i = 0; i < text.length; i++) {
  if (
    text[i] === "a" ||
    text[i] === "e" ||
    text[i] === "i" ||
    text[i] === "o" ||
    text[i] === "u"
  ) {
    count++;
  }
}

console.log(count);

//---------------------------------------------------------------------- problem 14
// Find smallest number

let numbers = [10, 5, 2, 8, 1];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

console.log(smallest);


//---------------------------------------------------------------------- problem 15
// Count positive numbers

let numbers = [-2, 5, -1, 10, 7];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    count++;
  }
}

console.log(count);

//---------------------------------------------------------------------- problem 16
// Find duplicate characters

let text = "programming";

for (let i = 0; i < text.length; i++) {
  for (let j = i + 1; j < text.length; j++) {
    if (text[i] === text[j]) {
      console.log(text[i]);
      break;
    }
  }
}

//---------------------------------------------------------------------- problem 17
// FizzBuzz

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//---------------------------------------------------------------------- problem 18
// Sum of even numbers

let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

//---------------------------------------------------------------------- problem 19
// Count positive numbers

let numbers = [-2, 5, -1, 10, 7];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    count++;
  }
}

console.log(count);