const home = document.querySelector('.home');
    home.addEventListener("click", () => {
      document.location.href = 'https://eharn.github.io/lofty/final/main.html';
    })

const zip = localStorage.getItem('zip');

const requestURL = `https://api.weatherapi.com/v1/forecast.json?key=dea13e10e1c24754884233043210711&q=${zip}&days=3&aqi=no&alerts=no`;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const forecast = jsonObject['forecast']; 
    console.log(forecast);

    const name = localStorage.getItem('name');

if(forecast.forecastday[0].day.avgtemp_f < 35){
      let div = document.createElement('div');
      let p = document.createElement('p');
      let img = document.createElement('img');
      let p2 = document.createElement('p2');
     
      img.setAttribute('class', 'coat2');
      div.setAttribute ('class', 'uresult');
      p.textContent = `Grab a Big Coat ${name} `;
      img.src = ('images/icons8-coat-64.png');
      p2.textContent = 'ZaZaZa it is Cold!';
      div.append(p);
      div.append(img);
      div.append(p2);

      document.querySelector('.output').append(div);
} else if (forecast.forecastday[0].day.avgtemp_f > 35 && forecast.forecastday[0].day.avgtemp_f < 40) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let p2 = document.createElement('p2');
   
    img.setAttribute('class', 'coat2');
    div.setAttribute ('class', 'uresult');
    p.textContent = `Grab a Coat ${name}, `;
    img.src = ('images/icons8-man-64.png');
    p2.textContent = 'ZaZaZa it is Chilly!';
    div.append(p);
    div.append(img);
    div.append(p2);

    document.querySelector('.output').append(div);
} else if (forecast.forecastday[0].day.avgtemp_f > 45 && forecast.forecastday[0].day.avgtemp_f < 60) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let p2 = document.createElement('p2');
   
    img.setAttribute('class', 'coat2');
    div.setAttribute ('class', 'uresult');
    p.textContent = `Grab a Jacket ${name}, `;
    img.src = ('images/icons8-jacket-64.png');
    p2.textContent = 'Not bad, but cold!';
    div.append(p);
    div.append(img);
    div.append(p2);

    document.querySelector('.output').append(div);
} else if (forecast.forecastday[0].day.avgtemp_f > 60 && forecast.forecastday[0].day.avgtemp_f < 75) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let p2 = document.createElement('p2');
   
    img.setAttribute('class', 'coat2');
    div.setAttribute ('class', 'uresult');
    p.textContent = `Grab a Sweater ${name}, `;
    img.src = ('images/icons8-sweater-64.png');
    p2.textContent = 'You might need it!';
    div.append(p);
    div.append(img);
    div.append(p2);

    document.querySelector('.output').append(div);
} else {
let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let p2 = document.createElement('p2');
   
    img.setAttribute('class', 'coat2');
    div.setAttribute ('class', 'uresult');
    p.textContent = `Who needs one ${name}, `;
    img.src = ('images/icons8-sun-64.png');
    p2.textContent = 'What a nice day!';
    div.append(p);
    div.append(img);
    div.append(p2);

    document.querySelector('.output').append(div);

}

});
