let calculation = '';

function addOne() {
    calculation += '1';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addTwo() {
    calculation += '2';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addThree() {
    calculation += '3';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addPlus() {
    calculation += '+';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addFour() {
    calculation += '4';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addFive() {
    calculation += '5';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addSix() {
    calculation += '6';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addSeven() {
    calculation += '7';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addEight() {
    calculation += '8';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addNine() {
    calculation += '9';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addMinus() {
    calculation += '-';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addLeftParenthesis() {
    calculation += '(';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addRightParenthesis() {
    calculation += ')';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addZero() {
    calculation += '0';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addDivide() {
    calculation += '/';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addMultiply() {
    calculation += '*';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addEquals() {
    calculation = eval(calculation);
    globalThis.document.getElementById('text').textContent = calculation.toFixed(2);
}

function Clear() {
    calculation = '';
    globalThis.document.getElementById('text').textContent = calculation;
}

function addDecimal() {
    calculation += '.';
    globalThis.document.getElementById('text').textContent = calculation;
}

function Backspace() {
    calculation = calculation.slice(0, -1);
    globalThis.document.getElementById('text').textContent = calculation;
}

window.onload = function () {
    globalThis.document.getElementById('text').textContent = calculation;
}