// Javascript Review
// Excercises 1

// A. Buatlah sebuah array berisi 5 buah-buahan (string).
let fruits = ["watermelon", "orange", "melon", "banana", "papaya"];

// B. Lalu tambahkan satu buah.
let addFriut = fruits.push("jackfruit");
console.log(fruits);

// C. Edit/ubah satu buah.
fruits.splice(3, 1, "mangosteen");
console.log(fruits);

// D. Kurangi satu buah terakhir dari array
fruits.pop();
console.log(fruits);

// E.  Gunakan console.log() untuk menampilkan isi array di setiap step nya.

// Excercises 2
const mySelf = {
  firstName: "Grace",
  lastName: "Sitepu",
  age: 22,
  hobby: ["reading", "watching movie"],
  favNumber: 6,
  glasses: true,
};

const mySelfProperties = Object.values(mySelf);
console.log("Properti Objek mySelf: ", mySelfProperties);

const fullName = `${mySelf.firstName} ${mySelf.lastName}`;
console.log("Fullname: ", fullName);

// E. Ubah angka_favorit jadi 8.
const newFavNumber = Object.assign({}, mySelf);
newFavNumber.favNumber = 8;
console.log("My new favoritw num:", newFavNumber);

// F. Tambahkan satu hobi "coding"
mySelf.hobby.unshift("coding");
console.log(mySelf);

// G. Tambahkan satu property "lulusan" dengan value "Hacktiv8"
mySelf.lulusan = "Hacktiv8";
console.log(mySelf);

// H. Cetak semua hobi satu per satu menggunakan loop
for (let i = 0; i < mySelf.hobby.length; i++) {
  console.log("Hobi saya: ", mySelf.hobby[i]);
}

// I. Cetak semua key milik objek, dan cetak semua values milik objek.
const printKey = Object.keys(mySelf);
console.log("Key terdiri dari: ", printKey);

// J. Gunakan loop untuk cetak semua property milik objek dengan format key : values.
for (const key in mySelf) {
  console.log(key + ": " + mySelf[key]);
}
