// add 
// Write a function that returns the sum of two numbers.
// param1 = 246 param2 = 234
function add(param1, param2) {
  return param1 + param2;
 }

// centryFromYear 
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// year = 300
function centuryFromYear(year) {
  let century = Math.ceil(year/100);
  return century;
}

// checkPalindrome: 
// Given the string, check if it is a palindrome.
// inputString = "aabaa"
function checkPalindrome(inputString) {
  let array = inputString.split('');
  for (let i = 0; i < Math.floor(array.length/2); i++){
      if(array[i] === array[array.length - (i + 1)]){
          continue;
      } else {
          return false;
      }
  }
  return true;
}

// adjacentElementsProduct
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// inputArray = [3, 6, -2, -5, 7, 3]
function adjacentElementsProduct(inputArray) {
  let highest = inputArray[0] * inputArray[1];
  for(let i = 0; i < inputArray.length - 1; i++){
      let product = inputArray[i] * inputArray[i + 1];
      if(product > highest){
          highest = product;
      }
  }
  return highest;
}

// shapeArea
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// n = 3
function shapeArea(n) {
  let area = 1;
  if(n===1){
      return 1;
  };
  for(let i = 2; i <= n; i++){
      // i = 2 (value = 4)-- add 4 to 1 (temp) = 5
      // i = 3 (temp = 5)(value = 8)-- add 5 to 8 = 13
      // i = 4 (temp = 13)(value = 12)-- add 13 to 12 = 25
      let value = 4 * (i - 1);
      area += value;
  }
  return area;
}


// Make Array Consecutive 2
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
// statues = [6, 2, 3, 8]
function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => {
      return a-b
  });
  let min = statues[0];
  let max = statues[statues.length -1];
  let count = 0;
  
  for(let i = min; i < max; i++){
      if(statues.indexOf(i) === -1){
          count++;
      }
  }
  return count;
}

// almostIncreasingSequence
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
// For sequence = [1, 3, 2, 1]
function almostIncreasingSequence(sequence) {
    
  let number = 0;
  // if(sequence.length === 1){return true}
  // // I need a loop that will do the following:
  // // Check to see if each number increases -- if one decreases, remove it and see if the remainder continues to increase. If it decreases a second time, return false.
  // console.log(Math.max(...sequence))
  // if(sequence[0] === Math.max(...sequence)){
  //     sequence.splice(0, 1);
  //     console.log(sequence)
  //     number++
  //     }
  for(let i = 0; i < sequence.length; i++){
      
      if(sequence[i] <= sequence[i - 1]){
          number++;
  //         if(number > 1){
  //             return false;
  //         }
          if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]){
              return false;
  //             if(number > 1){
  //             return false;
  //         }
          }
          
      }
  }
  return number <= 1;
}


// matrixElementsSum
// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.
// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
// matrix = [[0, 1, 1, 2], 
//          [0, 5, 0, 0], 
//          [2, 0, 3, 3]]

function matrixElementsSum(matrix) {
  let cost = 0;
  let bannedIndex = [];
  // I need a nested loop since it's a matrix.
  // Only increase cost if the value !== 0. Check if [i-1][j] is 0, add to banned index
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          if(matrix[i][j] === 0){
              bannedIndex.push(j)
          } else if (bannedIndex.indexOf(j) === -1){
              cost += matrix[i][j];
          }
      }
  }
  return cost;
}

