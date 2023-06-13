console.log("Welcome to Data structures and algrothim")

// class Car {
//     constructor(brand) {  // Constructor
//       this.carname = brand;
//     }
//   }
//   mycar = new Car("Ford")
//   console.log(mycar)

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show();
  