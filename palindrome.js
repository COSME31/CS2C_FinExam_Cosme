let word1 = prompt("Enter the first word:").toUpperCase();
let word2 = prompt("Enter the second word:").toUpperCase();

let reversedWord1 = word1.split("").reverse().join("");
let reversedWord2 = word2.split("").reverse().join("");

console.log("Original Word 1:",word1);
console.log("Reversed Word 1:",reversedWord1);
console.log("Original Word 2:",word2);
console.log("Reversed Word 2:",reversedWord2);

console.log("Is Word 1 a palindrome?", word1 === reversedWord1);
console.log("Is Word 2 a palindrome?", word2 === reversedWord2);