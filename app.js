'use strict'

let workers = [];

function Employee (Employee_ID, Full_Name , Department , Level , Image) {
    this.Employee_ID = Employee_ID;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.Image_url = Image;
    workers.push (this);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

Employee.prototype.salary = function() {
    
    if(this.Level === "Junior"){
        let x = getRndInteger(500 , 1000)*0.925;
        console.log(x);
        document.write(`<h1>The employee name is ${this.Full_Name} and his/her salary is ${x}</h1>`)
     }
     else if(this.Level === "Mid-Senior"){
         let x = getRndInteger(1000 , 1500)*0.925;
         console.log(x);
         document.write(`<h1>The employee name is ${this.Full_Name} and his/her salary is ${x}</h1>`)
     }
     else if(this.Level === "Senior"){
         let x = getRndInteger(1500 , 2000)*0.925;
         console.log(x);
         document.write(`<h1>The employee name is ${this.Full_Name} and his/her salary is ${x}</h1>`)
     };

}   

let Ghazi = new Employee(1000,"Ghazi Samer","Administration","Senior","image");
let Lana = new Employee(1001,"Lana Ali","Finance","Senior","image");
let Tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior","image");
let Safi = new Employee(1003,"Safi Walid","Administration","Mid-Senior","image");
let Omar = new Employee(1004,"Omar Zaid","Development","Senior","image");
let Rana = new Employee(1005,"Rana Saleh","Development","Junior","image");
let Hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","image");

console.log(Rana.salary());
console.log(workers);