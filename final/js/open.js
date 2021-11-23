//grab button
const askbutton = document.querySelector('#ask');
// give images eventlisteners
askbutton.addEventListener('click', store, false);


function store() {
    const name = document.querySelector('#name').value;
    const bday = document.querySelector('#birthdate').value;
    
    
    if(name === '' || bday === '') {
        document.querySelector('#output').innerHTML = `<p>Please enter your name and birthdate</p>`;
        return;
    } else {
        localStorage.setItem('name', name);
        localStorage.setItem('birthdate', bday);
        nextPage();
    }
}


function nextPage() {
    document.location.href = 'main.html';
}