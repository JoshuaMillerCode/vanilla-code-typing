const snippets = [
  {
    snippet: 
`git add -A`,
    unit: 1
  },
  {
    snippet: 
`git commit -m 'Completed homework'`,
    unit: 1
  },
  {
    snippet: 
`git push origin master`,
    unit: 1
  },
  {
    snippet: 
`let x = 25;
x = 100;`,
    unit: 1
  },
  {
    snippet: 
`const z = 25;
z = 100;`,
    unit: 1
  },
  {
    snippet: 
`const person = {name: 'Fred'};
person.age = 25;  
person = {name: 'Barney'}`,
    unit: 1
  },
  {
    snippet: 
`let name = "Fred Flintstone";
name = "Barney";`,
    unit: 1
  },
  {
    snippet: 
`let name = 'Wilma', age, town = 'Bedrock';
let name = 'Wilma';
let age;
let town = 'Bedrock';`,
    unit: 1
  },
  {
    snippet: 
`let data = 123;
data = 'Hello';`,
    unit: 1
  },
  {
    snippet: 
`let data = 123;
data = 'Hello';`,
    unit: 1
  },
  {
    snippet: 
`let m = 15;
m = 'hey';`,
    unit: 1
  },
  {
    snippet: 
`let n = 123.456;
let s1 = n.toString();
let s2 = n.toFixed(2);`,
    unit: 1
  },
  {
    snippet: 
`let s = "1234.567";
let n1 = parseInt(s);
let n2 = parseFloat(s);`,
    unit: 1
  },
  {
    snippet: 
`if (true) {
  console.log('truthy!');
} else {
  console.log('falsey!');
}`,
    unit: 1
  },
  {
    snippet: 
`!false === true 
!null === true 
!3 === false 
!'' === true
console.log(!!3);`,
    unit: 1
  },
  {
    snippet: 
`let x = 1;
while (x <= 10) {
  var msg = 'Item ' + x;
  console.log(msg);
  x++;
}`,
    unit: 1
  },
  {
    snippet: 
`if (val === 1) {
  console.log('This code will run only if val equals 1');
}`,
    unit: 1
  },
  {
    snippet: 
`if (val === 1) {
  console.log('val is one');
} else {
  console.log('val is not one');
}`,
    unit: 1
  },
  {
    snippet: 
`if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}`,
    unit: 1
  },
  {
    snippet: 
`let word = '';
let words = [];
while (word !== 'end') {
  word = prompt('Enter a word ("end" to quit)');
  if (word !== 'end') words.push(word);
  alert("You've entered: " + words.join(', '));
}`,
    unit: 1
  },
  {
    snippet: 
`let num = 0;
do {
  console.log(num);
  num += 2;
} while (num <= 10);`,
    unit: 1
  },
  {
    snippet: 
`let colors = ['red', 'white', 'blue'];
for (let idx = 0; idx < colors.length; idx++) {
  console.log(colors[idx]);
}`,
    unit: 1
  },
  {
    snippet: 
`let choice = prompt('Enter a, b or c');`,
    unit: 1
  },
  {
    snippet: 
`let message = score > 100 ? "You rock!" : "Keep trying!";`,
    unit: 1
  },
  {
    snippet: 
`let message;
if (score > 100) {
  message = "You rock!";
} else {
  message = "Keep trying!";
}`,
    unit: 1
  },
  {
    snippet: 
`let nums = new Array(2, 4, 18);`,
    unit: 1
  },
  {
    snippet: 
`let nums = [2, 4, 18];`,
    unit: 1
  },
  {
    snippet: 
`let movies = ['Caddyshack', 'Interstellar', 'Scarface'];
let firstMovie = movies[0];
movies.push('Trading Places', 'Antitrust');
movies.unshift('Star Wars');`,
    unit: 1
  },
  {
    snippet: 
`let movie = movies.pop();`,
    unit: 1
  },
  {
    snippet: 
`movie = movies.shift();`,
    unit: 1
  },
  {
    snippet: 
`const movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');`,
    unit: 1
  },
  {
    snippet: 
`movies.forEach(function(movie) {
  console.log(movie);
});`,
    unit: 1
  },
  {
    snippet: 
`for(let movie of movies) {
  if (movie === 'The Last Airbender') break;
  console.log(movie);
}`,
    unit: 1
  },
  {
    snippet: 
`const colors = ['red', 'green', 'blue'];
let color = colors[1];`,
    unit: 1
  },
  {
    snippet: 
`function getSalesData(forDate) {
  let netSales = getNetSales(forDate);
  let salesTax = computeSalesTax(netSales);
  return {netSales, salesTax};
}`,
    unit: 1
  },
  {
    snippet: 
`function sayHello(name) {
  console.log('Hello ' + name + '!');
}`,
    unit: 1
  },
  {
    snippet: 
`const sayHello = function(name) {
  console.log('Hello ' + name + '!');
};`,
    unit: 1
  },
  {
    snippet: 
`function add(a, b) {
  return a + b;
}`,
    unit: 1
  },
  {
    snippet: 
`const add = (a, b) => a + b;`,
    unit: 1
  },
  {
    snippet: 
`function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}`,
    unit: 1
  },
  {
    snippet: 
`function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills
  };
}`,
    unit: 1
  },
  {
    snippet: 
`function getDevObject(name, ...skills) {
  return {
    devName: name,
    jobSkills: skills
  };
}`,
    unit: 1
  },
  {
    snippet: 
`function setColor(bicycle, color) {
  bicycle.color = color || 'purple';
}

const bike = new Bicycle();
setColor(bike, 'blue');  
setColor(bike);`,
    unit: 1
  },
  {
    snippet: 
`var a = ['red', 'green', 'blue'];

a.forEach(function(color) {
  console.log(color);
});`,
    unit: 1
  },
  {
    snippet: 
`const vehicle = ["blue", 4000, 1989];`,
    unit: 1
  },
  {
    snippet: 
`const car = {
  color: "blue",
  hp: 4000,
  year: 1989
}`,
    unit: 1
  },
  {
    snippet: 
`const house = {
  doors: 9
}
house.hasGarden = true;
console.log(house)`,
    unit: 1
  },
  {
    snippet: 
`const bicycle = {
  isATricycle: false
}
bicycle.isATricycle = true`,
    unit: 1
  },
  {
    snippet: 
`const obj = {
  salutation: 'hi',
  count:4
}
if (obj.salutation === "hi") {
  console.log('ok');
}

for (let i = 0; i < obj.count; i++) {
  console.log(i);
}`,
    unit: 1
  },
  {
    snippet: 
`const obj = {
  something:'wuttt'
}

if (obj.something) {
  console.log('ok');
}
if (obj.anotherthing){
  console.log('ok');
} else {
  console.log('no go i dont have that property');
}`,
    unit: 1
  },
  {
    snippet: 
`const cohort = {
  id: 'SEIR Flex Madeline',
  students: ['Diana', 'Julio', 'Cory'],
  instructors: ['Arthur', 'Nando', 'Teo', 'Sean'],
  addStudent: function(name) {
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    this.students.push(name);
  },
  pickRandomStudent: function() {
    const rndIdx = Math.floor(Math.random() * this.students.length);
    return this.students[rndIdx];
  }
};`,
    unit: 1
  },
  {
    snippet: 
`class Vehicle {
  constructor(vin, make) {
    this.vin = vin;
    this.make = make;
  }
}

const plane = new Vehicle('X123Y', 'Boeing');`,
    unit: 1
  },
  {
    snippet: 
`class Vehicle {
  constructor(vin, make) {
    this.vin = vin;
    this.make = make;
  }

  toString() {
    return 'Vehicle (' + this.vin + ') is a ' +
      this.make + ' model ' + this.model;
  }
}`,
    unit: 1
  },
  {
    snippet: 
`const adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"]
}`,
    unit: 1
  },
  {
    snippet: 
`for (let i=0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i]);
}`,
    unit: 1
  },
  {
    snippet: 
`const adventurer = {
  name: 'Timothy',
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"],
  companion: {
    name: "Velma",
    type: "Bat",
    companion: {
      name: "Tim",
      type: "Parasite",
      belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
    }  
  }
}`,
    unit: 1
  },
  {
    snippet: 
`const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];`,
    unit: 1
  },
  {
    snippet: 
`const foo = {
  someArray:[1,2,3]
};
foo.someArray[0];`,
    unit: 1
  },
  {
    snippet: 
`const foo = {
  someObject: {
      someProperty: 'oh hai!'
  }
};
foo.someObject.someProperty;`,
    unit: 1
  },
  {
    snippet: 
`const foo = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2"]
];

foo[1][2];`,
    unit: 1
  },
  {
    snippet: 
`const foo = [
  1,
  "hi",
  ()=>{
      console.log('fun');
  }
];

foo[2]();`,
    unit: 1
  },
  {
    snippet: 
`const player = {
  name: 'Josh the great',
  health: 1000,
  power: 1000,
  stamina: 1000
}

const bigBadBoss = {
  name: 'Magnardo the Merciless',
  health: 1000000000000000000,
  power: 10000000000000000,
  stamina: Infinity
}`,
    unit: 1
  },
  {
    snippet: 
`const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newPlayer
}`,
    unit: 1
  },
  {
    snippet: 
`class Character {
  constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }

  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
}
const me = new Character();
const you = new Character();
me.greet('you');
you.greet('me');`,
    unit: 1
  },
  {
    snippet: 
`class Hobbit extends Character {
  steal () {
    console.log('lets get away!');
  }
  greet (otherCharacter) {
    console.log('Greetings ' + otherCharacter);
  }
  smite () {
    super.smite();
    this.steal();
  }
}
const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
frodo.smite();`,
    unit: 1
  },
  {
    snippet: 
`class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}

const newCar = new Car('Mazda', 12345);
console.log(newCar);`,
    unit: 1
  },
  {
    snippet: 
`class Factory {
  constructor (company) {
    this.company = company;
    this.cars = [];
  }
  generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar (index) {
    return this.cars[index];
  }
}
const tesla = new Factory('Tesla');
tesla.generateCar();`,
    unit: 1
  },
  {
    snippet: 
`class Person {
  static eyeColors () {
    return ['blue', 'green', 'brown'];
  }
}

const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');`,
    unit: 1
  },
  {
    snippet: 
`const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];`,
    unit: 1
  },
  {
    snippet: 
`const addList = (...args) => {
  if(!args.length){
    return 0
  } else {
    return args.reduce((accumulator, item, index) => {
      return accumulator + item
    }, 0)
  }
}
add(1)
add(1,50,1.23)
add(7,-12)`,
    unit: 1
  },
  {
    snippet:    
`* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Helvetica;
}`,
    unit: 1
  },
  {
    snippet:   
`<nav>
  <div>HOME</div>
  <div>ABOUT</div>
  <div>WIDGETS</div>
  <div>LOG OUT</div>
</nav>`,
    unit: 1
  },
  {
    snippet:   
`nav {
  display: flex;
  flex-direction: row; /* default */
  justify-content: flex-start; /* default */
  height: 50px;
  background-color: #a2cbb6;
}`,
    unit: 1
  },
  {
    snippet: 
`body {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 50px 1fr 30px;
}`,
    unit: 1
  },
  {
    snippet: 
`const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = \`'\${quotes[Math.floor(Math.random() * quotes.length)]}'\`;
};`,
    unit: 1
  },
  {
    snippet: 
`let titleEl = document.getElementById('title');
console.log(titleEl);`,
    unit: 1
  },
  {
    snippet: 
`let titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center';`,
    unit: 1
  },
  {
    snippet: 
`<ul id="comments">
  <li class="comment">first comment</li>
  <li class="comment">second comment</li>
  <li class="comment">third comment</li>
</ul>`,
    unit: 1
  },
  {
    snippet: 
`for(let commentEl of commentEls) {
  console.log(commentEl);
}`,
    unit: 1
  },
  {
    snippet: 
`body {
  font-family: Tahoma, Geneva, sans-serif;
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: 3rem auto;
  color: white;
}`,
    unit: 1
  },
  {
    snippet: 
`:root {
  --main-bg: #4a4e4d;
  --top-menu-bg: #0e9aa7;
  --sub-menu-bg: #3da4ab;
}`,
    unit: 1
  },
  {
    snippet: 
`#top-menu a:hover {
  background-color: var(--sub-menu-bg);
}`,
    unit: 1
  },
  {
    snippet: 
`var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];`,
    unit: 1
  },
  {
    snippet: 
`btn.addEventListener('click', function(evt) {
  const li = document.createElement('li');
  const inp = document.querySelector('input');
  li.textContent = inp.value;
});`,
    unit: 1
  },
  {
    snippet: 
`document.querySelector('ul')
  .addEventListener('click', handleClick);

function handleClick(evt) {
  console.log(evt);
}`,
    unit: 1
  },
  {
    snippet: 
`const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];`,
    unit: 12
  },
  {
    snippet: 
`const logNestedArray = nestedArray => {
  for (let n = 0; n < nestedArray.length; n++) {
    for (let m = 0; m < nestedArray[n].length; m++) {
      console.log(array[n][m]);
    }
  }
  for (let n = 0; n < nestedArray.length; n++) {
    console.log(\`\${nestedArray[n]} is at index \${n}\`);
  }
}`,
    unit: 1
  },
  {
    snippet: 
`const isFirstUndefined = numArray => {
  let first = numArray[0];
  return first === undefined;
}`,
    unit: 1
  },
  {
    snippet: 
`const average = (a,b) => {
  return (a+b)/2;
}`,
    unit: 1
  },
  {
    snippet: 
`const addAll = numArray => {
  let sum = 1;                                
  for (let i = 0; i < numArray.length; i++){  
    sum += numArray[i];                       
  }
  return sum;                                 
}`,
    unit: 1
  },
  {
    snippet: 
`const wordOccurrence = (word, phrase) => {
  let result = 0;
  const array  = phrase.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (word.toLowerCase() === array[i].toLowerCase()) {
      result += 1;
    }
  }
  return result;
}`,
    unit: 1
  },
  {
    snippet: 
`const bubble_sort = list => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j  = 0; j < list.length - 2; j++) {
      if (list[j+1] < list[j]) {
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}`,
    unit: 1
  },
  {
    snippet: 
`const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}`,
    unit: 1
  },
  {
    snippet: 
`const bobIsFirst = people => {
  return people[0] == 'bob';
}`,
    unit: 1
  },
  {
    snippet: 
`const isPalindrome = input => {
  const stack = [];
  let output = "";
  for (let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output == input;
}`,
    unit: 1
  },
  {
    snippet: 
`const sumOfDivisors = n => {
  let result = 0;
  let i = 1;
  while (i < n) {
    if (n % i == 0) {
      result += i;
    }
  }
  return result;
}`,
    unit: 1
  },
  {
    snippet: 
`const printAllNumbersThenSumPairs = numArray => {
  numArray.forEach(num => console.log(num));
  numArray.forEach((num, index)=>{
    if (index < numArray.length - 1) {
      console.log(num + numArray[index+1]);
    }
  });
}`,
    unit: 1
  },
  {
    snippet: 
`const isPrime = num => {
  if (num == 1 || num == 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i++){
    if (num % 1 == 0) {
      return false;
    }
  }
  return true;
}`,
    unit: 1
  },
  {
    snippet: 
`class Example {
  constructor(name){
    this.name = name
    this.method = this.method.bind(this)
  }

  methodFromExample(){
    return this.name
  }
}

const btnEl = document.querySelector('button')

btnEl.addEventListener('click', methodFromExample)`
    ,
    unit: 1
  },
  {
    snippet: 
`const multiply = (a, b) => a * b;

let n = multiply(5, 8);

console.log(n);`,
    unit: 2
  },
  {
    snippet: `node script.js`,
    unit: 2
  },
  {
    snippet: 
`const fs = require('fs');
console.log(typeof fs);

fs.writeFile('./hello.txt', 'Hello!', function() {
  console.log('done creating file');
});`,
    unit: 2
  },
  {
    snippet: 
`let daysOfWeek = require('./days-of-week');
console.log(daysOfWeek);`,
    unit: 2
  },
  {
    snippet: 
`module.exports.weekdays =
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
module.exports.getWeekday = function(dayNo) {
  if (dayNo < 0 || dayNo > 6) dayNo = 0;
  return this.weekdays[dayNo];
};`,
    unit: 2
  },
  {
    snippet: `npm init -y`,
    unit: 2
  },
  {
    snippet: 
`const request = require('request');
request(
  'http://jsonplaceholder.typicode.com/users',
  function(err, res, body) {
    console.log(body);
  }
);`,
    unit: 2
  },
  {
    snippet: 
`{
  "name": "first-node",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jim Clark <email@jim-clark.com>",
  "license": "MIT",
  "dependencies": {
    "request": "^2.88.0"
}`,
    unit: 2
  },
  {
    snippet: 
`const random = require('./utilities/random');
for (let i = 0; i < 10; i++) {
  console.log( random(100, 200) );
}`,
    unit: 2
  },
  {
    snippet: 
`const circle = require('./utilities/circle');
console.log( circle.area(50) );
console.log( circle.circumference(75) );`,
    unit: 2
  },
  {
    snippet: `console.log('Hello World');`,
    unit: 1
  },
  {
    snippet: `console.log(100);`,
    unit: 1
  },
  {
    snippet: `console.log(100 + 100);`,
    unit: 1
  },
  {
    snippet: 
`var phrase = 'In my room is a chair and a table';`,
    unit: 1
  },
  {
    snippet: 
`const item = ' chair';

item = 'eclair';`,
    unit: 1
  },
  {
    snippet: 
`let a = '';
let b = 'bongos';
let c = 'get your';

a = b;
b = c;
c = a;`,
    unit: 1
  },
  {
    snippet: `console.log('hello' + ' world'`,
    unit: 1
  },
  {
    snippet: 
`const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!!');`,
    unit: 1
  },
  {
    snippet: 
`let num = 1;

while (num <= 1000) {
  console.log('The number is: ' + num);
  num++;
}`,
    unit: 1
  },
  {
    snippet: 
`const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});`,
    unit: 1
  },
  {
    snippet: 
`const capitalize = require('./index');

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});`,
    unit: 1
  },
  {
    snippet: 
`const palindrome = require('./index');

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});`,
    unit: 1
  },
  {
    snippet: 
`const palindrome = require('./index');

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});`,
    unit: 2
  },
  {
    snippet: 
`const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});`,
    unit: 2
  },
  {
    snippet: 
`app.get('/', function(req, res) {
  res.send('<h1>Hello Express</h1>');
});`,
    unit: 2
  },
  {
    snippet: 
`const fs = require('fs')
app.engine('madeline', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace(
        '#message#',
        '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>'
      )
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'madeline')`,
    unit: 2
  }
  // {
  //   snippet: ``,
  //   unit: 2
  // },
  // {
  //   snippet: ``,
  //   unit: 2
  // },
  // {
  //   snippet: ``,
  //   unit: 2
  // },


]

module.exports = snippets