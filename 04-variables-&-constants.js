// Ways to declare a variable;
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letter, numbers, underscores and dollar signs
// - Can't start with a number

// Mulit-Word Formatting
// firstName = camelCase
// first_name = snake_case
// FirstName = PascalCase
// firstname = lowercase
// FIRSTNAME = UPPERCASE

// Re-assigning Variables on (let) declarations
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// Closer look on (const) declarations

const x = 100;

console.log(x);

const arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr);

const person = {
  firstName: 'John',
};

person.firstName = 'Brad';
person.email = 'brad@email.com';

console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 10,
  e = 20,
  f = 30;
