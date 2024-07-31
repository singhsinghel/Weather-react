import { useState,useEffect } from "react"
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import Alert from '@mui/material/Alert';
export default function SearchBox({updateInfo, handleClick}){
  let[seacrhText,setSearchText]=useState('');
  let[error,setError]=useState(false);

  const apiKey= import.meta.env.VITE_API_KEY;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${seacrhText}&appid=${apiKey}&units=metric`;
    let formSubmit= async (event)=>{
      try{
        event.preventDefault();
        setSearchText('');
        const result = await fetch(`${apiUrl}`);
       let jsonResponse= await result.json();
       let info={
       city:jsonResponse.name, 
       temp: jsonResponse.main.temp,
       tempMin: jsonResponse.main.temp_min,
       tempMax: jsonResponse.main.temp_max,
       humidity: jsonResponse.main.humidity,
       feelsLike:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description,
       image:jsonResponse.weather[0].icon
      }
      setError(false);
     updateInfo(info);
     }catch(err){
       (true);
      }
    }
return(
  <>
    <div  style={{ position: 'relative',
     display: 'inline-block' }}
     className="SearchBox">
        <form onSubmit={formSubmit}  action="">
        <TextField className="input"    
        onChange={(e)=>setSearchText(e.target.value)} 
        value={seacrhText} 
        placeholder="Type here" 
        id="outlined-basic" 
        label="Enter City" 
        variant="outlined"
        required />
        <span style={{
          position: 'absolute',
          left: '80%',
        top: '50%',
        transform: 'translateY(-50%)',
        }}>
       <IconButton 
        id="background"
        onClick={handleClick}
        type="submit" 
        variant='contained' 
        aria-label="search" 
        size="large">
        <SearchIcon className="Button"  fontSize="inherit" />
      </IconButton>
      </span>
        </form>
    </div>
        {error&&<h3><Alert severity="error">No such city found</Alert></h3>}       
       </>
)
}