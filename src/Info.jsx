import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import { Urls } from './helper';
import './Info.css';
export default function Info({info, isVisible,isToggled}){
    let icon=info.image;
    let url=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    return(
        <div className={`info-box ${isVisible ? 'visible' : 'hidden'} ${isToggled? 'toggled':'nottoggled'}`}>
         <Card className='card' sx={{ maxWidth: 445 }}>
            <CardMedia
              sx={{ height: 140, maxWidth:445 }}
             image= {
             info.humidity>50?
             Urls.rain:
             (info.temp>30?
                Urls.hot:
                (30>info.temp>15?Urls.normal:(info.temp>15?Urls.cold:Urls.snow)))}
           />
            <CardContent>
               <Box  sx={{ display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
               <Typography gutterBottom variant="h5" component="div">
        {info.temp}  &deg;C
        </Typography>
        <CardMedia
        sx={{ height: 40,width:80 }}
        image= {url}
      />
      </Box>
        <Box  sx={{ display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.weather}
        </Typography>
        </Box>
        <hr />
        <Box  sx={{ display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
        <Typography variant="body2" color="text.secondary">
         Max- {info.tempMax} &deg;C
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Min- {info.tempMin} &deg;C
        </Typography>
        </Box>
         <Box  sx={{ display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
        <Typography variant="body2" color="text.secondary">
          Feelslike  {info.feelsLike}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Humidity- {info.humidity}
        </Typography>
        </Box>
      </CardContent>
    </Card>
        </div>
    )
}