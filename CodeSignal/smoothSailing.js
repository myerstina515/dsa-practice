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


// isLucky


// sort by height


// reverseInparentheses


