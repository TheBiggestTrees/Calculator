let display = document.getElementById('display');
let result;
let a;
let b;
const x = [];
const y = [];

function insertNum(n, op) {

    if(!op) {
        x.push(n);
        display.innerHTML = +x.join('');
        console.log('x' + +x.join(''))
        a = +x.join('')
    } else {
        y.push(n);
        display.innerHTML = `${a} ${op} ${y.join('')}`
        console.log(+y.join(''))
        b = +y.join('');
    }  
    
}

function operate(op) {
    switch(op) {
        case '+': result = a + b;
        case '-': result = a - b;
    }
    console.log(result)

}

function add() {
    let op = '+'
    console.log(op)
    display.innerHTML = a + op[0];
    return op;
}

function subtract() {
    op = '-'
    display.innerHTML = a + ' ' + op[0];
    console.log(op)
}

function divide(x, op, y) {

}

function multiply(x, op, y) {

}

