// Exercise 6

function gcd(firstNumber, secondNumber) {
  let result = [];
  let smaller, bigger;
  if (firstNumber <= secondNumber) {
    smaller = firstNumber;
  } else {
    smaller = secondNumber;
  }
  if (firstNumber >= secondNumber) {
    bigger = firstNumber;
  } else {
    bigger = secondNumber;
  }
  for (let i = 1; i < smaller; i++) {
    if (smaller % i == 0 && bigger % i == 0) {
      result.push(i);
    }
  }
  return Math.max(...result);
}

console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
console.log(gcd(17, 23));
