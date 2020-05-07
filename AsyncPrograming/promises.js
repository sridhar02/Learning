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

// createPosts({
//   title: "third post",
//   body: "this is 3rd post",
// })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// promise all

const promise1 = Promise.resolve("hello world");

const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "good bye")
);

const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
