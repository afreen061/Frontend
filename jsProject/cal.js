/*
onchange --event only function with ()
.value--> to get the value of the input field and store as string
parseFloat()--> to convert string to number
parseInt()--> to convert string to integer
Number()--> to convert string to number









*/




function one(){
let one =Number(document.getElementById('first').value);
    let sec = Number(document.getElementById('sec').value);


    let opr = document.getElementById('opr').value;
    switch(opr){
        case '+': document.getElementById('result').innerHTML=one+sec;
        break;
        case '-':  document.getElementById('result').innerHTML=one-sec;
        break;
        case '*': document.getElementById('result').innerHTML=one*sec; 
        break;
        case '/': document.getElementById('result').innerHTML=one/sec;
        break;
        case '%': document.getElementById('result').innerHTML=one%sec;
        break;
        default: document.getElementById('result').innerHTML="Invalid Operator";
    }
   
}