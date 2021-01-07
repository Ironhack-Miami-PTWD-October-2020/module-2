// these 2 variables are required in every routes file.
const express = require('express');
const router  = express.Router();



/* GET home page */
router.get('/', (req, res, next) => {
  // local variables created in a route, is only available for the view page the route is rendering (if the variable is declared).
  res.locals.newTitle = 'This is the new title for the index page';
  res.render('index');
});

// Home page with no new title
router.get('/home', (req, res, next) => {
  res.render('index');
});


// remember to export router in every routes file in order to have it read in app.js
module.exports = router;
