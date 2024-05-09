// Exercise 8: Mengambalikan nilai prima yang berada di antara 2 angka

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function listPrime(angkaPertama, angkaKedua) {
  let inBetween = [];
  for (i = angkaPertama + 1; i <= angkaKedua; i++) {
    if (isPrime(i)) {
      inBetween.push(i);
    }
  }
  return inBetween;
}

console.log(listPrime(1, 5));
console.log(listPrime(5, 10));
console.log(listPrime(10, 20));
