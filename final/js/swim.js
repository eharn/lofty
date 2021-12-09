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

if(forecast.forecastday[0].day.avgtemp_f < 70){
      let div = document.createElement('div');
      let p = document.createElement('p');
      let img = document.createElement('img');
      let p2 = document.createElement('p2');
     
      img.setAttribute('class', 'swim');
      div.setAttribute ('class', 'uresult');
      p.textContent = `Bummer ${name}`;
      img.src = ('images/icons8-fish-64.png');
      p2.textContent = `It's too cold to swim`;
      div.append(p);
      div.append(img);
      div.append(p2);

      document.querySelector('.output').append(div);
}  else {
let div = document.createElement('div');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let p2 = document.createElement('p2');
   
    img.setAttribute('class', 'swim');
    div.setAttribute ('class', 'uresult');
    p.textContent = `Hooray ${name}, `;
    img.src = ('images/icons8-swim-64.png');
    p2.textContent = `it's a great day for a swim`;
    div.append(p);
    div.append(img);
    div.append(p2);

    document.querySelector('.output').append(div);

}

});
