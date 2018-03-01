import React, { Component } from 'react';
import './App.css';

import {getWeather} from "./services/weather";
import DailyWeather from "./DailyWeather";



class App extends Component {
   
  constructor(){
    super();
    this.state = {
      lat: 0,
      lon: 0,
      dailyWeather: []

    }

  this.Submit = this.Submit.bind(this);
  this.latChange = this.latChange.bind(this);
  this.lonChange = this.lonChange.bind(this);
 
  };

  latChange(e){
    this.setState({
      lat: +e.target.value
    });
  }
  lonChange(e){
    this.setState({
      lon: +e.target.value 
    });
  }
  geo(e){
   if (navigator.geolocation){
     navigator.geolocation.getCurrentPosition('position');
   };
  }
 

  Submit(e){
    e.preventDefault();
    getWeather(this.state.lat, this.state.lon)
    .then(response => {
      const dailyWeather = response.data.daily.data;
      this.setState({
        dailyWeather: dailyWeather
      });
      console.log(dailyWeather);
    })
  };

  render() {
    const dailyWeather = this.state.dailyWeather;
    const dailyWeatherGrid = dailyWeather.map((dailyWeather, index) => <DailyWeather key={index}
      time = {dailyWeather.time}
      summary = {dailyWeather.summary}
      temperatureHigh = {dailyWeather.temperatureHigh}
      temperatureLow = {dailyWeather.temperatureLow} />
    )

    return (
      <div>
        <h1>
          Welcome to my weather site!  
        </h1>
        <h2>
          Enter your location!
        </h2>

          <form onSubmit = {e => this.Submit(e)}>
          <label className = "lon" > Longitude 
            <input className = "lon" type="number" 
            min = "-180"
            max = "180"
            onChange = {(e) => this.lonChange(e)}
            value = {this.state.lon} 
            required/>
            </label>
          <label className = "lat" > Latitude 
            <input className = "lat" type="number" 
            min = "-90"
            max = "90"
            onChange = {(e) => this.latChange(e)}
            value = {this.state.lat}
            required/>
            </label>
          </form>
          <button onClick = {this.Submit} >Get weather!</button>
          <button onClick = {this.geo}> Use Geo </button>
          {dailyWeatherGrid}
      </div>
    );
  }
}
export default App;
