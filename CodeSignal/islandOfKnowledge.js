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

