import React, { Component } from "react";
import "./weather.css";
import Search from "./search";
import WeatherData from "./weatherData";
import apiCalls from "../services/apiCalls";

class Weather extends Component {
  state = {
    currentLocation: "",
    currentWeather: null,
    condition: "",
    error: "",
  };

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

  async setBackground(conditionText) {
    const { data } = await apiCalls.getBackgroundResults(conditionText);
    const bg = data.results[parseInt(Math.random() * 10)].urls.regular;
    document.getElementById("root").style.backgroundImage = `url(${bg})`;
  }

  setWeather = async (location) => {
    const { data } = await apiCalls.getWeatherResults(location);
    this.setState({
      currentLocation: data.location.name,
      currentWeather: data.current,
      condition: data.current.condition,
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
          <span className="pre-load ">
            {this.state.error ? this.state.error : "loading..!!"}
          </span>
        </div>
      );
    }
    const { currentLocation: location } = this.state;
    const { temp_c: temp, last_updated } = this.state.currentWeather;
    const { icon, text: conditionText } = this.state.condition;
    this.setBackground(conditionText);
    return (
      <div className="weather-container">
        <Search onSearch={this.handleSearch} />
        <WeatherData
          location={location}
          temp={temp}
          last_updated={last_updated}
          icon={icon}
          conditionText={conditionText}
        />
      </div>
    );
  }
}

export default Weather;
