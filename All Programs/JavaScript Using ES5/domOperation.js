//alert("This is external JS file")
function addData() {
    //alert("Event generate");
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var pTagRef = document.createElement("p");      // creating reference of p tag 
    //var pTagValue = document.createTextNode("Welcome to DOM Operation");        // p tag content ready 

    var pTagValue = document.createTextNode("Name is "+name+" Age is "+age);
    
    if(age>30){
    pTagRef.setAttribute("class","myClass1");       // adding class selector 
    }else {
    pTagRef.setAttribute("class","myClass2");       // adding class selector   
    }
    
    
    pTagRef.appendChild(pTagValue);         // content added inside p tag 

    document.getElementById("result").appendChild(pTagRef);     // added p tag inside div tag 

    document.getElementById("name").value=""
    document.getElementById("age").value=""
}