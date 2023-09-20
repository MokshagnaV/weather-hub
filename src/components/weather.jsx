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
    unit: "temp_c",
    error: "",
  };

  componentDidMount() {
    if (navigator.geolocation) {
      console.log(navigator);
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
    const bgPic = data.results[parseInt(Math.random() * 10)];
    const credits = `Photo by <a href="${bgPic.user.links.html}">${bgPic.user.name}</a> on <a href="${bgPic.links.html}">Unsplash</a>`;
    document.querySelector(".credits").innerHTML = credits;
    const bg = bgPic.urls.regular;
    document.getElementById("root").style.backgroundImage = `url(${bg})`;
  }

  setWeather = async (location) => {
    const { data } = await apiCalls.getWeatherResults(location);
    this.setState({
      currentLocation: data.location.name,
      currentWeather: data.current,
      condition: data.current.condition,
    });
    this.setBackground(data.current.condition.text);
  };

  handleSearch = (searchData) => {
    this.setWeather(searchData);
  };

  handleConvention = (e) => {
    this.setState({ unit: e.currentTarget.value });
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
    const temp = this.state.currentWeather[this.state.unit];
    const { last_updated } = this.state.currentWeather;
    const { icon, text: conditionText } = this.state.condition;
    return (
      <div className="weather-container">
        <Search onSearch={this.handleSearch} onChoose={this.handleConvention} />
        <WeatherData
          location={location}
          temp={temp}
          convention={this.state.unit}
          last_updated={last_updated}
          icon={icon}
          conditionText={conditionText}
        />
      </div>
    );
  }
}

export default Weather;
