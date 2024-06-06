const snippets = [
  {
    snippet: `git add -A`,
    type: 'git',
    description:
      'This command stages all changes (new, modified, and deleted files) in the repository for the next commit.',
  },
  {
    snippet: `git commit -m 'Completed homework'`,
    type: 'git',
    description:
      'This command commits the staged changes to the repository with a commit message "Completed homework".',
  },
  {
    snippet: `git push origin master`,
    type: 'git',
    description:
      'This command pushes the committed changes from the local repository to the "master" branch of the remote repository named "origin".',
  },
  {
    snippet: `let x = 25;\nx = 100;`,
    type: 'javascript',
    description:
      'This code initializes a variable `x` with the value 25 and then reassigns it to 100.',
  },
  {
    snippet: `const z = 25;\nz = 100;`,
    type: 'javascript',
    description:
      'This code attempts to initialize a constant `z` with the value 25 and then reassign it to 100, which will result in an error because constants cannot be reassigned.',
  },
  {
    snippet: `const person = {name: 'Fred'};\nperson.age = 25;\nperson = {name: 'Barney'}`,
    type: 'javascript',
    description:
      'This code creates a constant object `person` with a property `name`. It then adds a new property `age`, but attempts to reassign the object itself, which will result in an error because constants cannot be reassigned.',
  },
  {
    snippet: `let name = "Fred Flintstone";\nname = "Barney";`,
    type: 'javascript',
    description:
      'This code initializes a variable `name` with the value "Fred Flintstone" and then reassigns it to "Barney".',
  },
  {
    snippet: `let name = 'Wilma', age, town = 'Bedrock';\nlet name = 'Wilma';\nlet age;\nlet town = 'Bedrock';`,
    type: 'javascript',
    description:
      'This code demonstrates different ways of declaring variables in JavaScript. It shows combined and separate declarations of variables `name`, `age`, and `town`.',
  },
  {
    snippet: `let data = 123;\ndata = 'Hello';`,
    type: 'javascript',
    description:
      'This code initializes a variable `data` with the number 123 and then reassigns it to the string "Hello".',
  },
  {
    snippet: `let data = 123;\ndata = 'Hello';`,
    type: 'javascript',
    description:
      'This code initializes a variable `data` with the number 123 and then reassigns it to the string "Hello".',
  },
  {
    snippet: `let m = 15;\nm = 'hey';`,
    type: 'javascript',
    description:
      'This code initializes a variable `m` with the number 15 and then reassigns it to the string "hey".',
  },
  {
    snippet: `let n = 123.456;\nlet s1 = n.toString();\nlet s2 = n.toFixed(2);`,
    type: 'javascript',
    description:
      'This code initializes a variable `n` with a floating-point number. It then converts `n` to a string using `toString()` and formats it to two decimal places using `toFixed(2)`.',
  },
  {
    snippet: `let s = "1234.567";\nlet n1 = parseInt(s);\nlet n2 = parseFloat(s);`,
    type: 'javascript',
    description:
      'This code initializes a string `s` with a numeric value. It then converts `s` to an integer using `parseInt()` and to a floating-point number using `parseFloat()`.',
  },
  {
    snippet: `if (true) {\n  console.log('truthy!');\n} else {\n  console.log('falsey!');\n}`,
    type: 'javascript',
    description:
      'This code demonstrates a simple `if-else` statement that logs "truthy!" because the condition is `true`.',
  },
  {
    snippet: `!false === true \n!null === true \n!3 === false \n!'' === true\nconsole.log(!!3);`,
    type: 'javascript',
    description:
      'This code demonstrates the use of the logical NOT operator `!` to convert values to their boolean equivalents, and logs the double negation `!!` of 3 to show its boolean value.',
  },
  {
    snippet: `let x = 1;\nwhile (x <= 10) {\n  var msg = 'Item ' + x;\n  console.log(msg);\n  x++;\n}`,
    type: 'javascript',
    description:
      'This code uses a `while` loop to log the message "Item x" where x ranges from 1 to 10.',
  },
  {
    snippet: `if (val === 1) {\n  console.log('This code will run only if val equals 1');\n}`,
    type: 'javascript',
    description:
      'This code uses an `if` statement to log a message if the variable `val` is equal to 1.',
  },
  {
    snippet: `if (val === 1) {\n  console.log('val is one');\n} else {\n  console.log('val is not one');\n}`,
    type: 'javascript',
    description:
      'This code uses an `if-else` statement to log different messages based on whether `val` is equal to 1 or not.',
  },
  {
    snippet: `if (val === 1) {\n  console.log('val is one');\n} else if (val === 2) {\n  console.log('val is two');\n} else if (val === 3) {\n  console.log('val is three');\n} else {\n  console.log('not one, two, or three');\n}`,
    type: 'javascript',
    description:
      'This code uses an `if-else if-else` statement to log different messages based on whether `val` is 1, 2, 3, or none of these.',
  },
  {
    snippet: `let word = '';\nlet words = [];\nwhile (word !== 'end') {\n  word = prompt('Enter a word ("end" to quit)');\n  if (word !== 'end') words.push(word);\n  alert("You've entered: " + words.join(', '));\n}`,
    type: 'javascript',
    description:
      'This code uses a `while` loop to prompt the user to enter words until "end" is entered. The entered words are stored in an array and displayed using `alert`.',
  },
  {
    snippet: `let num = 0;\ndo {\n  console.log(num);\n  num += 2;\n} while (num <= 10);`,
    type: 'javascript',
    description:
      'This code uses a `do-while` loop to log even numbers from 0 to 10.',
  },
  {
    snippet: `let colors = ['red', 'white', 'blue'];\nfor (let idx = 0; idx < colors.length; idx++) {\n  console.log(colors[idx]);\n}`,
    type: 'javascript',
    description:
      'This code uses a `for` loop to log each color in the `colors` array.',
  },
  {
    snippet: `let choice = prompt('Enter a, b or c');`,
    type: 'javascript',
    description:
      'This code prompts the user to enter a choice of "a", "b", or "c" and stores the input in the `choice` variable.',
  },
  {
    snippet: `let message = score > 100 ? "You rock!" : "Keep trying!";`,
    type: 'javascript',
    description:
      'This code uses a ternary operator to set `message` to "You rock!" if `score` is greater than 100, otherwise to "Keep trying!".',
  },
  {
    snippet: `let message;\nif (score > 100) {\n  message = "You rock!";\n} else {\n  message = "Keep trying!";\n}`,
    type: 'javascript',
    description:
      'This code uses an `if-else` statement to set `message` to "You rock!" if `score` is greater than 100, otherwise to "Keep trying!".',
  },
  {
    snippet: `let nums = new Array(2, 4, 18);`,
    type: 'javascript',
    description:
      'This code creates an array `nums` with elements 2, 4, and 18 using the `Array` constructor.',
  },
  {
    snippet: `let nums = [2, 4, 18];`,
    type: 'javascript',
    description:
      'This code creates an array `nums` with elements 2, 4, and 18 using array literal notation.',
  },
  {
    snippet: `let movies = ['Caddyshack', 'Interstellar', 'Scarface'];\nlet firstMovie = movies[0];\nmovies.push('Trading Places', 'Antitrust');\nmovies.unshift('Star Wars');`,
    type: 'javascript',
    description:
      'This code creates an array `movies`, accesses the first element, adds elements to the end using `push`, and to the beginning using `unshift`.',
  },
  {
    snippet: `let movie = movies.pop();`,
    type: 'javascript',
    description:
      'This code removes the last element from the `movies` array and assigns it to the `movie` variable.',
  },
  {
    snippet: `movie = movies.shift();`,
    type: 'javascript',
    description:
      'This code removes the first element from the `movies` array and assigns it to the `movie` variable.',
  },
  {
    snippet: `const movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ];\nlet removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');`,
    type: 'javascript',
    description:
      'This code uses the `splice` method to remove one element at index 3 from the `movies` array and insert "Spaceballs" and "Alien" in its place.',
  },
  {
    snippet: `movies.forEach(function(movie) {\n  console.log(movie);\n});`,
    type: 'javascript',
    description:
      'This code uses the `forEach` method to log each movie in the `movies` array.',
  },
  {
    snippet: `for(let movie of movies) {\n  if (movie === 'The Last Airbender') break;\n  console.log(movie);\n}`,
    type: 'javascript',
    description:
      'This code uses a `for...of` loop to log each movie in the `movies` array, but breaks out of the loop if it encounters "The Last Airbender".',
  },
  {
    snippet: `const colors = ['red', 'green', 'blue'];\nlet color = colors[1];`,
    type: 'javascript',
    description:
      'This code creates an array `colors` and assigns the second element to the variable `color`.',
  },
  {
    snippet: `function getSalesData(forDate) {\n  let netSales = getNetSales(forDate);\n  let salesTax = computeSalesTax(netSales);\n  return {netSales, salesTax};\n}`,
    type: 'javascript',
    description:
      'This function calculates and returns an object containing `netSales` and `salesTax` for a given date.',
  },
  {
    snippet: `function sayHello(name) {\n  console.log('Hello ' + name + '!');\n}`,
    type: 'javascript',
    description: 'This function logs a greeting message with the given `name`.',
  },
  {
    snippet: `const sayHello = function(name) {\n  console.log('Hello ' + name + '!');\n};`,
    type: 'javascript',
    description:
      'This code defines an anonymous function that logs a greeting message with the given `name` and assigns it to the `sayHello` variable.',
  },
  {
    snippet: `function add(a, b) {\n  return a + b;\n}`,
    type: 'javascript',
    description: 'This function returns the sum of two arguments `a` and `b`.',
  },
  {
    snippet: `const add = (a, b) => a + b;`,
    type: 'javascript',
    description:
      'This code defines an arrow function that returns the sum of two arguments `a` and `b`.',
  },
  {
    snippet: `function areBothEven(n1, n2) {\n  return !(n1 % 2) && !(n2 % 2);\n}`,
    type: 'javascript',
    description:
      'This function returns `true` if both `n1` and `n2` are even numbers, otherwise `false`.',
  },
  {
    snippet: `function getDevObject(name) {\n  let skills = [];\n  for (let i = 1; i < arguments.length; i++) {\n    skills.push(arguments[i]);\n  }\n  return {\n    devName: name,\n    jobSkills: skills\n  };\n}`,
    type: 'javascript',
    description:
      'This function creates and returns an object with a `devName` property and a `jobSkills` array containing all additional arguments passed to the function.',
  },
  {
    snippet: `function getDevObject(name, ...skills) {\n  return {\n    devName: name,\n    jobSkills: skills\n  };\n}`,
    type: 'javascript',
    description:
      'This function uses the rest parameter syntax to create and return an object with a `devName` property and a `jobSkills` array containing all additional arguments passed to the function.',
  },
  {
    snippet: `function setColor(bicycle, color) {\n  bicycle.color = color || 'purple';\n}\n\nconst bike = new Bicycle();\nsetColor(bike, 'blue');  \nsetColor(bike);`,
    type: 'javascript',
    description:
      'This function sets the `color` property of a `bicycle` object to the provided color or defaults to "purple". The `bike` object is then passed to this function twice, once with "blue" and once with no color specified.',
  },
  {
    snippet: `var a = ['red', 'green', 'blue'];\n\na.forEach(function(color) {\n  console.log(color);\n});`,
    type: 'javascript',
    description:
      'This code uses the `forEach` method to log each color in the array `a`.',
  },
  {
    snippet: `const vehicle = ["blue", 4000, 1989];`,
    type: 'javascript',
    description:
      'This code creates an array `vehicle` with elements representing color, horsepower, and year.',
  },
  {
    snippet: `const car = {\n  color: "blue",\n  hp: 4000,\n  year: 1989\n}`,
    type: 'javascript',
    description:
      'This code creates an object `car` with properties for color, horsepower, and year.',
  },
  {
    snippet: `const house = {\n  doors: 9\n}\nhouse.hasGarden = true;\nconsole.log(house)`,
    type: 'javascript',
    description:
      'This code creates an object `house` with a `doors` property and then adds a `hasGarden` property. It logs the updated `house` object.',
  },
  {
    snippet: `const bicycle = {\n  isATricycle: false\n}\nbicycle.isATricycle = true`,
    type: 'javascript',
    description:
      'This code creates an object `bicycle` with an `isATricycle` property and then updates this property to `true`.',
  },
  {
    snippet: `const obj = {\n  salutation: 'hi',\n  count:4\n}\nif (obj.salutation === "hi") {\n  console.log('ok');\n}\n\nfor (let i = 0; i < obj.count; i++) {\n  console.log(i);\n}`,
    type: 'javascript',
    description:
      'This code creates an object `obj` with `salutation` and `count` properties. It then logs "ok" if `salutation` is "hi" and logs numbers from 0 to 3.',
  },
  {
    snippet: `class Car {\n  constructor(color, hp, year) {\n    this.color = color;\n    this.hp = hp;\n    this.year = year;\n  }\n}`,
    type: 'javascript',
    description:
      'This code defines a `Car` class with a constructor that initializes `color`, `hp`, and `year` properties.',
  },
  {
    snippet: `class Vehicle {\n  constructor() {\n    this.gasAmount = 100;\n  }\n  move() {\n    this.gasAmount--;\n  }\n}`,
    type: 'javascript',
    description:
      'This code defines a `Vehicle` class with a constructor that initializes a `gasAmount` property and a `move` method that decreases `gasAmount`.',
  },
  {
    snippet: `class Motorcycle extends Vehicle {\n  constructor() {\n    super();\n  }\n}`,
    type: 'javascript',
    description:
      'This code defines a `Motorcycle` class that extends the `Vehicle` class, calling the parent class constructor using `super()`.',
  },
  {
    snippet: `import React from 'react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(<App />, document.getElementById('root'));`,
    type: 'react',
    description:
      'This code imports React and ReactDOM libraries and renders the `App` component into an HTML element with the id `root`.',
  },
  {
    snippet: `import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;`,
    type: 'react',
    description:
      'This code defines a `Counter` component using React hooks. It uses `useState` to manage the `count` state and provides a button to increment the count.',
  },
  {
    snippet: `import React from 'react';\n\nclass Hello extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\nexport default Hello;`,
    type: 'react',
    description:
      'This code defines a class-based `Hello` component that renders a greeting message using the `name` prop.',
  },
  {
    snippet: `import React, { useEffect, useState } from 'react';\n\nfunction FetchData() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []);\n\n  if (!data) return <div>Loading...</div>;\n  return <div>{JSON.stringify(data)}</div>;\n}\n\nexport default FetchData;`,
    type: 'react',
    description:
      'This code defines a `FetchData` component that fetches data from an API using `fetch` and displays it. It uses `useEffect` to perform the fetch operation when the component mounts.',
  },
  {
    snippet: `import React, { useContext } from 'react';\n\nconst MyContext = React.createContext();\n\nfunction MyComponent() {\n  const value = useContext(MyContext);\n  return <div>{value}</div>;\n}\n\nexport default MyComponent;`,
    type: 'react',
    description:
      'This code defines a `MyComponent` component that consumes a context value using `useContext` and displays it.',
  },
  {
    snippet: `import React from 'react';\n\nfunction ListItems({ items }) {\n  return (\n    <ul>\n      {items.map(item => <li key={item.id}>{item.name}</li>)}\n    </ul>\n  );\n}\n\nexport default ListItems;`,
    type: 'react',
    description:
      'This code defines a `ListItems` component that receives an `items` prop and renders each item as a list item inside an unordered list. Each list item has a unique key.',
  },
  {
    snippet: `import React, { useReducer } from 'react';\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <div>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n    </div>\n  );\n}\n\nexport default Counter;`,
    type: 'react',
    description:
      'This code defines a `Counter` component using the `useReducer` hook. It manages the `count` state with `reducer` and dispatches actions to increment or decrement the count.',
  },
  {
    snippet: `import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(seconds => seconds + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n\n  return <div>Seconds: {seconds}</div>;\n}\n\nexport default Timer;`,
    type: 'react',
    description:
      'This code defines a `Timer` component that counts the seconds elapsed since the component mounted. It uses `useState` for the seconds state and `useEffect` to set up and clean up the interval.',
  },
  {
    snippet: `import React, { useRef } from 'react';\n\nfunction FocusInput() {\n  const inputRef = useRef(null);\n\n  const handleFocus = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} type="text" />\n      <button onClick={handleFocus}>Focus Input</button>\n    </div>\n  );\n}\n\nexport default FocusInput;`,
    type: 'react',
    description:
      'This code defines a `FocusInput` component that uses the `useRef` hook to focus an input element when a button is clicked.',
  },
  {
    snippet: `import React from 'react';\nimport { BrowserRouter as Router, Route, Switch } from 'react-router-dom';\n\nfunction Home() {\n  return <h2>Home</h2>;\n}\n\nfunction About() {\n  return <h2>About</h2>;\n}\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <Switch>\n          <Route path="/about">\n            <About />\n          </Route>\n          <Route path="/">\n            <Home />\n          </Route>\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n\nexport default App;`,
    type: 'react',
    description:
      'This code defines an `App` component that sets up client-side routing using React Router. It defines routes for the `Home` and `About` components.',
  },
  {
    snippet: `import React, { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nfunction AxiosFetch() {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    axios.get('https://api.example.com/data')\n      .then(response => {\n        setData(response.data);\n      });\n  }, []);\n\n  return (\n    <div>\n      {data.map(item => (\n        <div key={item.id}>{item.name}</div>\n      ))}\n    </div>\n  );\n}\n\nexport default AxiosFetch;`,
    type: 'react',
    description:
      'This code defines an `AxiosFetch` component that fetches data from an API using Axios and displays it. It uses `useState` to manage the data state and `useEffect` to perform the fetch operation when the component mounts.',
  },
  {
    snippet: `import React, { useState } from 'react';\n\nfunction Toggle() {\n  const [isOn, setIsOn] = useState(false);\n\n  const toggle = () => {\n    setIsOn(!isOn);\n  };\n\n  return (\n    <button onClick={toggle}>\n      {isOn ? 'ON' : 'OFF'}\n    </button>\n  );\n}\n\nexport default Toggle;`,
    type: 'react',
    description:
      'This code defines a `Toggle` component that manages a boolean `isOn` state using `useState`. It toggles the state when the button is clicked.',
  },
  {
    snippet: `import React from 'react';\n\nconst ThemeContext = React.createContext('light');\n\nfunction ThemedButton() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => <button className={theme}>I am styled by theme context!</button>}\n    </ThemeContext.Consumer>\n  );\n}\n\nexport default ThemedButton;`,
    type: 'react',
    description:
      'This code defines a `ThemedButton` component that consumes a theme value from `ThemeContext` and applies it as a class to a button.',
  },
  {
    snippet: `import React from 'react';\nimport { useForm } from 'react-hook-form';\n\nfunction MyForm() {\n  const { register, handleSubmit, watch, errors } = useForm();\n  const onSubmit = data => console.log(data);\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input name="example" defaultValue="test" ref={register} />\n      <input name="exampleRequired" ref={register({ required: true })} />\n      {errors.exampleRequired && <span>This field is required</span>}\n      <input type="submit" />\n    </form>\n  );\n}\n\nexport default MyForm;`,
    type: 'react',
    description:
      'This code defines a `MyForm` component using the `react-hook-form` library. It registers input fields and handles form submission, displaying an error message for required fields.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });\n\nconst db = mongoose.connection;\ndb.on('error', console.error.bind(console, 'connection error:'));\ndb.once('open', function() {\n  console.log('Connected to MongoDB');\n});`,
    type: 'mongoose',
    description:
      'This code connects to a MongoDB database using Mongoose and sets up event listeners to handle connection errors and successful connection.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst schema = new mongoose.Schema({\n  name: String,\n  age: Number,\n  city: String\n});\n\nconst User = mongoose.model('User', schema);\n\nconst newUser = new User({ name: 'John', age: 30, city: 'New York' });\nnewUser.save().then(() => console.log('User saved'));`,
    type: 'mongoose',
    description:
      'This code defines a `User` schema and model in Mongoose. It creates a new user instance and saves it to the database.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  password: { type: String, required: true }\n});\n\nuserSchema.methods.comparePassword = function(password) {\n  return bcrypt.compareSync(password, this.password);\n};\n\nconst User = mongoose.model('User', userSchema);`,
    type: 'mongoose',
    description:
      'This code defines a `User` schema with methods to compare passwords. It includes fields for name, email, and password, with validation and unique constraints.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst postSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  body: String,\n  date: { type: Date, default: Date.now }\n});\n\nconst Post = mongoose.model('Post', postSchema);\n\nPost.find({ title: /react/i }, function(err, posts) {\n  if (err) return console.error(err);\n  console.log(posts);\n});`,
    type: 'mongoose',
    description:
      'This code defines a `Post` schema and model. It includes fields for title, body, and date. It also demonstrates how to find posts with titles matching a regex pattern.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst commentSchema = new mongoose.Schema({\n  text: String,\n  author: String\n});\n\nconst blogSchema = new mongoose.Schema({\n  title: String,\n  author: String,\n  body: String,\n  comments: [commentSchema],\n  date: { type: Date, default: Date.now },\n  hidden: Boolean\n});\n\nconst Blog = mongoose.model('Blog', blogSchema);\n\nconst newBlog = new Blog({\n  title: 'Mongoose Tips',\n  author: 'John Doe',\n  body: 'This is a blog post about Mongoose.',\n  comments: [{ text: 'Great post!', author: 'Jane' }],\n  hidden: false\n});\n\nnewBlog.save().then(() => console.log('Blog saved'));`,
    type: 'mongoose',
    description:
      'This code defines nested schemas for comments and blogs, and demonstrates creating and saving a new blog with comments.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst productSchema = new mongoose.Schema({\n  name: String,\n  price: Number,\n  tags: [String]\n});\n\nconst Product = mongoose.model('Product', productSchema);\n\nProduct.findById('60d5ec49f2b3b824d4c8e1c4', function(err, product) {\n  if (err) return console.error(err);\n  product.price = 99.99;\n  product.save().then(() => console.log('Product updated'));\n});`,
    type: 'mongoose',
    description:
      'This code defines a `Product` schema and model. It demonstrates how to find a product by ID, update its price, and save the changes.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst orderSchema = new mongoose.Schema({\n  product: String,\n  quantity: Number,\n  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }\n});\n\nconst Order = mongoose.model('Order', orderSchema);\n\nOrder.find().populate('user').exec((err, orders) => {\n  if (err) return console.error(err);\n  console.log(orders);\n});`,
    type: 'mongoose',
    description:
      'This code defines an `Order` schema and model. It demonstrates finding orders and populating the user field with referenced `User` documents.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst categorySchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  description: String\n});\n\nconst Category = mongoose.model('Category', categorySchema);\n\nCategory.deleteOne({ name: 'Old Category' }, function(err) {\n  if (err) return console.error(err);\n  console.log('Category deleted');\n});`,
    type: 'mongoose',
    description:
      'This code defines a `Category` schema and model. It demonstrates deleting a category document by name.',
  },
  {
    snippet: `const mongoose = require('mongoose');\n\nconst reviewSchema = new mongoose.Schema({\n  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },\n  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },\n  review: String,\n  rating: Number,\n  date: { type: Date, default: Date.now }\n});\n\nconst Review = mongoose.model('Review', reviewSchema);\n\nReview.find({ rating: { $gte: 4 } }, function(err, reviews) {\n  if (err) return console.error(err);\n  console.log(reviews);\n});`,
    type: 'mongoose',
    description:
      'This code defines a `Review` schema and model with references to `Product` and `User`. It demonstrates finding reviews with a rating greater than or equal to 4.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(port, () => {\n  console.log(\`Server is running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code creates a basic Express server that responds with "Hello World!" when accessed at the root URL.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.post('/user', (req, res) => {\n  const user = req.body;\n  // Save user to database here\n  res.status(201).send(user);\n});\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code creates an Express server that can handle JSON data in POST requests to the "/user" endpoint, sending back the user data with a 201 status.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.use(express.static('public'));\n\napp.get('/', (req, res) => {\n  res.sendFile(__dirname + '/public/index.html');\n});\n\napp.listen(port, () => {\n  console.log(\`Server running at http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code sets up an Express server to serve static files from the "public" directory and send an HTML file in response to the root URL.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\nconst users = [];\n\napp.get('/users', (req, res) => {\n  res.send(users);\n});\n\napp.post('/users', (req, res) => {\n  const user = req.body;\n  users.push(user);\n  res.status(201).send(user);\n});\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code creates an Express server with endpoints to get all users and add a new user. It uses an in-memory array to store user data.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\n\nconst myMiddleware = (req, res, next) => {\n  console.log('Middleware executed');\n  next();\n};\n\napp.use(myMiddleware);\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code sets up an Express server with a custom middleware that logs a message for every request before responding with "Hello World!" at the root URL.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.get('/user/:id', (req, res) => {\n  const userId = req.params.id;\n  // Fetch user from database\n  res.send(\`User ID: \${userId}\`);\n});\n\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code creates an Express server with a route that extracts a user ID from the URL parameters and responds with the user ID.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\n\napp.use(express.urlencoded({ extended: true }));\n\napp.post('/submit-form', (req, res) => {\n  const formData = req.body;\n  res.send(\`Form submitted with data: \${JSON.stringify(formData)}\`);\n});\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code sets up an Express server to handle URL-encoded form data submitted via POST to the "/submit-form" endpoint, and responds with the submitted data.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.get('/error', (req, res) => {\n  throw new Error('This is a forced error');\n});\n\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});\n\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code sets up an Express server with an endpoint that intentionally throws an error to demonstrate error handling middleware, which logs the error and responds with a 500 status.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\nconst items = [\n  { id: 1, name: 'Item 1' },\n  { id: 2, name: 'Item 2' }\n];\n\napp.get('/items', (req, res) => {\n  res.send(items);\n});\n\napp.get('/items/:id', (req, res) => {\n  const itemId = parseInt(req.params.id);\n  const item = items.find(i => i.id === itemId);\n  if (item) {\n    res.send(item);\n  } else {\n    res.status(404).send('Item not found');\n  }\n});\n\napp.post('/items', (req, res) => {\n  const newItem = req.body;\n  items.push(newItem);\n  res.status(201).send(newItem);\n});\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code creates an Express server with endpoints to get all items, get an item by ID, and add a new item. It uses an in-memory array to store item data.',
  },
  {
    snippet: `const express = require('express');\nconst app = express();\nconst cookieParser = require('cookie-parser');\n\napp.use(cookieParser());\n\napp.get('/set-cookie', (req, res) => {\n  res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });\n  res.send('Cookie is set');\n});\n\napp.get('/get-cookie', (req, res) => {\n  const cookies = req.cookies;\n  res.send(cookies);\n});\n\nconst port = 3000;\napp.listen(port, () => {\n  console.log(\`Server running on http://localhost:\${port}\`);\n});`,
    type: 'express',
    description:
      'This code sets up an Express server that uses the `cookie-parser` middleware to handle cookies. It includes endpoints to set and get cookies.',
  },
];

module.exports = snippets;
