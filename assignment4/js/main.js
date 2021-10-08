//this is the same as
//const form = document.getElementsByTagName('form')[0]; 

//this
const form = document.forms[0];

//const form = document.forms['search'];

const [input,button] = form.elements; // gets elements from form

// can use name attributes as if property of the form object:
//field name attribute searchInput accessed
//const input = form.searchInput;

//bracket notation -- same
//const input = form['searchInput'];

//URL to send submit to
form.action = '/an/other.url';

//focus event
//const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);

//blur event
//input.addEventListener('blur', () => alert('blurred'), false);

//change event
//input.addEventListener('change', () => alert('changed'), false);

//const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search() {
    alert(' Form Submitted');
}

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

//placeholder that must be deleted before typing
//input.value = 'Search Here';

//helps with the placeholder, removes it when click and reappear when leaving black field
/*
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
*/