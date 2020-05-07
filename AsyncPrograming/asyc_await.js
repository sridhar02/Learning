const posts = [
  { title: "post one", body: "this is post one" },
  {
    title: "post two",
    body: "this is second post",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:something went wrong");
      }
    }, 2000);
  });
}

// async /await

// async function init() {
//   await createPosts({
//     title: "third post",
//     body: "this is 3rd post",
//   });

//   getPosts();
// }

// init();

// Async /Await /Fetch

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }

async function fetchUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error + "api is not working ");
  }
}

fetchUsers();
