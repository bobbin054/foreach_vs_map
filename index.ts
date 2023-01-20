// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const people = [
  { name: 'Jan', age: 13 },
  { name: 'Bengt', age: 66 },
];

appDiv.innerHTML += '<p>' + JSON.stringify(people) + '</p>';

const agesMap = people.map((x) => x.age);
const agesForeach = [];
people.forEach((x) => agesForeach.push(x.age));

console.log(people.filter((p) => p.age));
console.log(agesMap);
console.log(agesForeach);
