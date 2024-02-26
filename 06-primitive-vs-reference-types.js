// Primitive Type Values are stored in the Stack;
const firstName = 'John';
const age = 30;

// Reference Type Values are stored in the Heap;
const person = {
  firstName: 'Brad',
  age: 40,
};

let newName = firstName;
newName = 'Mark';

let newPerson = person;
newPerson.firstName = 'Tony';

console.log(firstName, newName);
console.log(person, newPerson);
