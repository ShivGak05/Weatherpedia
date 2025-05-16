import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import "./WeatherApp.css";
export default function WeatherApp(){
    let [weatherinfo,setweatherinfo]=useState({
        city:"",
        feelslike:"",
        temp:"",
        tempmin:"",
        tempmax:"",
        humidity:"",
        weather:""
    })
    let updateinfo=(result)=>{
        setweatherinfo(result);
    }
    return(
        <div className="weatherapp">
            <h2>Weatherpedia-By Shivangi Gakhar</h2>
            <SearchBox updateinfo={updateinfo} />
             <InfoBox info={weatherinfo}/>
        </div>
    )
}