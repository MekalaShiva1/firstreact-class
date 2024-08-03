import { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";

export const  WeatherChecker = () => {   
    const [city,setCity]=useState("");
    const [weatherData,setWeatherData]=useState(null)

    const currentDate =new Date();
    const Months = [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "july",
        "aug",
        "sep",
        "oct",
        "Nov",
        "Dec",
    ]; 

    const months = Months[currentDate.getMonth()]; 
    const day = currentDate.getDay();
    const year = currentDate.getFullYear(); 
    const formattedDate = `${months} ${day},${year}` 

    const API_KEY ="fda321b8fa3f733895718161332fa9e6"; 

    const fatchweatherdata =async()=>{
        try{ 
            const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`) 

            const data=await responce.json();
            console.log(data); 
            setWeatherData(data)
            

        }  
        catch (error){

        }
    } 

    useEffect(()=>{ 
        fatchweatherdata(); 
        console.log(fatchweatherdata);
        

    },[])  

    const inputHandler=(event)=>{
        console.log(event.target.value);
        
    }


  return (
    <div className=" weather_container">
      <h1>{ formattedDate}</h1>

      <div className="weather_data">
        <h1>Hyderabad</h1>
        <img  alt="weatherlogo" src="./sun.png" height={150} width={150}></img> 
        <h2 className="weather_degree">34.5</h2> 
        <h2 className="county_weather">sunny weather</h2> 
        <form>
            <input type="text" placeholder="Enter your city name" onChange={inputHandler} ></input> 
            <button>GET</button>
        </form>
        
      </div>
    </div>
  );
};
