x = 6;  // global variable created
console.log(x);

 // same variable can be accessed as a property of the window object
console.log(window.x);

// both variables are exactly the same
window.x === x;
console.log(x);

//checking to see if x is defined
if (x) { 
    console.log('x is defined');
    }

// the incorrect way to check if global variable is defined
//because if it's not the code won't run as it returns false
if (window.x) {
    console.log('true');
    }

//methods of global makes them widow object methods
console.log(window.parseInt(4.2));
console.log(window.isNaN(4.2));


//both methods of number set in ES6
console.log(Number.parseInt(4.2));
console.log(Number.isNaN(4.2));

//alert window that will alert and stop the program and always returns undefined
//window.alert('Hello');

//alert window with message that asks Ok or Cancel, returning true or false, always undefined
//window.confirm('Do you wish to continue?');

//provides text field and returns as a string if OK clicked
//window.prompt('Please enter your name:');

//returns info about the browser & operating system
console.log(window.navigator.userAgent);

//returns the URL can be redefined to redirect page
console.log(window.location.href); 

//returns protocol
console.log(window.location.protocol);

//returns host
console.log(window.location.host);

//returns domain fo current URL
console.log(window.location.hostname);

//returns port or an empty string
console.log(window.location.port);

//returns a sting of the path that follows the domain
console.log(window.location.pathname);

//returns a string showing protocal and domain where originated form read only
console.log(window.location.origin);

//open a new window on screen with open page as reference
//const popup = window.open('http://127.0.0.1:5501/assignment9/testcode.html','Popup','width=400,height=400,resizable=yes');

//returns browser display information
console.log(window.screen.height);
console.log(window.screen.width);

//writes a sting to the page
//document.write('Hello, world!');

//write with a tag
//document.write('<h1>Hello, world!</h1>');

//setting cookies
//document.cookie = 'name=Batman';
//document.cookie = 'city=Gotham';

//reading a cookie
//document.cookie:

//sets a timer to the function for 3 seconds
//window.setTimeout( () => alert("Time's Up!"), 3000);

//animation of the square
// const squareElement = document.getElementById('square');
// let angle = 0;

// setInterval( () => {
//     angle = (angle + 2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`
// }, 1000/60);

//smoother and faster animation than the above code
const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

//setting items to local storage
localStorage.setItem('name', 'Walter White');

//getting item from storage
localStorage.getItem('name'); 

// setting item and calling item without setItem and getItem, using assignement
localStorage.name = 'Heisenberg'; 
console.log(localStorage.name); 

// saving an object to localstorage as jSON string with key "superman"
localStorage.setItem('superman', JSON.stringify(hero));

//getting that item JSON string
superman = JSON.parse(localStorage.getItem('superman'));






//button that will change background color and input for number
//eventlisteners and button
const btn = document.getElementById('rainbow');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);



const form = document.forms[0];
form.addEventListener('submit', factorize, false);

function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();     

    const number = Number(form.number.value);
    document.getElementById('output').innerText = factorsOf(number);  
}

function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) =>  a - b);
}