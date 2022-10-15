// using literal style 
let num1 = [];
// using new keytword 
let num2 = new Array();
// create object with values 
let num3 = [10,20,30,40,50];
let emp = [100,"Ravi",12000,true];
// document.write("<br/> Size of array "+num1.length);
// document.write("<br/> Size of array "+num2.length);
// document.write("<br/> Size of array "+num3.length);
// document.write("<br/> all elements are "+num3)              // by default string format separated by , 
// document.write("<br/> Value from index position 0 "+num3[0]);
// num3.push(100);     // add element at last 
// num3.push(200);
// num3.unshift(1);        // add element at begining 
// num3.unshift(2);
// document.write("<br/> all elements are "+num3);
// num3.pop();             // remove elements from last 
// num3.shift();           // remove elements from begining 
// document.write("<br/> all elements are "+num3);
document.write("<br/> all elements are "+num3)     
// 1st parameter index position , 2nd parameter number of elements to delete
//num3.splice(2,1);// from 2nd index position remove 1 elements 
//num3.splice(2,2);
// replace 3 index position element by 100 
//num3.splice(3,1,100);       // 1st parameter index position, 2nd paramter number of elements and 3rd to nth parameter number of element to add 
//num3.splice(3,0,100);
num3.splice(3,0,100,200,300,400);
document.write("<br/> all elements are "+num3)    



