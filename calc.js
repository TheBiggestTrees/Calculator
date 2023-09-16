let display = document.getElementById('ans');
let answer = document.getElementById('previousAnswer')
let result;
let a;
let b;
let previousEquation;
let xFill = false;
let op = '';
let x = [];
let y = [];
let xDecimalClicked = false;
let yDecimalClicked = false;

function clearScreen() {
    op = '';
    a = '';
    b = '';
    x = [];
    y = [];
    result = '';
    xFill = false;
    display.innerHTML = 'Ans';
    answer.innerHTML = '0';
}

function operateReset() {
    a = result;
    b = '';
    x = Array.from(String(result));
    y = [];
    result = 0;
    xFill = false;
}

function addBtn() {
    xFill = true;
    op = '+';
    display.innerHTML = `${a} +`;
}

function subtractBtn() {
    xFill = true;
    op = '–';
    display.innerHTML = `${a} –`;
}

function divideBtn() {
    xFill = true;
    op = '÷';
    display.innerHTML = `${a} ÷`;
}

function multiplyBtn() {
    xFill = true;
    op = '×';
    display.innerHTML = `${a} ×`;
}

function insertNum(n) {
    if (xFill === true) {
        y.push(n);
        b = +y.join('');
        display.innerHTML = `${+a} ${op} ${+b}`
    }  else {
        x.push(n);
        a = +x.join('')
        display.innerHTML = +a;
    } 
    
}

function insertDecimal() {
        if (xFill === true && yDecimalClicked === false) {
            y.push('.');
            b = +y.join('');
            display.innerHTML = `${+a} ${op} ${+b}`
            yDecimalClicked = true;
        }  else if (xDecimalClicked === false) {
            x.push('.');
            a = +x.join('')
            display.innerHTML = +a;
            xDecimalClicked = true;
        } 
    
}

function operate() {
    previousEquation = `${a} ${op} ${b}`;

    switch(op) {
        case '+': 
            result = a + b;
            answer.innerHTML = previousEquation;
            display.innerHTML = result;
            operateReset();
            break
        case '–': 
            result = a - b;
            answer.innerHTML = previousEquation;
            display.innerHTML = result;
            operateReset();
            break
        case '×': 
            result = a * b;
            answer.innerHTML = previousEquation;
            display.innerHTML = result;
            operateReset();
            break
        case '÷': 
            if (b == 0) {
                display.innerHTML = `Can't divide by zero`
            } else {
                result = a / b;
                answer.innerHTML = previousEquation;
                display.innerHTML = result;
                operateReset();}
            break
        default: 
            answer.innerHTML = 'Try some numbers';
            break
    }

    

}

function backspace() {
    
    if(y.length > 0) {
        y.splice(-1, 1);
        b = +y.join('')
        display.innerHTML =  `${a} ${op} ${b}`;     
    }  else {
        xFill = false;
        x.splice(-1, 1);
        a = +x.join('');
        display.innerHTML = a;
    } 
    
}

window.onkeydown = (e) => {
    switch(e.keyCode) {
        case 8:
            backspace();
            break
        case 13:
            operate();
            break
        case 67:
            clearScreen();
            break
        case 96: 
            insertNum(0);
            break
        case 97: 
            insertNum(1);
            break
        case 98: 
            insertNum(2);
            break
        case 99: 
            insertNum(3);
            break
        case 100: 
            insertNum(4);
            break
        case 101: 
            insertNum(5);
            break
        case 102: 
            insertNum(6);
            break
        case 103: 
            insertNum(7);
            break
        case 104: 
            insertNum(8);
            break
        case 105: 
            insertNum(9);
            break
        case 106:
            multiplyBtn();
            break
        case 107:
            addBtn();
            break
        case 109:
            subtractBtn();
            break
        case 110:
            insertDecimal();
            break
        case 111:
            divideBtn();
            break
    }
}
