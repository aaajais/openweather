import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat: any;
  tem:any;
  lon: any;
  weather: any;
  locationDeined:boolean =true;
  locationDeinedEnable:boolean =true;
  city:string=''
 hum:string=''
 pre:string=''
  sset:string=''
  srise:string=''

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    this.getLocation();
    //this.weatherService.getWeatherDataByCoords(35, 139).subscribe(console.log);
  }
    
  getLocation()
  {
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition(
        (success:any)=>
      {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>
          {
        this.weather=data;
      });
    })
  }
}
getCity(city:any){
  this.weatherService.getweatherDataByCityName(city).subscribe((data:any)=>{
    this.city=data.name

    this.tem=data.main.temp;
    this.tem=this.tem-273.15;
    
    this.hum=data.main.humidity
    this.pre=data.main.pressure
    // this.sset=data.sys.sunset
    // this.srise=data.sys.sunrise
   console.log("data",this.hum)
  });
}
}
