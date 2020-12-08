// destructuring 

// objects

const person = {
  name: 'ironhacker',
  age: 25,
  favoriteMusic: 'metal'
};

// es5
// const name = person.name;
// const age = person.age;
// const favoriteMusic = person.favoriteMusic;

// person.country = 'spain';

// es6
// const { name, age, favoriteMusic, country = 'spain' } = person;

// console.log(person.country)

// const { name: fullName, age, favoriteMusic, country = 'spain' } = person;

// const fullName = person.name;

// console.log(`Hello, ${fullName}`);

// nested objects

const person2 = {
  name: 'ironhacker',
  age: 25,
  favoriteMusic: 'metal',
  address: {
    street: 'super cool st',
    number: 123,
    city: 'miami'
  }
};

// es5

console.log(person2.address.street);
const { name, age, favoriteMusic, address: { street, number, city } } = person2;

// const street = person2.address.street;

console.log(`${name} lives in ${number} ${street}, city of ${city}`);