import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 


  constructor(private http:HttpClient) { }

  getWeatherDataByCoords(lat: string | number | boolean, lon: string | number | boolean){
  //  let params = new HttpParams()
  //  .set('lat' , lat)
  //  .set('lon' , lon)
  //  .set('units' , 'imperial')

   let url=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=632d6507d36a36b4c53be7f7488f6d40`
   

   return this.http.get(url);
  }
  getweatherDataByCityName(city:string){
    // let params = new HttpParams()
    // .set('Q',city)
    // .set('units','imperial')
    // .set('appid',this.apikey)
    let url=` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=632d6507d36a36b4c53be7f7488f6d40`

    return this.http.get(url);
  }
}
