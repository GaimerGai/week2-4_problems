/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
    // let evenRangeArr = [];
    // if (start > end) {
    //   return evenRangeArr;
    // }
    // for (let i = start; i <= end; i++) {
    //   if (i % 2 === 0){
    //     evenRangeArr.push(i);
    //   }
    // }
    // return evenRangeArr;
    let evens = [];
    while (start <= end){
      start %2 === 0 ? evens.push(start++) : start++;
    }
    return evens;
  }

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = evenRange;
