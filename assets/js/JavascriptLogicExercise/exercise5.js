// Exercise 5: Mengembalikan true juka memiliki karakter a dan b namun dnegan jarak 3 karakter lainnya diantaranya

function threeStepAB(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a" && text[i + 4] === "b") {
      return true;
    } else if (text[i] === "b" && text[i + 4] === "a") {
      return true;
    }
  }
  return false;
}

console.log(threeStepAB("lan eborrowed"));
console.log(threeStepAB("i am sick"));
console.log(threeStepAB("you are boring"));
console.log(threeStepAB("barbarian"));
console.log(threeStepAB("bacon and meat"));
