import React, { Component } from "react";
import axios from "axios";
import "./weather.css";
import config from "../config.json";
import Search from "./search";

class Weather extends Component {
  state = { currentLocation: "", currentWeather: null, error:"" };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => this.initialSetUp(res),
        (error) => this.setState({error: error.message}),
        {
          enableHighAccuracy: true,
          timeout: 10000,
        }
      );
    }
  }

  initialSetUp = async (res) => {
    const { latitude: lat, longitude: lon } = res.coords;
    const url = config.apiEndPoint + `q=${lat},${lon}`;
    const { data } = await axios.get(url);
    this.setState({
      currentLocation: data.location.name,
      currentWeather: data.current,
    });
  };

  setLocation = (location) => {
    this.setState({ currentLocation: location });
  };

  setWeather = (weather) => {
    this.setState({ currentWeather: weather });
  };

  handleInput = (e) => {
    const val = e.currentTarget.value
    console.log(val);
  }

  render() {
    if (!this.state.currentWeather) {
      return <div className="weather-container"><Search handleInput={this.handleInput}/> {this.state.error? this.state.error:"loading..!!"}</div>;
    }
    const { currentLocation: location } = this.state;
    const {
      temp_c: temp,
      last_updated,
      condition: { icon, text: conditionText },
    } = this.state.currentWeather;
    return (
      <div className="weather-container">
        <Search handleInput={this.handleInput}/>
        <div className="location">{location}</div>
        {this.state.currentWeather && (
          <div className="weather">
            <div className="condition">
              <img src={icon.replace("64x64", "128x128")} alt={conditionText} />
            </div>
            <div className="temperature">
              <div className="temp-value">{temp}&#8451;</div>
              <div className="temp-condition">{conditionText}</div>
            </div>
          </div>
        )}
        <div className="feedback">Last updated on {last_updated}</div>
      </div>
    );
  }
}

export default Weather;
