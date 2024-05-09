// Soal 2: Fetch Data dari API (Promise)
//  Ubahlah fungsi fetchUserData dari soal sebelumnya agar menggunakan Promise.

async function fetchUserData(username, callback) {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let users = await response.json();
    callback(users);
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

fetchUserData("mojombo", (users) => {
  console.log(users);
});
