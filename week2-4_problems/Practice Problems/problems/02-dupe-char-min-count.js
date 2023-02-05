/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/
/*
--Looks like the practice problem wants us to use a helper function. x
--The helper function should create an object out of the string that counts each item in the string x
--And returns the object x
--The Second Function should then check to see how many keys match the minCount
--add them to an array
--and return the array
*/


function countCharacters(string) {
	let string2Object = {};
		for (let i = 0; i < string.length; i++){
		let letter = string[i];
		if (string2Object[letter] === undefined) string2Object[letter] = 1;
		else string2Object[letter] ++;
		}
	return string2Object;
}

function duplicateCharMinCount(string, minCount) {
		let charCount = countCharacters(string);
		return Object.keys(charCount).filter(key =>charCount[key] >= minCount);
}


console.log(duplicateCharMinCount("apple", 2)) // ["p"]
console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
