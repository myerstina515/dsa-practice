// All longest strings
// Given an array of strings, return another array containing all of its longest strings.
// inputArray = ["aba", "aa", "ad", "vcd", "aba"]
function allLongestStrings(inputArray) {
  let longest = 0;
  let num = inputArray.length;
  let longestStr = [];
  for(let i = 0; i < num; i++){
      if(inputArray[i].length > longest){
          longest = inputArray[i].length;
      }
  }
  for(let i = 0; i < num; i++){
      if(inputArray[i].length === longest){
          longestStr.push(inputArray[i]);
      }
  }
  return longestStr;
}


// commonCharacterCount
// Given two strings, find the number of common characters between them.
// s1 = "aabcc" and s2 = "adcaa"

function commonCharacterCount(s1, s2) {
  let first = s1.split('');
  let second = s2.split('');
  let count = 0;
  for(let i = 0; i < first.length; i++){
      for(let j = 0; j < second.length; j++){
          if(first[i] === second[j]){
              count++;
              second.splice(j, 1);
              break;
          }
      }
  }
  return count;
}

// isLucky
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// For n = 1230, the output should be
// isLucky(n) = true;
//For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
  // one var that represents the first 1/2 digits sum
  // one var that represents the second 1/2 digits sum
  n = n.toString();
  let half = n.length/2;
  let first = n.substring(0, half).split('').reduce((a, b) => {
      return parseInt(a) + parseInt(b);
  });
  let second = n.substring(half, n.length).split('').reduce((a, b) => {
      return parseInt(a) + parseInt(b);
  });
  
  console.log(first, second)
  return(first === second)
}

// sort by height
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  let array2 = a;
  array2 = array2.filter((element) =>{
      if(element != -1){
          return element;
      }
  }).sort((a, b) => {
      return a-b
  })
  let indexVal = 0;
  for(let i = 0; i < a.length; i++){
      if(a[i] != -1){
          a[i] = array2[indexVal];
          indexVal++;
      }
  }
  
  return a;
  
}


// reverseInparentheses
// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".

function reverseInParentheses(inputString) {
  const re = /\(([^\(\)]*)\)/g;
  while(re.test(inputString)){
      inputString = inputString.replace(re, function(match, capture){
          return capture.split("").reverse().join("");
      })
  }
  
  return inputString;
}


