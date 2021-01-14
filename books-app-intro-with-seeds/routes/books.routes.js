const express = require("express");
const router = express.Router();

const Book = require("../models/Book.model");

// get things OUT of the DB:
// .find() -> returns ALL the documents and it is ALWAYS an array
// .findById(someId) -> returns A SPECIFIC document and it is always an OBJECT

// GET route to display all the books
router.get("/books", (req, res, next) => {
  Book.find()
    .then((allTheBooksFromDB) => {
      // console.log("here are the books: ", allTheBooksFromDB);

      res.render("books-list.hbs", { allTheBooksFromDB });
    })
    .catch((err) => console.log(`Error while getting all the books: ${err}`));
});

// GET route to display details of a specific book
// <a href="/books/{{_id}}"> See details </a>
router.get("/books/:bookId", (req, res, next) => {
  Book.findById(req.params.bookId)
    .then((foundBook) => {
      // console.log("single book ===> ", foundBook);
      res.render("book-details.hbs", { foundBook });
    })
    .catch((err) => console.log(`Error while getting a single book: ${err}`));
});

module.exports = router;
