import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Test1Service {

  private API_KEY: string = 'e64023dd691bad6f3a174dac4f3d8551';
  public weather: any[] = [];
  public error:string = '';

  constructor(private http: HttpClient) { }

  getWeather(latitude: string, longitude: string) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.API_KEY}`;
    console.log(url);
    
    this.http.get(url)
    .subscribe(
        (response: any) => {
          console.log(response);
          
          this.weather = response.list.slice(0,6);
        },
        (error: any) => {
          this.error = error.message;
        }
      );
  }
}
