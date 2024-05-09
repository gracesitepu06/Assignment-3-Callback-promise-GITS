// function yang menerima sebuah angka, memeriksa angka tersebut ganjil atau genap

let cekGenapGanjil = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid Data";
  }

  return number % 2 === 0 ? "genap" : "genjil";
};

console.log(cekGenapGanjil(2));
console.log(cekGenapGanjil(3));
console.log(cekGenapGanjil(20));
console.log(cekGenapGanjil(21));
console.log(cekGenapGanjil("lima"));
console.log(cekGenapGanjil("8"));
