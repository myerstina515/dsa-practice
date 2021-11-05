// array replace
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  // I need to loop through the array
  for(let i = 0; i < inputArray.length; i++){
      // check at each index to see if the value is equal to the element to replace
      if(inputArray[i] === elemToReplace){
          // if it is, replace it with the substitution element
          inputArray[i] = substitutionElem;
      }
  }
  // return the array.
  return inputArray;
}

// even digits only
// Check if all digits of the given integer are even
// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.

function evenDigitsOnly(n) {
  // I need to turn the integer into a string, then split it into an array of strings.
  let splitString = n.toString().split('');
  // then loop through the array
  for(let i = 0; i < splitString.length; i++){
      // at each index, parseInt the value and check to see if it % 2 === 0
      if(parseInt(splitString[i]) % 2 != 0){
          // if any value is not even, return false
          return false
      }
  }
  return true
}