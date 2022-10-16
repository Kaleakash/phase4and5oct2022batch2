// class Employee {
//     private id:number =100;
//     private name:string ="Raj";
//     private salary:number = 12000;
//     //private info;
//     public displayEmpInfo():void {
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("salary s "+this.salary);
//     }
// }
// let emp1 = new Employee();
// emp1.displayEmpInfo();
// //console.log(emp1.id);
// //console.log(emp1.name);
// //console.log(emp1.salary);
// // object creation with constructor 
// class Employee {
//     private id:number;
//     private name:string;
//     private salary:number;
//     constructor(id:number=123,name:string="Unknown",salary:number=8000){
//         this.id  = id;
//         this.name  = name;
//         this.salary=salary;       
//     }
//     public displayEmpInfo():void {
//                 console.log("id is "+this.id);
//                 console.log("name is "+this.name);
//                 console.log("salary s "+this.salary);
//             }
// }
// let emp1 = new Employee(100,"Ravi",12000);
// let emp2 = new Employee(101,"Ajay",15000);
// let emp3 = new Employee(102,"Ramesh");
// let emp4 = new Employee(103);
// let emp5 = new Employee();
// emp1.displayEmpInfo();
// emp2.displayEmpInfo();
// emp3.displayEmpInfo();
// emp4.displayEmpInfo();
// emp5.displayEmpInfo();

// object creation with shortcut constructor initilization 
// in typescript we can use access specifiers with constructor variable to make 
// that variable is a type of instance variable. 
class Employee {
    constructor(private id:number=123,public name:string="Unknown",private salary:number=8000){
             
    }
    public displayEmpInfo():void {
                console.log("id is "+this.id);
                console.log("name is "+this.name);
                console.log("salary s "+this.salary);
            }
}
let emp1 = new Employee(100,"Ravi",12000);
let emp2 = new Employee(101,"Ajay",15000);
let emp3 = new Employee(102,"Ramesh");
let emp4 = new Employee(103);
let emp5 = new Employee();
emp1.displayEmpInfo();
emp2.displayEmpInfo();
emp3.displayEmpInfo();
emp4.displayEmpInfo();
emp5.displayEmpInfo();

