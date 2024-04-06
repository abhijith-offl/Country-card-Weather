async function newOne() {
  let result = await fetch("https://restcountries.com/v3.1/all")
  let result1 = await result.json()
  sample(result1)
}
newOne()

async function getData() {
  var res = await fetch("https://restcountries.com/v3.1/all")
  var res1 = await res.json()
  console.log(res1)
  for (var i = 0; i < res1.length; i++) {
    var latlon = res1[i].latlng
    await weather(...latlon)
  }
}

async function weather(lat, lon) {
  var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=070cdf0da1bcb6acf0c1330aaa7d24af`)
  var data1 = await data.json()
}

getData()

async function getWeather(lat, lon) {
  var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=070cdf0da1bcb6acf0c1330aaa7d24af`);
  var weatherData = await data.json();
  alert(`Weather Data of ${weatherData.name} :
  Main: ${weatherData.weather[0].description}
  Description: ${weatherData.weather[0].main}`);
}


var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function sample(data1) {
  for (i = 0; i < data1.length; i++) {
    var col = document.createElement("div")
    col.className = "col-md-4"
    col.innerHTML = `<div class="card border-light mb-3" style="max-width: 18rem;">
  <div class="card-header text-center" id="title" style="text-align:center;background-color:black;color:white">${data1[i].name.common}</div>
  <div class="card-body">
    <img src="${data1[i].flags.png}">
    <div class="content">
    <p class="card-text">Capital:${data1[i].capital}</p>
    <p class="card-text">Region:${data1[i].region}</p>
    <p class="card-text">Population:${data1[i].population}</p>
    <p class="card-text">Latitude:${data1[i].latlng[0]}</p>
    <p class="card-text">Longitude:${data1[i].latlng[1]}</p>
    <a class="nav-link active" id="weather" href="#" onclick="getWeather(${data1[i].latlng[0]}, ${data1[i].latlng[1]})">Click for Weather</a>
    </div>
  </div>
</div>`

    row.append(col)
    container.append(row)
    document.body.append(container)
  }
}

