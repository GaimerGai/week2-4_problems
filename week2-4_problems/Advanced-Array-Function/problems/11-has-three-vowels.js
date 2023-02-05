/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
/*
POLYAS

*/
let hasThreeVowels = function(string) {
    // Your code here
    let vowels = "aeiou";
    let vowelCount = 0;
    string.toLowerCase().split("").reduce((count, char) => {
        if (vowels.includes(char) && count.indexOf(char) === -1){
            count.push(char);
            vowelCount +=1;
        }
        return count;
    }, [])
    return vowelCount >=3;
};

console.log(hasThreeVowels('delicious'));       //  true
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
