import config from "../config.json";
import axios from "axios";

function getLocationSearchResults(input) {
  const url =
    config.apiEndPointSearch +
    `${process.env.REACT_APP_WEATHER_API_KEY}&q=${input}`;
  return axios.get(url);
}

function getWeatherResults(location) {
  const url =
    config.apiEndPoint +
    `${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}`;
  return axios.get(url);
}

function getBackgroundResults(conditionText) {
  const url =
    config.bgPicAPI +
    `${process.env.REACT_APP_PHOTOS_API_KEY}&page=1&query=${conditionText}&orientation=landscape`;
  return axios.get(url);
}

const exportingFuncs = {
  getLocationSearchResults,
  getWeatherResults,
  getBackgroundResults,
};
export default exportingFuncs;
