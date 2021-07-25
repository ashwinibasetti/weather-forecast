//Complete the Weather API Backend part using openweathermap api
    
    const apikey = "407259c8fdda64718eb5a524a6cd9d2b";

    document.getElementsByClassName("search-box")[0].addEventListener("keyup", ()=>{
        
        var City = document.getElementsByClassName("city")[0];
        var Temperature = document.getElementsByClassName("temp")[0];
        var weatherdetails = document.getElementsByClassName("weather")[0];
        var highlow = document.getElementsByClassName("hi-low")[0];
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementsByClassName("search-box")[0].value}&units=metric&appid=${apikey}`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                City.innerHTML=`${data.name}, ${data.sys.country}`;
                Temperature.innerHTML=`${(data.main.temp).toFixed(0)}°c`;
                weatherdetails.innerHTML=data.weather[0].main;
                highlow.innerHTML=`${(data.main.temp_min).toFixed(0)}°c / ${(data.main.temp_max).toFixed(0)}°c`;
            });
    })  
    