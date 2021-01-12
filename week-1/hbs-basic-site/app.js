const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const user = [
  {
    username: "Rachel",
    background: "<b>Northern Lights</b>",
    module: 2,
    tech: ["JS", "HTML", "HBS", "Express"],
    address: "Miami",
  },
  {
    username: "Anna",
    background: "<b>Room</b>",
    module: 2,
    tech: ["JS", "HTML", "HBS", "Express"],
  },
];

const name = '<span style="color: red"> Sandra<span>';
app.get("/", (request, response, next) => {
  response.render("index.hbs", { user });
});

app.get("/name", (request, response, next) => {
  response.render("name.hbs", { name });
});

app.listen(3000, () => console.log("listening on 3000"));
