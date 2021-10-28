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

