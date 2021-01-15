const express = require("express");
const router = express.Router();

const Author = require("../models/Author.model");

// GET route to display the form and enable users to input some author information
router.get("/authors/new", (req, res, next) => res.render("authors-views/author-form.hbs"));

// POST route to save the author to the database

// <form action="/authors/create" method="POST"></form>
router.post("/authors/create", (req, res, next) => {
  // console.log("user input: ", req.body);

  const { firstName, lastName, nationality, birthday, pictureUrl } = req.body;

  Author.create({ firstName, lastName, nationality, birthday, pictureUrl })
    .then((authorFromDB) => {
      // console.log("new author here: ", authorFromDB);
      res.render("authors-views/authors-list.hbs");
    })
    .catch((err) => console.log(`Error while saving the author in DB: ${err}`));
});

// GET route to display all the authors
router.get("/authors", (req, res, next) => {
  Author.find()
    .then((authorsFromDB) => {
      // console.log("authors: ", authorsFromDB);

      res.render("authors-views/authors-list.hbs", { authorsFromDB });
    })
    .catch((err) => console.log(`Error while getting all the authors from DB: ${err}`));
});

module.exports = router;
