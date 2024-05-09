// Soal 5: Chaining Promises

async function fetchPosts() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataPosts = await posts.json();
  console.log("Berikut adalah data Posts: ", dataPosts);
  return dataPosts;
}

async function fetchComments() {
  const comments = await fetch(
    " https://jsonplaceholder.typicode.com/comments"
  );
  const dataComments = await comments.json();
  console.log("Berikut adalah data Comments: ", dataComments);
  return dataComments;
}

Promise.all([fetchPosts(), fetchComments()])
  .then(([posts, comments]) => {
    console.log("Jumlah Data Post: ", posts.length);
    console.log("Jumlah Data Comments: ", comments.length);
  })
  .catch((error) => console.error("Gagal memuat data: ", error));
