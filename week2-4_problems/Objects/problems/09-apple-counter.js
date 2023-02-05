/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/
/*POLYAS
have an empty variable named Apple Count
use a for loop that iterates through the keys of an object.
as the for loop iterates, turn the keys to lowercase it checks to see if the key contains the phrase "apple" in it.
if the key does, increase applecount by 1
return applecount
*/


function appleCounter(appleObj) {
  let appleCount = 0;
  for (let key in appleObj) {
    if (typeof appleObj[key] === 'string') {
        if(key.toLowerCase().includes("apple")) {
            appleCount++;
        }
    }
  }
  return appleCount;
}

let obj1 = { crabapple: "yum!" };
console.log(appleCounter(obj1)); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
console.log(appleCounter(obj2)); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
console.log(appleCounter(obj3)); // => 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
