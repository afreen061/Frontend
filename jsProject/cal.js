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