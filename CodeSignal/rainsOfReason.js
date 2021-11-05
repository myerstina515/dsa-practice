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