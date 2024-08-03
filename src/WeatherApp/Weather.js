import { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";

export const WeatherChecker = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const currentDate = new Date();
  const Months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const month = Months[currentDate.getMonth()];
  const day = currentDate.getDate(); 
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const API_KEY = "fda321b8fa3f733895718161332fa9e6";

  const fetchWeatherData = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); 

  const inputHandler = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchWeatherData();
  }; 

  const getWearherIcons=(main)=>{ 

    switch(main){ 
      case "clouds" :
      return "./sun.png" ;
      case "rain" :
      return "./rain_with_cloud.webp" ; 
      case "thunder":
        return "./thunder.png"; 

      case "tornado" :
        return "./Tornado.png"
      default  :  
      return null

      
    }

  };

  return (
    <div className="weather_container">
      
      {weatherData && ( 
        <div className="weather_data"> 
            <h1 className="date" >{formattedDate}</h1>
          <h1>{weatherData.name}</h1>
          <img
            alt="weather logo"
            src={getWearherIcons(weatherData.weather.main)}
            height={150}
            width={150}
          ></img>
          <h2 className="weather_degree">{weatherData.main.temp}°C</h2>
          <h2 className="county_weather">{weatherData.weather[0].main}</h2>
        </div>
      )}
      <form className="formin" onSubmit={submitHandler}>
        <input className="inputenter"
          type="text"
          placeholder="Enter your city name"
          onChange={inputHandler}
        ></input>
        <button className="weather_button" type="submit">GET</button>
      </form>
    </div>
  );
};
