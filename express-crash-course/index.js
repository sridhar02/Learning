const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const members = require("./Members");

//Handle Bars middle ware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Home page route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Init Middleware
// app.use(logger);

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Members API routes

app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
