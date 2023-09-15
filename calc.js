let display = document.getElementById('display');
let op = '';
let activeOp = '';
const x = [];
const y = [];

function insertNum(n) {

    if(!op) {
        x.push(n);
        display.innerHTML = +x.join('');
        console.log(+x.join(''))
    } else {
        y.push(n);
        display.innerHTML = +x.join('') + op[0] + +y.join('');
        console.log(+y.join(''))
    }  
    
}

function operate() {
    let answer = +x.join('') + +y.join('')
    display.innerHTML = answer;
    console.log(typeof answer)
}

function add() {
    op = '+'
    console.log(op)
    display.innerHTML = +x.join('') + op[0] + y.join('');
}

function subtract(x, op, y) {
    op = '-'
    console.log(op)
    display.innerHTML = +x.join('') + op[0] + y.join('');
}

function divide(x, op, y) {

}

function multiply(x, op, y) {

}

