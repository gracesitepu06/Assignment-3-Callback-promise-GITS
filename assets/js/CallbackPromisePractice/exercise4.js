// Soal 4: Image Loading (Promise)
//  Ubahlah fungsi loadImage dari soal sebelumnya agar menggunakan Promise.

function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.onload = function () {
      resolve(img);
    };

    img.onerror = function () {
      reject(new Error("gagal load gambar nih..."));
    };

    img.src = imageUrl;
  });
}

loadImage(
  "https://i.pinimg.com/564x/a1/e7/44/a1e7447db3a66dbbf54394d47a111f1.jpg"
)
  .then((img) => {
    console.log("Gambar berhasil di load nih: ", img);
    document.getElementById("loadImage").src = img.src;
  })
  .catch((error) => {
    console.error("Yah, gambar gagal di load: ", error.message);
  });
