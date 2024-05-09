// Soal 1: Fetch Data dari API (Callback)

// Buatlah fungsi fetchUserData yang akan menerima sebuah username dari GitHub dan sebuah callback function sebagai argumen.
// Fungsi ini akan melakukan HTTP GET request ke API GitHub(https://api.github.com/users/[username]) dan memanggil callback dengan data yang diambil dari API.

function fetchUserData(username, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", `https://api.github.com/users/${username}`);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);
      callback(users);
    } else {
      console.error("Error fetching: ", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Jaringan Error");
  };
  xhr.send();
}

fetchUserData("defunkt", (users) => {
  console.log(users);
});
