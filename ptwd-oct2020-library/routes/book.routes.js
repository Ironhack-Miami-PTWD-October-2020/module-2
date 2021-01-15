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
    .then((savedBook) => {
      // console.log(savedBook);
      res.redirect("/books");
    })
    .catch((err) => console.log(`Error while saving a new book to DB: ${err}`));
});

// GET route to display all the books
router.get("/books", (req, res, next) => {
  Book.find()
    .then((booksFromDB) => res.render("books-views/books-list.hbs", { booksFromDB }))
    .catch((err) => console.log(`Error while getting all books from DB: ${err}`));
});

// GET route to display the details of a specific book
router.post("/books/:bookId/delete", (req, res, next) => {
  Book.findByIdAndRemove(req.params.bookId)
    .then(() => res.redirect("/books"))
    .catch((err) => console.log(`Error while deleting the book from DB: ${err}`));
});

// GET route to render the book we want to update
router.get("/books/:bookId/edit", (req, res, next) => {
  Book.findById(req.params.bookId)
    .populate("author")
    .then((foundBook) => {
      // console.log("found book: ", foundBook);

      // we need to filter all the authors who are not the one that is currently in the found book
      Author.find().then((allAvailableAuthorsFromDB) => {
        // to compare mongo ids we can't use == or === because these are not numbers, they are type of ids
        const allTheOtherAuthors = allAvailableAuthorsFromDB.filter(
          (oneAuthor) => !oneAuthor._id.equals(foundBook.author._id)
        );

        res.render("books-views/book-edit.hbs", { foundBook, allTheOtherAuthors });
      });
    })
    .catch((err) => console.log(`Error while getting the book from DB for editing: ${err}`));
});

// POST route to save the updates user made on a specific book
// <form action="/books/{{foundBook._id}}/update" method="POST">
router.post("/books/:bookId/update", (req, res, next) => {
  const { title, description, author, rating } = req.body;

  Book.findByIdAndUpdate(req.params.bookId, { title, description, author, rating }, { new: true })
    .then((updatedBook) => {
      // console.log("updated:", updatedBook);

      res.redirect(`/books/${updatedBook._id}`);
    })
    .catch((err) => console.log(`Error while saving the updates on a specific book: ${err}`));
});

// YOUR DETAILS ROUTE SHOULD ALWAYS BE THE LAST ROUTE IN THE ROUTES FILE
// GET route to display the details of a specific book
router.get("/books/:bookId", (req, res, next) => {
  // console.log("ID: ", req.params.bookId);

  Book.findById(req.params.bookId)
    .populate("author")
    .then((foundBook) => {
      // console.log(foundBook);
      res.render("books-views/book-details.hbs", { foundBook });
    })
    .catch((err) => console.log(`Error while getting the book details from DB: ${err}`));
});

module.exports = router;
