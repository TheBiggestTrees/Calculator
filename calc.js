let display = document.getElementById('display');
let result;
let a;
let b;
let xFill = false;
let op = '';
let x = [];
let y = [];

function clearScreen() {
    op = '';
    a = '';
    b = '';
    x = [];
    y = [];
    result = '';
    xFill = false;
    display.innerHTML = '000';
    console.log('clear')
}

function addBtn() {
    xFill = true;
    op = '+';
    display.innerHTML = `${a} ${op}`;
}

function subtractBtn() {
    xFill = true;
    op = '-';
    display.innerHTML = `${a} ${op}`;
}

function divideBtn() {
    xFill = true;
    op = '/';
    display.innerHTML = `${a} ${op}`;
}

function multiplyBtn() {
    xFill = true;
    op = '*';
    display.innerHTML = `${a} ${op}`;
}

function insertNum(n) {
    if (xFill === true) {
        y.push(n);
        b = +y.join('');
        display.innerHTML = `${a} ${op} ${b}`
    }  else {
        x.push(n);
        a = +x.join('')
        display.innerHTML = a;
    } 
    
}

function operate() {
    switch(op) {
        case '+': 
            result = a + b;
            break
        case '-': 
            result = a - b;
            break
        case '*': 
            result = a * b;
            break
        case '/': 
            result = a / b;
            break
        default: 
            console.log('invalid');
            break
    }

    display.innerHTML = result;

}
