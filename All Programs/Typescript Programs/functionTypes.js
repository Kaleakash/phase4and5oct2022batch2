// number of parameter must be match 
function add(a, b) {
    console.log(a + " " + b);
}
add(100, 200);
add("A", "B");
//add(1);
//add();
// function name, number of parameter and type of parameter must be match 
function empInfo(id, name, age) {
    console.log(id + " " + name + " " + age);
}
empInfo(100, "Ravi", 21);
empInfo(101, "Raju", 34);
// function with return type : no return type 
function info() {
    console.log("This function no return type");
    //return 100;
}
// function with return type string 
function sayHello(name) {
    return "Welcome to typescript " + name;
}
// function with return type number 
function addNumber(a, b) {
    return a + b;
}
// funtion with generic or no return type 
function greeting() {
    //return 100;
    return "Welcome";
}
// function with optional parameter 
// optional parameter declaration right to left. Between two optional parameter we can't declare mandatory parameter.  
function stdInfo(sid, sname, age) {
    console.log(sid + " " + sname + " " + age);
}
stdInfo(100, "Ajay", 21);
stdInfo(101, "Vijay");
stdInfo(102);
stdInfo();
