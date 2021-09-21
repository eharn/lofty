function readContent() {
    let userInput = parseInt(document.getElementById("userInput").value);
    let total = getNumber(userInput);
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
 function subtract() {}