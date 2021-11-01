// alternating sums
// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

//For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

function alternatingSums(a) {
  let sum1 = 0;
  let sum2 = 0;
  for(let i = 0; i < a.length; i++){
      if(i === 0){
          sum1 += a[i]
      } else if(i % 2 === 0){
          sum1 += a[i]
      } else if (i % 2 !== 0){
          sum2 += a[i]
      }
  }
  return [sum1, sum2]
}

// addBorder
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//picture = ["abc",
//           "ded"]
// addBorder(picture) = [ "*****",
//                        "*abc*",
//                        "*ded*",
//                        "*****"]

function addBorder(picture) {
  let topBottom = "";
  for(let i = 0; i < picture[0].length; i++){
      topBottom += "*";
  }
  picture.unshift(topBottom);
  picture.push(topBottom);
  for(let i = 0; i < picture.length; i++){
      // at each index, I need to split into array, then unshift and push "*", then join.
      let split = [...picture[i]];
      split.unshift('*');
      split.push('*');
      picture[i] = split.join('');
  }
  return picture;
}

// are similar?
// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.
// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false

function areSimilar(a, b) {
  let counter = 0;
  let indices = [];
  for(let i = 0; i < a.length; i++){
      if(counter > 2){return false}
      if(a[i] !== b[i]){
          counter ++;
          indices.push(i);
      }
  }
  console.log(a[indices[1]], b[indices[0]])
  if (indices.length === 0){
      return true;
  } else if(indices.length === 2){
      if(a[indices[0]] === b[indices[1]]){
          if(a[indices[1]] === b[indices[0]]){
          return true;
          } else {
              return false
          }
      }
  } else {
      return false;
  }
  return false
}

// arrayChange
// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3

function arrayChange(inputArray) {
  let count = 0;
  for(let i = 0; i < inputArray.length - 1; i++){
      if(inputArray[i] >= inputArray[i+1]){
          let difference = inputArray[i] + 1 - inputArray[i + 1];
          inputArray[i + 1] = inputArray[i] + 1;
          count += difference;
      }
  }
  return count;
}

// palindrome rearranging
// Given a string, find out if its characters can be rearranged to form a palindrome.
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true
// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
  let charArray = inputString.split("");
  let letterObject = {};
  for(let i = 0; i < charArray.length; i ++){
      if(!letterObject.hasOwnProperty(charArray[i])){
          letterObject[charArray[i]] = 1;
      } else {
          letterObject[charArray[i]] ++
      }
  }
  let oddCount = 0;
  for(val in letterObject){
      if(letterObject[val] % 2 !== 0){
          oddCount++;
      }
  }
  return oddCount > 1 ? false : true;
}
