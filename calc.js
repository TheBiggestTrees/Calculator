let display = document.getElementById('ans');
let answer = document.getElementById('previousAnswer')
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
    display.innerHTML = '0';
    answer.innerHTML = 'Ans';
}

function operateReset() {
    op = '';
    a = '';
    b = '';
    x = [];
    y = [];
    result = '';
    xFill = false;
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
            answer.innerHTML = result;
            operateReset();
            break
        case '-': 
            result = a - b;
            answer.innerHTML = result;
            operateReset();
            break
        case '*': 
            result = a * b;
            answer.innerHTML = result;
            operateReset();
            break
        case '/': 
            result = a / b;
            answer.innerHTML = result;
            operateReset();
            break
        default: 
            answer.innerHTML = 'Try some numbers';
            break
    }
}

function backspace() {
    
    if (xFill === false) {
        x.splice(-1, 1);
        a = +x.join('');
        display.innerHTML = a;
    }  else {
        y.splice(-1, 1);
        b = +y.join('')
        display.innerHTML =  `${a} ${op} ${b}`;
    } 
    
}
