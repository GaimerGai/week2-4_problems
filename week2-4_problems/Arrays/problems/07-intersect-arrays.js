/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  // let intersectArr = [];
  // for (let i = 0 ; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++ ){
  //     if (arr1[i] === arr2[j]){
  //       intersectArr.push(arr1[i]);
  //     }
  //   }
  // }
  // return intersectArr;
  let filtered = [];
  for (let ele of arr1) arr2.includes(ele) ? filtered.push(ele) : null;
  return filtered;

}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']))// => [ 'b', 'd' ])
/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = intersect;
