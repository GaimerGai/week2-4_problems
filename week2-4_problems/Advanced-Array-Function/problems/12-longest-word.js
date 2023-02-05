/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // newSentence = sentence.split(' ');
    // let highestLongest = '';
    // let currentLongest = 0;
    // let oldLongest = 0;
    // newSentence.forEach(element => {
    //     currentLongest = element.length;
    //     if (currentLongest > oldLongest){
    //         highestLongest = element;
    //         oldLongest = currentLongest;
    //     }

    // });
    // return highestLongest;

    let longest = '';
    sentence.split(' ').forEach(word => {
        if(word.length > longest.length){
            longest = word;
        }
    });
    return longest;
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
