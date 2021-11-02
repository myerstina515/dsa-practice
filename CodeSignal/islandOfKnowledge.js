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

//