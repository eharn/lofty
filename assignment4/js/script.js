//this is equivalent to using <autofocus> control in HTML
//document.forms.hero.heroName.focus();

const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

//document.forms.hero.powers[0].checked = true;  // checks first checkbox initially

//form.type[2].checked = true;  // checks radio button initally

//form.origin.value = 'Born as Kal-El on the planet Krypton...';  //change initial value of textarea


function makeHero(event) {
    const hero = {}; // create an empty object

    
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}
    hero.origin = form.origin.value;  // assigns the text from textarea to hero object

    hero.city = form.city.value;  // assigns the selected option of the drop down list to hero object

    hero.age = form.age.value; // assigns property to hero object

    hero.category = form.category.value; // assigns property to hero object

    event.preventDefault(); // prevent the form from being submitted


    

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;  //create name property with password
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}


form.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

