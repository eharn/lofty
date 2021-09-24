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