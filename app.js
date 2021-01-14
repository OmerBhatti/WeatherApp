var latitude;
var longitude;

var temp;
var weather;
var city;
var country;
var humidity;
var windSpeed;
var iconpath;

const getData = async ()=>{
    
    checkLocation();
    console.log(latitude,longitude);

    const fetching = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=31.582045&lon=74.329376&appid=66e5e7c714263e64353418c83c6a704a`);
    const data= await fetching.json();

    temp = Math.ceil(data.main.feels_like-273.15);
    weather = data.weather[0].main;
    city = data.name;
    country = data.sys.country;
    humidity = data.main.humidity;
    windSpeed = data.wind.speed+="m/s";
    iconpath= "icons/"+data.weather[0].icon+".png";

    document.getElementById('icon').src = iconpath;
    document.getElementById('weather').innerHTML = weather;
    document.getElementById('country').innerHTML = city+" , "+country;
    document.getElementById('temp').innerHTML += temp;
    document.getElementById('humid').innerHTML += humidity;
    document.getElementById('windSpeed').innerHTML += windSpeed;

    console.log(temp,weather,city,humidity,windSpeed,iconpath,data);
}

function checkLocation() {
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
    else
    {
        console.log("Geolocation is not supported by this browser");
    }
}

function setPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
} 

getData();