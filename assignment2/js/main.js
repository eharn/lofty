
const getFirstInteger = () =>  {
    const userInput = parseInt(document.getElementById("userInput").value);
    return userInput;
}

const getSecondInteger = () =>  {
    const newInput = parseInt(document.getElementById("newInput").value);
    return newInput;
} 

function getNum(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}

function readContent() {
    const num = getFirstInteger(userInput);
    const full = getNum(num);
    document.getElementById("userOutput").innerHTML = full;
}

function getNumber(number){
    const integer = document.getElementById(number).value;
    const fullNumber = parseFloat(integer);
    if (fullNumber !== NaN) {
    return fullNumber;
    } else return 0;
}

function getTotal(number) {
    const outputNum = document.getElementById('userOutput');
    outputNum.innerHTML = number;
}

const addFunction = function (number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

const multiply = (number1,number2) => number1 * number2;

const divide = (number1, number2) => number1 / number2;


function performOperation(operation) {
    const total = operation(
        getNumber('userInput'),
        getNumber('newInput')
    );
getTotal(total);
}

/*function readContent() {
    const userInput = parseInt(document.getElementById("userInput").value);
    const total = getNumber(userInput);
    document.getElementById("userOutput").innerHTML = total;
}

function getNumber(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}

function addFunction() {
    let a = parseInt(document.getElementById("userInput").value);
    let b = parseInt(document.getElementById("newInput").value);
    let sum = a+b;
    document.getElementById("userOutput").innerHTML = sum;
}


subtract = function() {
    let a = parseInt(document.getElementById("userInput").value);
    let b = parseInt(document.getElementById("newInput").value);
 
    let answer = a-b;
    document.getElementById("userOutput").innerHTML = answer;
}
*/


/* const getFirstInteger = () =>  {
    const userInput = parseInt(document.getElementById("userInput").value);
    return userInput;
}

const getSecondInteger = () =>  {
    const newInput = parseInt(document.getElementById("newInput").value);
    return newInput;
} 

function readContent() {
    const integer = getFirstInteger(userInput);
    const total = getNumber(integer);
    document.getElementById("userOutput").innerHTML = total;
}

function getNumber(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}


function addFunction() {
    const a = getFirstInteger(userInput);
    const b = getSecondInteger(newInput);
    let sum = a+b;
    document.getElementById("userOutput").innerHTML = sum;
}


const subtact = () => {

}
*/

/* Solution

function getNum(numId){
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
    return numberFloat;
    } else return 0;
    }
function updateTotal(value) {
    const outputElement = document.getElementById('stretchOutput');
     outputElement.innerHTML = 'Total: ' + value;
    }
function add2(num1, num2) {
     return num1 + num2;
     }
const sub2 = function (num1, num2) {
     return num1- num2;
     }
const mult2 = (num1, num2) => num1 * num2;
const div2 = (num1, num2) => num1 / num2;
   
function performOperation(operation) {
    const total = operation(
        getNum('stretchNumber1'),
     getNum('stretchNumber2')
    );
updateTotal(total);
}
*/
