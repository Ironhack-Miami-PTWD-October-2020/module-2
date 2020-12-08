// ...

// spread operator
const webStudents = ["ida", "anna"];
const uxStudents = ["sandra", "stefan"];

// es5

const allStudents = [];
webStudents.forEach((student) => allStudents.push(student));
uxStudents.forEach((student) => allStudents.push(student));

console.log(allStudents);

// es6
const ironStudents = [...webStudents, ...uxStudents];
console.log(ironStudents);

// es5
const webStudentsCopy = webStudents.slice();
console.log(webStudentsCopy);

// es6
const uxStudentsCopy = [...uxStudents];
console.log(uxStudentsCopy);

// rest parameter

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

add();
add(1);
add(1, 2, 5, 8);

function add1(...args) {
  return args.reduce((sum, next) => sum + next);
}

add1(2, 3, 5, 6);
