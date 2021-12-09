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
    const current = jsonObject['current']; 
    const forecast = jsonObject['forecast']; 
    const location = jsonObject['location']; 
    console.log(current);
    console.log(forecast);
    console.log(location);

    const name = localStorage.getItem('name');

  if(!current.condition.text.includes("Rain") || current.condition.text.includes("rain")) {
   
      let div = document.createElement('div');
      let p = document.createElement('p');
      let img = document.createElement('img');
      let p2 = document.createElement('p2');
     
      img.setAttribute('id', 'umbrella2');
      div.setAttribute ('class', 'uresult');
      p.textContent = `Sorry ${name}, `;
      img.src = 'images/icons8-umbrella-64 (1).png';
      if(forecast.forecastday[0].day.daily_chance_of_rain >= 50){
        p2.textContent = 'Maybe later today?!';
      }else {
        p2.textContent = 'An Umbrella is not needed today';
      }
     

      div.append(p);
      div.append(img);
      div.append(p2);

      document.querySelector('.output').append(div);
   
    
  } else {
    let div = document.createElement('div');
      let p = document.createElement('p');
      let img = document.createElement('img');
      let p2 = document.createElement('p2');

      img.setAttribute('id', 'umbrella2');
      div.setAttribute ('class', 'uresult');
      p.textContent = `Hooray ${name}, `;
      img.src = 'images/icons8-umbrella-64.png';
      p2.textContent = 'Go Grab your umbrella';

      div.append(p);
      div.append(img);
      div.append(p2);

      document.querySelector('.output').append(div);
    
  }
});
