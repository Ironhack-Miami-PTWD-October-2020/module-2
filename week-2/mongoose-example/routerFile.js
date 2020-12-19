const express = require('express');
const router = express();
const Cat = require('./model');


// this will give you previous info from user prior to update
Cat.findByIdAndUpdate('5a3a7ecbc6ca8b9ce68bd41b', { $inc: { salary: 4200 } })
  .then(successCallback)
  .catch(errorCallback);

// add {new: true} after the info to update in order to get the updated info from db 
Cat.findByIdAndUpdate('5a3a7ecbc6ca8b9ce68bd41b', { $inc: { salary: 4200 } }, {new: true})
  .then(successCallback)
  .catch(errorCallback);





// base set up for a route
router.get('/cats', (req, res, next) => {
    console.log("the search query", req.query.catName);

    Cat.find({name: req.query.catName})
    .then(catsFromDb => {
        console.log({catsFromDb});
    }).catch(err => console.log({err}));
});

router.post('/cats', (req, res, next) => {
    console.log({searchQuery: req.body.catName});

    Cat.find({name: req.body.catName})
    .then(catsFromDb => {
        console.log({catsFromDb});
    }).catch(err => console.log({err}));
});
