const swPeople = 'people';
const swPlanets = 'planets';
let i = 1;
const swApi = `https://swapi.dev/api/${swPeople}`;
fetch(swApi)
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then(response => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const residents = jsObject['results'];
    residents.forEach(resident => {
      let li = document.createElement('li')
      li.innerHTML = `${resident.name}`;
      document.querySelector('.outputResidents').append(li);
    })
  })
const nextButton = document.querySelector('.load-next');
nextButton.addEventListener('click', next, false);

function next() {
  document.querySelector('.outputResidents').innerHTML = '';
  let pageNum = i++;
  const nextApi = `https://swapi.dev/api/${swPeople}/?page=${pageNum}`;
  fetch(nextApi)
    .then((response) => response.json())
    .then((jsObject) => {
      const next = jsObject.next;
      fetch(next)
        .then((response) => response.json())
        .then((nextObject) => {
          console.log(nextObject);
          const residents = nextObject['results'];
          residents.forEach(resident => {
            let li = document.createElement('li')
            li.innerHTML = `${resident.name}`;
            document.querySelector('.outputResidents').append(li);
          })
        })
    })
}
const prevButton = document.querySelector('.load-prev');
prevButton.addEventListener('click', prev, false);

function prev() {
  document.querySelector('.outputResidents').innerHTML = '';
  i--
  let pageNum = i;
  const prevApi = `https://swapi.dev/api/${swPeople}/?page=${pageNum}`;
  fetch(prevApi)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const residents = jsObject['results'];
      residents.forEach(resident => {
        let li = document.createElement('li')
        li.innerHTML = `${resident.name}`;
        document.querySelector('.outputResidents').append(li);
      })
    })
}

const findPage = document.querySelector('.find-page');
findPage.addEventListener('click', search, false);

function search() {
  document.querySelector('.outputResidents').innerHTML = '';
  let pageChoice = document.querySelector('#pageinput').value;

  const pageApi = `https://swapi.dev/api/${swPeople}/?page=${pageChoice}`;
  fetch(pageApi)
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then(response => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const residents = jsObject['results'];
    
    residents.forEach(resident => {
      let li = document.createElement('li')
      li.innerHTML = `${resident.name}`;
      document.querySelector('.outputResidents').append(li);
    })
  })
  }

  