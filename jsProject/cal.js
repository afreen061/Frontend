/*
onchange --event only function with ()
.value--> to get the value of the input field and store as string
parseFloat()--> to convert string to number
parseInt()--> to convert string to integer
Number()--> to convert string to number









*/




function one(){
let one = Number(document.getElementById('first').value);
let sec = Number(document.getElementById('sec').value);


    let opr = document.getElementById('opr').value;
    switch(opr){
        case '+':document.getElementById('result').innerHTML=(one+sec)
        break;
        case '-': document.getElementById('result').innerHTML = (one - sec)
        break;
        case '*': document.getElementById('result').innerHTML = (one * sec)
    }
}
function convert(){
    let C1 = document.getElementById('ek').value;
    

    let result1 = (parseFloat(C1) * 9 / 5) + 32;
    document.getElementById('do').value=result1;

}
function convert1() {

    let C3 = document.getElementById('tin').value;


    let result2 = (parseFloat(C3) - 32) * 5 / 9;
   
   // C4 = result2; //, which is just a variable holding a value, not directly updating the input field.
    document.getElementById('char').value=result2
}
// todo local /session
function Todo(){
let todo = document.getElementById('todo').value;
//let elem =document.getElementById('save').innerHTML=todo;
// let s=localStorage.setItem("Todo",todo);
// let g= localStorage.getItem("Todo")
let s=sessionStorage.setItem("Todo",todo);
let g= sessionStorage.getItem("Todo")
//document.getElementById('save').innerHTML=localStorage.getItem("Todo");
let save =document.getElementById('save');
console.log(g)
let ele =document.createElement('div');
ele.appendChild(document.createTextNode(g));
save.appendChild(ele)



}
window.onload =function(){
    let g= sessionStorage.getItem("Todo") 
    let save =document.getElementById('save');
    if(g){
    let ele =document.createElement('div');
ele.appendChild(document.createTextNode(g));
save.appendChild(ele)
console.log(g,"hjkhkjhk")}
}






//Store to do Json

function Todos(){
    let inputdata = document.getElementById('todo').value;
    console.log(inputdata,"inputdata")
    localStorage.setItem('Todos',inputdata)
    let arr=[];
    arr.push(inputdata)
    let gets=  localStorage.getItem('Todos')
    
    
    
 
  
  //  arr.push(gets);
    console.log(arr,"array")
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}
document.addEventListener('DOMContentLoaded',function(){

    document.getElementById("color1").addEventListener('click', function () {
        document.getElementById('colorresult').style.backgroundColor = "rgb(172, 126, 233)"
    })
    document.getElementById("color2").addEventListener('click', function () {
        document.getElementById('colorresult').style.backgroundColor = "rgb(229, 226, 46)"
    })
})
