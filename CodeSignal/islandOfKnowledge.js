// areEquallyStrong
// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let yourStrong;
  let yourWeak;
  let friendStrong;
  let friendWeak;
  if(yourLeft > yourRight){
      yourStrong = yourLeft;
      yourWeak = yourRight;
  } else {
      yourStrong = yourRight;
      yourWeak = yourLeft;
  }
  if(friendsLeft > friendsRight){
      friendStrong = friendsLeft;
      friendWeak = friendsRight;
  } else {
      friendStrong = friendsRight;
      friendWeak = friendsLeft;
  }
  if(yourStrong === friendStrong && yourWeak === friendWeak){
      return true;
  } else {
      return false;
  }
}

// arrayMaximalAdjacentDifference
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
  let difference = 0;
  for(let i = 0; i < inputArray.length; i++){
      let tempDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
      if(tempDifference > difference){
          difference = tempDifference;
      }
  }
  return difference;
}

// isIPv4Address
// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.
// An identification number for devices connected to the internet. An IPv4 addresses written in dotted quad notation consists of four 8-bit integers separated by periods.
// In other words, it's a string of four numbers each between 0 and 255 inclusive, with a "." character in between each number. All numbers should be present without leading zeros.

// Examples:

// 192.168.0.1 is a valid IPv4 address
// 255.255.255.255 is a valid IPv4 address
// 280.100.92.101 is not a valid IPv4 address because 280 is too large to be an 8-bit integer (the largest 8-bit integer is 255)
// 255.100.81.160.172 is not a valid IPv4 address because it contains 5 integers instead of 4
// 1..0.1 is not a valid IPv4 address because it's not properly formatted
// 17.233.00.131 and 17.233.01.131 are not valid IPv4 addresses because they contain leading zeros

function isIPv4Address(inputString) {
  // I need to split the input string on the '.'
      let splitString = inputString.split('.');
      console.log(splitString)
      if(splitString.length !== 4){return false}
      for(let i = 0; i < splitString.length; i ++){
          if(splitString[i] > 255 || splitString[i] < 0){
              return false;
          } else if (splitString[i] === ""){
              return false;
          } else if (splitString[i].length > 1 && splitString[i][0] == 0){
              console.log(splitString[i].length, splitString[i][0])
              return false;
          } else if (splitString[i].match(/^[0-9]+$/) === null){
              return false;
          }
      }
      return true;
  }

