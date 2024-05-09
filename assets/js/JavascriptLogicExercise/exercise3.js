// Exercise 3: Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).

// function urutHuruf(text) {
//   let splitText = text.split("");
//   let sortText = splitText.sort((a, b) => a.localeCompare(b));
//   let joinText = sortText.join("");

//   return joinText;
// }

const urutHuruf = (text) =>
  text
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

console.log(urutHuruf("Halo"));
console.log(urutHuruf("qwenty"));
console.log(urutHuruf("qwertyuipoiasdfghjklzxcvbnm"));
