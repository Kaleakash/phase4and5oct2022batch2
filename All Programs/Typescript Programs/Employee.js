var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Raj";
        this.salary = 12000;
    }
    Employee.prototype.displayEmpInfo = function () {
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("salary s " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.displayEmpInfo();
//console.log(emp1.id);
//console.log(emp1.name);
//console.log(emp1.salary);
