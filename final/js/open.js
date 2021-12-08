//grab button
const askbutton = document.querySelector('#ask');
// give images eventlisteners
askbutton.addEventListener('click', store, false);

function store() {
    const name = document.querySelector('#name').value;
    const bday = document.querySelector('#birthdate').value;
    console.log('birthday');
    // const bday = new Date(birthday).getTime() / 1000;
    const zip = document.querySelector('#zip').value;  
    
    if(name === '' || bday === '' || zip === '') {
        document.querySelector('#output').innerHTML = `<p>Please enter your name, birthdate, and zip</p><br>`;
        return;
    } else {
        localStorage.setItem('name', name);
        localStorage.setItem('birthdate', bday);
        localStorage.setItem('zip', zip);
        nextPage();
    }
}


function nextPage() {
    document.location.href = 'main.html';
}