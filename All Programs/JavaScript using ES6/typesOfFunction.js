// // normal fuction 
// display1();         // normal function we can call before declaration. 

// function display1() {
//     document.write("<br/> This is normal function ");
// }
// display1();

// // expression style function 
// //display2();     // expression style function we can't call before declaration. 

// let display2 = function() {
//     document.write("<br/> Expression style function")
// }
// display2();

// // arrow function 
// let display3 = ()=>document.write("<br/> Arrow function");
// display3();
// // expression style function with passing parameter 
// let addNumber1 = function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br/> Sum of two number using exprssion style is "+addNumber1(10,20));
// // arrow style function with passing parameter 
// let addNumber2 = (a,b)=>a+b;
// document.write("<br/> sum of two number using arrow style is "+addNumber2(10,20));
// // find largest of two number using expression style 
// let findLargest1 = function(a,b){
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }
// document.write("<br/> Find largest of two number using exression style "+findLargest1(100,50));
// // find largest of two number using arrow style 
// let findLargest2 = (a,b)=>{
//     if(a>b){
//         return "a is largest"
//     }else {
//         return "b is largest"
//     }
// }


// function greeting(fname,callback){
//     return "Welcome "+callback(fname);
// }

// let maleInfo = function(fname){
//     return "Mr "+fname;
// }
// let femaleInfo = (fname)=>"Miss "+fname;

//document.write("<br/> "+greeting("Raj",maleInfo));
// document.write("<br/> "+greeting("Seeta",femaleInfo));
// document.write("<br/>"+greeting("Ajay",function(fname){
//     return "Mr "+fname;
// }));
// document.write("<br/>"+greeting("Reeta",(fname)=>"Miss "+fname));

let names =["Ravi","Raj","Reeta","Leeta","Ajay","Vijay"];
let num1 = [10,20,30,40];
//1st way 
names.forEach(display)
num1.forEach(display);

function display(n,i,item){
    document.write("<br/> <b>"+n+" "+i+"</b>"+" "+item);
}

//2nd way               ES5 style 
names.forEach(function(n,i){
    document.write("<br/> "+n+" "+i);
})

//3rd way               ES6 style 
names.forEach((n,i)=>document.write("<br/>"+n+" "+i));








