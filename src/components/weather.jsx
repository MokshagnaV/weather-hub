import React, { Component } from "react";
import axios from "axios";
import "./weather.css";
import config from "../config.json";
import Search from "./search";

class Weather extends Component {
  state = { currentLocation: "", currentWeather: null, error: "" };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          const { latitude: lat, longitude: lon } = res.coords;
          this.setWeather(`${lat},${lon}`);
        },
        (error) => this.setState({ error: error.message }),
        {
          enableHighAccuracy: true,
          timeout: 10000,
        }
      );
    }
  }

  setWeather = async (location) => {
    const url = config.apiEndPoint + `q=${location}`;
    const { data } = await axios.get(url);
    this.setState({
      currentLocation: data.location.name,
      currentWeather: data.current,
    });
  };

  handleSearch = (searchData) => {
    this.setWeather(searchData);
  };

  render() {
    if (!this.state.currentWeather) {
      return (
        <div className="weather-container">
          <Search onSearch={this.handleSearch} />{" "}
          {this.state.error ? this.state.error : "loading..!!"}
        </div>
      );
    }
    const { currentLocation: location } = this.state;
    const {
      temp_c: temp,
      last_updated,
      condition: { icon, text: conditionText },
    } = this.state.currentWeather;
    return (
      <div className="weather-container">
        <Search onSearch={this.handleSearch} />
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
