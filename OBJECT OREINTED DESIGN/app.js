console.log("Welcome to Object oreinted design")

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      throw new Error("Subclasses must implement the 'speak' method.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  
    fetch() {
      return "Fetching the ball!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  
    scratch() {
      return "Scratching the furniture!";
    }
  }
  
  // Creating instances of the classes
  const dog = new Dog("Buddy");
  const cat = new Cat("Whiskers");
  
  // Calling methods on the objects
  console.log(dog.name);          // Output: Buddy
  console.log(dog.speak());       // Output: Woof!
  console.log(dog.fetch());       // Output: Fetching the ball!
  
  console.log(cat.name);          // Output: Whiskers
  console.log(cat.speak());       // Output: Meow!
  console.log(cat.scratch());     // Output: Scratching the furniture!
  
  class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    getArea() {
      throw new Error("Subclasses must implement the 'getArea' method.");
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Creating instances of the classes
  const redCircle = new Circle("red", 5);
  const blueRectangle = new Rectangle("blue", 4, 6);
  
  // Calling methods on the objects
  console.log(redCircle.getColor());          // Output: red
  console.log(redCircle.getArea());           // Output: 78.53981633974483
  
  console.log(blueRectangle.getColor());      // Output: blue
  console.log(blueRectangle.getArea());       // Output: 24
  