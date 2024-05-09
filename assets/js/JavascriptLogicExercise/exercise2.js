// Exercise 2: Buatlah function bernama reverseString yang mampu melakukan proses pembalikan string!

// function reverseString(text) {
//   let splitTextString = text.split("");
//   let reverseTextArray = splitTextString.reverse();
//   let joinTextArray = reverseTextArray.join("");

//   return joinTextArray;
// }

const reverseString = (text) => text.split("").reverse().join("");

console.log(reverseString("Hello world and coders"));
console.log(reverseString("John Doe"));
console.log(reverseString("I am a bookworm"));
console.log(reverseString("Coding is my hobby"));
console.log(reverseString("Super"));
