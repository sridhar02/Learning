//  callbacks example

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

function createPosts(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPosts({ title: "third post", body: "this is the third post" }, getPosts);
