import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
export default function SearchBox({updateinfo}){
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="5ee9c59b13f6c14ba5d2c6aa0e1fa0f3";
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    let handlechange=(event)=>{
        setcity(event.target.value);
    }
    
    let getweatherinfo=async()=>{
       try{
        seterror(false);
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await res.json();
        let result={
            city:jsonresponse.name,
            temp:jsonresponse.main.temp,
            tempmin:jsonresponse.main.temp_min,
            tempmax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelslike:jsonresponse.main.feels_like,
             description:jsonresponse.weather[0].description
        }
        console.log(result);
        return result;
       }catch(err){
          throw err;
       }
    }

    let handlesubmit=async (event)=>{
            
        try{
            event.preventDefault();
            setcity("");
            let ans=await getweatherinfo();
            updateinfo(ans);
        }catch(err){
            seterror(true);
        }        
    }
       return(
        <div className='searchbox'>
            <h3>Search the weather in your city...</h3>
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" onChange={handlechange}value={city} required/>
                <br></br><br></br>
                <Button className="buttoo" variant="contained" color="success" type='submit'>Search</Button>
                <br></br><br></br>
                {error && <p className='para'>No such City exists in our API</p>}
            </form>
        </div>
       ) 
}