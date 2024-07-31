import {  useState } from "react"
import Info from "./Info"
import SearchBox from './SearchBox'
import './WeatherApp.css'
export default function WeatherApp(){
    const [isInfoBoxVisible, setInfoBoxVisible] = useState(false);
    const [isInfoBoxToggled, setInfoBoxToggled] = useState(false);
    const[weatherInfo,setWeatherInfo]=useState({
        city:'',
        temp:'',
        feelslike:24.4,
        tempmin:25.09,
        tempmax:29.0,
        humidity:47,
        weather:'haze'
    });
    const handleSearchClick = () => {
        setInfoBoxVisible(()=>{
            return true
        });
    };
    const handleToogle=()=>{
        handleSearchClick();
        setInfoBoxToggled((prevState)=>{
         return !prevState;
       });
       if (isInfoBoxToggled) {
        const timer = setTimeout(() => {
          setInfoBoxToggled((prevState)=>{
              return !prevState;
             });
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
    let updateInfo =(info)=>{
        setWeatherInfo(info);
    }
    return(
        <>
        <div className="Containerinfo">
   <SearchBox handleClick={handleToogle} updateInfo={updateInfo} />
   <br /> <br />
   </div>
   <div className="Contaierdisplay">
         <Info isToggled={isInfoBoxToggled}  isVisible={isInfoBoxVisible} info={weatherInfo} />
        </div>
        </>
    )
}