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


// sort by height


// reverseInparentheses


