import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
export default function InfoBox({info}){
    let imgurl="https://images.unsplash.com/photo-1687533343315-f7b97f422a8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJhcHB8ZW58MHx8MHx8fDA%3D"
    const hoturl="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
    const coldurl="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rainurl="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div className="boxy">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rainurl:info.temp>28?hoturl:coldurl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>28?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component='span'>
          <div>Temp:{info.temp}&deg;C</div>
          <div>Max Temp:{info.tempmax}&deg;C</div>
          <div>Min Temp:{info.tempmin}&deg;C</div>
          <div>Humidity:{info.humidity}</div>
          <div>The weather is {info.description} and feels like {info.feelslike}&deg;C...</div>
    
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
}