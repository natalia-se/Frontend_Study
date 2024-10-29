// 1. Rectangle
// Write a JS class for a rectangle object. It needs to have a width (Number), height (Number) and color (String)
// properties, which are set from the constructor and a calcArea() method, that calculates and returns the
// rectangle’s area.
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calcArea() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// 2. Write a JS class that represents a personal record. It has the following properties, all set from the constructor:
// • firstName
// • lastName
// • age
// • email
// And a method toString(), which prints a summary of the information. See the example for formatting details.

class Person {
  constructor(firstName, lasName, age, email) {
    this.firstName = firstName;
    this.lasName = lasName;
    this.age = age;
    this.email = email;
  }
  toString() {
    return `${this.firstName} ${this.lasName} (age: ${this.age}, email:${this.email})`;
  }
}

// 3. Write a JS function that returns an array of Person objects. Use the class from the previous task, create the following
// instances, and return them in an array:
// For any empty cells, do not supply a parameter (call the constructor with less parameters).
// Input / Output
// There will be no input, the data is static and matches the table above. As output, return an array with Person
// instances.
let person = new Person("Maria", "Petterson", 22, "mp@gmail.com");
console.log(person.toString());

function createPeople() {
  const people = [
    new Person("Maria", "Petterson", 22, "mp@gmail.com"),
    new Person("Lexicon"),
    new Person("Stefan", "Larsson", 25),
    new Person("Peter", "Jansson", 24, "ptr@live.com"),
  ];

  return people;
}

const peopleArray = createPeople();
console.log(peopleArray);

// 4. Circle
// Write a JS class that represents a Circle. It has only one data property – it’s radius, and it is set trough the
// constructor. The class needs to have getter and setter methods for its diameter – the setter needs to calculate the
// radius and change it and the getter needs to use the radius to calculate the diameter and return it.
// The circle also has a method area(), which calculates and returns its area.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

// 5. Point Distance
// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the
// constructor, and a static method for finding the distance between two points, called distance().

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
