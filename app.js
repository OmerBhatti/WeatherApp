var latitude;
var longitude;
var address;

var temp;
var weather;
var city;
var country;
var humidity;
var windSpeed;
var iconpath;

getLocation();

const getWeatherData = async ()=>{    

    //fetching data through OpenWeatherMap API
    const fetching = await fetch(address);
    const data= await fetching.json();

    // placing data into variables from API
    temp = Math.ceil(data.main.feels_like-273.15);
    weather = data.weather[0].main;
    city = data.name;
    country = data.sys.country;
    humidity = data.main.humidity;
    windSpeed = data.wind.speed+="m/s";
    iconpath= "icons/"+data.weather[0].icon+".png";

    //setting Data in FrontEnd
    document.getElementById('icon').src = iconpath;
    document.getElementById('weather').innerHTML = weather;
    document.getElementById('country').innerHTML = city+" , "+country;
    document.getElementById('temp').innerHTML += temp;
    document.getElementById('humid').innerHTML += humidity;
    document.getElementById('windSpeed').innerHTML += windSpeed;
}

function getLocation() 
{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

function setPosition(position) 
{
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    address = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=66e5e7c714263e64353418c83c6a704a";
    console.log(address,latitude,longitude);
    getWeatherData();
} 