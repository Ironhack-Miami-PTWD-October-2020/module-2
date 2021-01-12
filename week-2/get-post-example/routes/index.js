const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET request are request made to get information.
router.get('/search', (req, res, next) => {
  // to get the info from a get form you would have to use req.query
  console.log({query: req.query});
  // res.redirect('back');

  const data = {
    searchResults: req.query.searchInput
  };

  // this must always be an object
  //                    |
  res.render('index', data);
  // res.render('index', {searchResults: req.query.searchInput})
});

// POST request are made when posting some sort of information to the database (creating new information, updating information) as well as request with private information (ei: searching for C.C. numbers or S.S. numbers on database);
router.post('/search', (req, res, next) => {
  // to get the info from a post form you would have to use req.body
  console.log({postQuery: req.body});
  // res.redirect('back');

  const data = {
    searchPostResults: req.body.searchInput
  };

  res.render('index', data);
});

module.exports = router;
