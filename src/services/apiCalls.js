import config from "../config.json";
import axios from "axios";

const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
const photosAPIKey = process.env.REACT_APP_PHOTOS_API_KEY;

function getLocationSearchResults(input) {
  const url = config.apiEndPointSearch + `${weatherAPIKey}&q=${input}`;
  return axios.get(url);
}

function getWeatherResults(location) {
  const url = config.apiEndPoint + `${weatherAPIKey}&q=${location}`;
  return axios.get(url);
}

function getBackgroundResults(conditionText) {
  const url =
    config.bgPicAPI +
    `${photosAPIKey}&page=1&query=${conditionText}&orientation=landscape`;
  return axios.get(url);
}

const exportingFuncs = {
  getLocationSearchResults,
  getWeatherResults,
  getBackgroundResults,
};
export default exportingFuncs;
