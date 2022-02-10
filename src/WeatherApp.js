import React, {useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CurrentTime from './CurrentTime';


const WeatherApp = () => {

    const [info, setInfo] =useState([]);
    const [city, setCity] = useState('');
    
    useEffect(() => {
       handleFetch();

    }, []);

    const handleSubmit =(e) =>{
  e.preventDefault();

}
    
 const handleFetch =() =>{
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bffaa9d7312ea46c20baa515b4f0d812&units=metric`)
   .then((response) => response.json())
   .then((data) => setInfo({
       name: data.name,
       sys:{
        country:data.sys.country,
       },
       temprature :{
          temp : data.main.temp ,
          max : data.main.temp_max ,
          min : data.main.temp_min ,
       },
       condition:{
         description: data.weather[0].description,
         main: data.weather[0].main,
         icon: data.weather[0].icon,
       },
       }))
       
      }
    console.log(info);
  return <>
  <div className='banner-area' >
  <div className = 'time-area'>
  <CurrentTime className='time'/>
  </div>
  <div className='content-area'>
   <div className ='content'>
     <form  onSubmit={handleSubmit}>
       <div className ='search-field'>
         <input className ='input' name='text' type= 'text' value={city} required onChange={(e) => setCity(e.target.value)} placeholder="City..."></input>
         <SearchIcon className = 'search-icon' onClick={handleFetch}></SearchIcon>
       </div>
      <br></br>
      <h1>{info.name} {info.sys?.country}</h1>
       <h1>{info.temprature?.temp}</h1>
      <img className='weather-icon' src={`http://openweathermap.org/img/w/${info.condition?.icon}.png`} alt=''/>
      <p>{info.condition?.description}</p>
      </form> 
   </div>
   <div className ='flex-container'>
        <p className='items'>{info.temprature?.max}</p>
        <p className='items'>{info.temprature?.min }</p> 
    </div>
  </div>
  </div>
  </>
};

export default WeatherApp;


