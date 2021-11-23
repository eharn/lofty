//import { getName } from "./utilities";
const name = localStorage.getItem('name');
if(!name){
    document.querySelector('#helloName').innerHTML = 'Good Morning';
} else {
    document.querySelector('#helloName').innerHTML = `Good Morning ${name}`;
}


// grab images as buttons
const umbrella = document.querySelector('#umbrella');
const coat = document.querySelector('#coat');
const swim = document.querySelector('#swim');
const shoes = document.querySelector('#shoes');
const christmas = document.querySelector('#christmas');
const birthday = document.querySelector('#birthday');
// give images eventlisteners
umbrella.addEventListener('click', () => {document.location.href = 'umbrella.html';}, false);
coat.addEventListener('click', () => {document.location.href = 'coat.html';}, false);
swim.addEventListener('click', () => {document.location.href = 'swim.html';}, false);
shoes.addEventListener('click',() => {document.location.href = 'shoes.html';}, false);
christmas.addEventListener('click', () => {document.location.href = 'christmas.html';}, false);
birthday.addEventListener('click', () => {document.location.href = 'birthday.html';}, false);




  