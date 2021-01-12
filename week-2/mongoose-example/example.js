const mongoose = require('mongoose');
 
mongoose
  .connect(`mongodb+srv://cule:admin@cluster0.aqqz9.mongodb.net/test?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


  const Cat = mongoose.model('Cat', { name: String, color: String, age: Number });

  // const kitten1 = new Cat({
  //     name: 'Garfield',
  //     color: 'Orange',
  //     age: 3
  //   });
  
  // kitten1.save()
  //   .then(newCatFromDb => {
  //     console.log('New Cat added to DB: ', newCatFromDb);
  //   }).catch(err => {
  //     console.log('Error while creating new cat: ', err);
  //   });
  const createCat = (name, color, age) => {
    const catToAdd = new Cat({
      name,
      color,
      age
    });

    // alt way to create cat
    // catToAdd.save()
    //   .then(newCatFromDb => {
    //     console.log('New Cat added to DB: ', newCatFromDb);
    //   }).catch(err => {
    //     console.log('Error while creating new cat: ', err);
    //   });

      Cat.create(catToAdd)
        .then(newCatFromDb => {
          console.log('New Cat added to DB: ', newCatFromDb);
        }).catch(err => {
          console.log('Error while creating new cat: ', err);
        });
};

const findAllCats = () => {
  Cat.find()
    .then(catsFromDB => {
      // catsFromDB is a placeholder and represents an array of Cat instances
      catsFromDB.forEach(oneCat => console.log(` --> cat: ${oneCat}`));
    })
    .catch(error => console.log(`Error occurred during getting cats from DB: ${error}`));
};

// Cat.find()
//   .then(catsFromDB => {
//     // catsFromDB is a placeholder and represents an array of Cat instances
//     catsFromDB.forEach(oneCat => console.log(` --> cat: ${oneCat.name}`));
//   })
//   .catch(error => console.log(`Error occurred during getting cats from DB: ${error}`));


// how to add many cats to db once you have the function set up up to add a single cat
function addTenCats() {
  for (let i = 0; i < 10; i++) {
    createCat(`Ironhacker ${i}`);
  }
}

// createCat('Felix', 'Yellow', 5);

// addTenCats();

setTimeout(() => {
  findAllCats();
}, 2500);

setTimeout(mongoose.disconnect(), 3500);

// mongoose.disconnect();