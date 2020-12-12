const express = require("express");
// require dotenv so we can use any variable inside in .env
require("dotenv").config();

// Define port for app to listen on
const PORT = process.env.PORT || 3000;
// initiate out Express app
const app = express();

app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/more-info", (req, res) => {});

// start the server listening
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

// npm i nodemon --global
