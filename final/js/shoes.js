const zip = localStorage.getItem('zip');

const requestURL = `http://api.weatherapi.com/v1/forecast.json?key=dea13e10e1c24754884233043210711&q=${zip}&days=3&aqi=no&alerts=no`;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const forecast = jsonObject['forecast'];
        console.log(forecast.forecastday[0].day.condition.text.includes('snow'));

        const name = localStorage.getItem('name');

        if ((forecast.forecastday[0].day.avgtemp_f < 40) || (forecast.forecastday[0].day.condition.text.includes('Rain')) ||
            (forecast.forecastday[0].day.condition.text.includes('rain')) ||
            (forecast.forecastday[0].day.condition.text.includes('Snow')) ||
            (forecast.forecastday[0].day.condition.text.includes('snow'))) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let img = document.createElement('img');
            let p2 = document.createElement('p2');

            img.setAttribute('class', 'shoes');
            div.setAttribute('class', 'uresult');
            p.textContent = `Grab your boots ${name} `;
            img.src = ('images/icons8-boot-shoes-64.png');
            p2.textContent = `Let's keep those feet warm and dry !`;
            div.append(p);
            div.append(img);
            div.append(p2);

            document.querySelector('.output').append(div);

        } else if ((forecast.forecastday[0].day.avgtemp_f > 40) && (!forecast.forecastday[0].day.condition.text.includes('Rain')) &&
        (!forecast.forecastday[0].day.condition.text.includes('rain')) &&
        (!forecast.forecastday[0].day.condition.text.includes('Snow')) &&
        (!forecast.forecastday[0].day.condition.text.includes('snow'))) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            let img = document.createElement('img');
            let p2 = document.createElement('p2');

            img.setAttribute('class', 'shoes');
            div.setAttribute('class', 'uresult');
            p.textContent = `Grab your tennis shoes ${name} `;
            img.src = ('images/icons8-soccer-boots-64.png');
            p2.textContent = `Nice and dry out !`;
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
            div.setAttribute('class', 'uresult');
            p.textContent = `Grab some sandals ${name}, `;
            img.src = ('images/icons8-flip-flop-64.png');
            p2.textContent = `what a nice day`;
            div.append(p);
            div.append(img);
            div.append(p2);

            document.querySelector('.output').append(div);
        }
    });