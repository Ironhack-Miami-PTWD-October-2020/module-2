const express = require('express');
const router  = express.Router();
const Sample = require('../../models/sample');

// *** CRUD stands for Create, Read, Update, Delete

// Create Route (C from CRUD)
router.post('/create', (req, res, next) => {
  const sampleData = {
    name: req.body.name,
    age: req.body.age
  };

  // you would need to create an object with the correct keys for the model if you did not use the same name parameters for your inputs in your form as you did in your schema(model);
  // Sample.create(sampleData)

  Sample.create(req.body).then(newlyCreatedSample => {
    console.log({newlyCreatedSample});

    res.redirect('/sample');
  }).catch(err => next(err));
});





// Read Route (R from CRUD)
router.get('/', (req, res, next) => {
  Sample.find().then(samplesFromDb => {
    console.log({samplesFromDb});

    res.render('sample-views/sample-list', {samples: samplesFromDb});
  }).catch(err => next(err));
});

module.exports = router;