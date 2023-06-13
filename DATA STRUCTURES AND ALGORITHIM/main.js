function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("NIDPDC");
      } else if (i % 3 === 0) {
        console.log("PDC");
      } else if (i % 5 === 0) {
        console.log("NID");
      } else {
        console.log(i);
        
      }
    }
  }
fizzBuzz()