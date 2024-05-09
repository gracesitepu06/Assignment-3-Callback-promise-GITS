// Function mencetak tanggal saat ini
function printTglSekarang() {
  let tglSekarang = new Date();
  console.log("Tanggal Sekarang: ", tglSekarang.toDateString());
}

// Function memberikan tanggal saat ini
function cetakTgl() {
  let tanggal = new Date();
  let tglFormat =
    tanggal.getDate() +
    "/" +
    (tanggal.getMonth() + 1) +
    "/" +
    tanggal.getFullYear();

  return tglFormat;
}

console.log("Tanggal Saat ini:", cetakTgl());
