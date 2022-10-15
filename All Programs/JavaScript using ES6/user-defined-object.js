// literal style object creation 
let emp = {id:100,name:"Ravi",age:21};
document.write("<br/> Object creation using literal style")
document.write("<br/> id is "+emp.id);
document.write("<br/> name is "+emp.name);
document.write("<br/> age is "+emp.age);

// // function style object creation 
// function Employee() {
    
//     this.id = 101;                  // instance varaible ie property 
//     this.name ="Lokesh";
//     this.age = 34;

//     this.displayEmpInfo = function() {          // behaviour 
//         document.write("<br/> Employee details are ")
//         document.write("<br/> Id is "+this.id);
//         document.write("<br/> Name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// //Employee();
// document.write("<br/> Object creation in function style")
// var emp1 = new Employee();          // memory created...
// emp1.displayEmpInfo();
// var emp2 = new Employee();
// emp2.displayEmpInfo();
// document.write("<br/> "+emp1.id)

// function style object creation with parameter 
// function Employee(id,name,age) {
//     this.id = id;                  // instance varaible ie property 
//     this.name =name;
//     this.age = age;

//     this.displayEmpInfo = function() {          // behaviour 
//         document.write("<br/> Employee details are ")
//         document.write("<br/> Id is "+this.id);
//         document.write("<br/> Name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// //Employee();
// document.write("<br/> Object creation in function style")
// var emp1 = new Employee(101,"Ravi",21);          // memory created...
// emp1.displayEmpInfo();
// var emp2 = new Employee(102,"Ramesh",32);
// emp2.displayEmpInfo();

document.write("<br/> Class style object creation")
// class style object creation 
// class Employee {
//     id = 100;                       // instance variable 
//     name = "Ravi"
//     age =21;

//     displayEmployeeInfo= function() {
//         document.write("<br/> Employee Details")
//         document.write("<br/> id is "+this.id);
//         document.write("<br/> Name is "+this.name);
//         document.write("<br/> age is "+this.age);
//     }
// }
// let emp1 = new Employee();
// let emp2 = new Employee();
// emp1.displayEmployeeInfo();
// emp2.displayEmployeeInfo();

// parameter constructor 
class Employee {
    // id = 0;                       // instance variable 
    // name = ""
    // age =0;
    constructor(id,name,age){
        document.write("<br/> Object created...")
        this.id = id;
        this.name = name;
        this.age = age;
    }
    //constructor(){}
    displayEmployeeInfo= function() {
        document.write("<br/> Employee Details")
        document.write("<br/> id is "+this.id);
        document.write("<br/> Name is "+this.name);
        document.write("<br/> age is "+this.age);
    }
}
let emp1 = new Employee(101,"Ajay",23);
let emp2 = new Employee(102,"Lokesh",32);
emp1.displayEmployeeInfo();
emp2.displayEmployeeInfo();

