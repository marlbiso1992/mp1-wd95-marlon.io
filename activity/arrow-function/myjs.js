
let num1;
let num2;

document.getElementById("addBtn").onclick = function(){
    num1 = Number(document.getElementById("myNum1").value);
    num2 = Number(document.getElementById("myNum2").value);
    let add = (num1,num2) => num1 + num2;
    let result = add(num1,num2);
    document.getElementById("myResult").textContent = 'The Sum is ' + result;
} 
document.getElementById("subBtn").onclick = function(){
    num1 = Number(document.getElementById("myNum1").value);
    num2 = Number(document.getElementById("myNum2").value);
    let sub = (num1,num2) => num1 - num2;
    let result = sub(num1,num2);
    document.getElementById("myResult").textContent = 'The Difference is ' + result;
} 
document.getElementById("multiplyBtn").onclick = function(){
    num1 = Number(document.getElementById("myNum1").value);
    num2 = Number(document.getElementById("myNum2").value);
    let multiply = (num1,num2) => num1 * num2;
    let result = multiply(num1,num2);
    document.getElementById("myResult").textContent = 'The Product is ' + result;
} 
document.getElementById("divisionBtn").onclick = function(){
    num1 = Number(document.getElementById("myNum1").value);
    num2 = Number(document.getElementById("myNum2").value);
    let divide = (num1,num2) => num1/num2;
    let result = divide(num1,num2);
    document.getElementById("myResult").textContent = 'The Qoutient is ' + result;
} 

