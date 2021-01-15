const express = require("express");
const router = express.Router();

const Book = require("../models/Book.model");
const Author = require("../models/Author.model");

// GET route to display the form and enable users to input some book information
router.get("/books/new", (req, res, next) => {
  Author.find()
    .then((authorsFromDb) => res.render("books-views/book-form.hbs", { authorsFromDb }))
    .catch((err) => console.log(`Error while displaying the form to create a new book: ${err}`));
});

// POST route to save the book inside the books collection in the DB
router.post("/books/create", (req, res, next) => {
  // console.log("new book: ", req.body);

  const { title, description, author, rating } = req.body;

  Book.create({ title, description, author, rating })
    .then((savedBook) => console.log(savedBook))
    .catch((err) => console.log(`Error while saving a new book to DB: ${err}`));
});

module.exports = router;
