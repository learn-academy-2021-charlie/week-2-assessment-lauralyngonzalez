# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: Iteration is the process of performing a repeated action a number of
  times or until a certain condition is met. Arrays and strings are iterable
  and the index is used to iterate over them. 

  Researched answer: Iteration is executing a block of code over and over again
  or until a condition is true. It's used on data types with a length property
  such as arrays and strings. For loops are used to iterate over a sequence
  of instructions. It has a location or index to start at, a condition that
  tells whether to keep iterating, and a repeatable action.



2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: .map() has predefined parameters for the value, index, and the calling
  array. It's a higher order function that can take a function as an argument or
  return a function. Higher order functions also require at least one argument. So
  for .map() the value is required and the others are optional.

  Researched answer: .map() has three predefined parameters, the value, index, and
  array. The order must be the same and the first parameter for the value of the
  array at the current location is always required. The current index and the array
  are optional.



3. What is object destructuring?

  Your answer: Object destructuring is a shortcut used to reference the object's
  values. If the object is named fruit and it has the key-value pair "apple: 5",
  for the number of apples, then instead of doing fruit.apple, we can use object
  destructuring to create a shortcut named numApples to get the 5.

  Researched answer: Object destructuring assignment is a way to unpack the
  variables of an object by taking the properties and assigning individual
  variables to call them on. It's a quicker way to access the variables. To
  use them the property names must be used in curly braces and they need to be
  declared with the var keyword. 




4. What is the difference between an object and a class?

  Your answer: A class is a blueprint for an object. Objects are instantiated
  from classes and have key-value pairings. There can be many objects based on
  one class. For example, the class can be Car and there can be many car objects. 

  Researched answer: Objects are data types that contain collections of key value
  pairs for data and behavior. Classes are the blueprints for objects. They are
  reusable and define the data and behavior that an object follows. So each object
  created from a class share the same properties but are independent from each other,
  where they can have a different value for a key. For example, a Car class
  can have multiple cars with a key being the color for the car. But each car can
  have a different color value. 



5. Why would you use the method super()?

  Your answer: The method super() is used when creating a class that's inheriting
  from another class. When an object is instantiated the constructor for the
  child class is called and super() will call the constructor of the parent class.
  So the child will have the data that its parent has.

  Researched answer: We use the method super() when we want to create a new
  class that has specialized attributes and methods in addition to the ones provided
  by another class. super() will pass the attributes from the parent to the child.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when a variable can be used before it is declared as
  either var/let/const.

  Researched answer: Variables declared as var can be hoisted. let and const
  cannot. So variable assignment can be written such as num = 6, before it is
  declared as var num. Calling a function that's declared later in the code
  can also be hoisted. Function declarations do not have to be strictly placed
  before calling them. This is all possible because var and function declarations
  are put in memory during the compile phase, before any code is executed.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React: A Javascript library for building user interfaces. React uses components
which are essentially functions to pass data. There are smart components which
contain the logic and the dumb components have data for the user interface.

2. React lifecycle methods: The react lifecycle has three main phases, mounting,
updating and unmounting which can be subdivided into a render and commit phase. 
componentDidMount() is part of the mounting phase where components are inserted
into the DOM tree. When a component is updated then componentDidUpdate() is called.
Before unmounting a component, componentWillUnmount() is called and is for cleaning
up such as canceling network requests.

3. React state: An object that stores the component's data. States are dynamic and
defines how the component renders and behaves. The state can be changed with setState()
and components are updated and rendered automatically when setState() is called.

4. Component invocation/call: Components are called with render() which will return
a JSX (Javascript XML) element to display the user interface.

5. DOM Events: The DOM (Document Object Model) has events when users interact with
the interface. These are user inputs such as clicking, hovering over elements, or
typing on the keyboard.
