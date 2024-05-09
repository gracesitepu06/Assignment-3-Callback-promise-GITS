// Soal 3: Image Loading (Callback)
// Buatlah sebuah fungsi loadImage yang akan menerima URL dari sebuah gambar dan sebuah callback function.
// Fungsi ini akan membuat elemen img baru dan menetapkan atribut src-nya dengan URL yang diberikan.
// Gunakan callback untuk menangani kasus ketika gambar berhasil dan gagal dimuat.

function loadImage(imageUrl, callbackSuccess, callbackError) {
  let img = new Image();

  img.onload = function () {
    callbackSuccess(img);
  };

  img.onerror = function () {
    callbackError(new Error("gagal load gambar nih..."));
  };

  img.src = imageUrl;

  loadImage(
    "https://i.pinimg.com/564x/a1/e7/44/a1e7447db3a66dbbf54394d47a111f1.jpg",
    function (img) {
      console.log("Gambar berhasil di load nih: ", img);
      document.getElementById("loadImage").src = img.src;
    },
    function (error) {
      console.error("Yah, gambar gagal di load: ", error.message);
    }
  );
}
