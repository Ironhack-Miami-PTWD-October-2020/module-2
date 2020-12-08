// arrays

const campuses = ["madrid", "barcelona", "miami"];

// es5
// const firstCampus = campuses[0];
// const secondCampus = campuses[1];
// const thirdCampus = campuses[2];
// console.log(firstCampus, secondCampus, thirdCampus);

// es6
// const [firstCampus, secondCampus, thirdCampus] = campuses;
// console.log(firstCampus, secondCampus, thirdCampus)

const [first] = campuses;
console.log(first);

const [, second] = campuses;
console.log(second);

const [, , third] = campuses;
console.log(third);

const [firstCampus, secondCampus, thirdCampus, fourthCampus = "paris"] = campuses;

console.log(firstCampus, fourthCampus); // madrid paris

// nested arrays

const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"]
];

const [[campusSpain1], [campusSpain2, country], [campus3, theCountry]] = europeanCampuses;

console.log(campusSpain1, campusSpain2, campus3, country, theCountry); // madrid barcelona berlin es de

// mixed objects and arrays

const customer = {
  name: {
    firstName: "ivan",
    lastName: "zoro"
  },
  age: 32,
  preferences: [
    {
      tech: ["cameras", "smartwatches"],
      books: ["science fiction", "coding"]
    }
  ]
};

// const {
//   name: { firstName, lastName },
//   age,
//   preferences: [{ tech, books }]
// } = customer;

const {
  name: { firstName, lastName },
  age,
  preferences: [{ tech: technology, books: literature }]
} = customer;

console.log(firstName, lastName, age);
console.log(technology, literature);
