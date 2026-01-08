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
