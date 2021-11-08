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

// variable name
// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.
// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.

function variableName(name) {
  return /^[a-z_]\w*$/i.test(name)
}

// alphabeticShift
// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
  // I need a list of all the letters of the alphabet
  let alphabet = 'abcdefghijklmnopqrstuvwxyza'.split('');
  // I need to make the input string an input array
  let inputArray = inputString.split('');
  // I need to loop through the input array
  for(let i = 0; i < inputArray.length; i++){
      // for each index, I need to figure out the index of the character in the alphabet array
      let index = alphabet.indexOf(inputArray[i]);
      index++;
      // I need to change the value of the input index to the next one
      inputArray[i] = alphabet[index];
  }
  inputString = inputArray.join('');
  return inputString;
}
