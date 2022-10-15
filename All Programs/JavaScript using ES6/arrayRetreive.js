let num  =[100,200,300,400,500,600,700,800];
document.write("<br/> All elements from array "+num);
document.write("<br/> All elements from array "+num.join("->"));
document.write("<br/> Using for loop");
for(let i=2;i<num.length;i=i+2){
    document.write("<br/> Value is "+num[i]);
}
document.write("<br/> For in loop");
for(let i in num){                      // index position 
    document.write("<br/> Index "+i+" Value "+num[i]);
}
document.write("<br/> For of loop");
for(let n of num){
    document.write("<br/> Vallue "+n)
}