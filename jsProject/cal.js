/*
onchange --event only function with ()
.value









*/




function one(){
let one = document.getElementById('first').value;
    let sec = document.getElementById('sec').value;
console.log(one+sec)
console.log(sec)

    let opr = document.getElementById('opr').value;
    switch(opr){
        case '+':console.log(one+sec)
        case '-': console.log(one - sec)
    }
}