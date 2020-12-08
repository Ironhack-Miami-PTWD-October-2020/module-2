// 1: What would be expected outputs and why?
// a:
// const [a, b] = [1];
// console.log(a * b); // <== NaN

// b:
// const [a, b = 1] = [2];
// console.log(a * b); // <== 2

// // c:
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // ==> 3 4 undefined 1

// 2: Given the object, use function parameter destructuring to get the following output:
const greenSmoothie = {
  leaf: "spinach",
  veggie: "bok choy",
  seed: "ground flex seeds",
  nut: "peanut",
  liquid: "almond milk"
};

// const { leaf, veggie, seed, nut, liquid } = greenSmoothie;

// function getIngredients({ leaf, veggie, seed, nut, liquid }) {
//   return `To make the green smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
// }

// getIngredients(greenSmoothie);
// => expected: // To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.

function getIngredients(smoothie) {
  return `To make the green smoothie,  you  should add: ${smoothie.leaf}, ${smoothie.veggie}, ${smoothie.seed}, ${smoothie.nut} and ${smoothie.liquid}.`;
}
getIngredients(greenSmoothie);
