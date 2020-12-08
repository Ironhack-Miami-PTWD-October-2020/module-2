// Given the object 'data', use the object destructuring to be able
// to print student first and last name, favorite football club,
// as well as the city and the country this student is coming from.

const data = {
  name: {
    firstName: "ana",
    lastName: "marino"
  },
  isStudent: true,
  favoriteFootballTeam: "fc barcelona",
  hometown: {
    city: "buenos aires",
    country: "argentina"
  }
};

const {
  name: { firstName, lastName },
  favoriteFootballTeam,
  hometown: { city, country }
} = data;

console.log(`Student ${firstName} ${lastName} from ${city} (${country}) loves ${favoriteFootballTeam}`);
