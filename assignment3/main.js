/*  find where events are happening on the screen
function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX}, ${event.pageY}),
    client: (${event.clientX}, ${event.screenY})`)
}

addEventListener('click', doSomething);
*/

/* see mouse events in console

const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

*/

/*  changing color of the element by double clicking
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
*/

function highlight(event){
    event.target.classList.toggle('highlight');
}

 

// mouse over and mouse out event listeners

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

// keyboard events

addEventListener('keydown',highlight); //whole document

//when the key is released in console
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

//pressing a character what character
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

//modifier keys
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

//pressed the C key while holding down the ctrl key?
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    });

    //shift key held down with mouse click?
    addEventListener('click', (event) => {
        if (event.shiftKey) {
            console.log('A Shifty Click!');
        }
    });

//touchend... stopped touching
/*
addEventListener('touchend', () => console.log('Touch stopped');
*/

// removing event listeners
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}


// stop default behavior
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

//bubbling is default - event propagation

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );


// capturing is not default - event propagation
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);