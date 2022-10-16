// interface with variable and function 
interface Bank {
    accno:number;
    withdraw():void;
    deposite():void;
}
class Hdfc implements Bank {
    accno: number;
    withdraw(): void {
        
    }
    deposite(): void {
        
    }
}
class Hsbc implements Bank {
    accno: number;
    withdraw(): void {
        
    }
    deposite(): void {
        
    }
}
// interface with any variable. 
// this interface use to make type of reference type in object literal 
interface Employee {
    id:number;
    name:string;
    age?:number;
}
let emp1:Employee = {id:100,name:"Ravi",age:21};
let emp2:Employee = {id:101,name:"Raju",age:45};
let emp3:Employee = {id:102,name:"Lokesh"};












