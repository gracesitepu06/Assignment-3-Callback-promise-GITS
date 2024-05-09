// Exercise 4: Deret Aritmatika

function isArithmethicProgression(numbers) {
  let selisihAngka = numbers[1] - numbers[0];

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== selisihAngka) {
      return false;
    }
  }
  return true;
}

console.log(isArithmethicProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmethicProgression([2, 4, 6, 12, 24]));
console.log(isArithmethicProgression([2, 4, 6, 8]));
console.log(isArithmethicProgression([2, 6, 18, 54]));
console.log(isArithmethicProgression([1, 2, 3, 4, 7, 9]));
