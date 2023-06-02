import React from "react";

const WeatherData = ({
  location,
  icon,
  conditionText,
  temp,
  convention,
  last_updated,
}) => {
  return (
    <React.Fragment>
      <div className="location">{location}</div>
      <div className="weather">
        <div className="condition">
          <img src={icon.replace("64x64", "128x128")} alt={conditionText} />
        </div>
        <div className="temperature">
          <div className="temp-value">
            {temp}
            {convention === "temp_c" ? "°C" : "°F"}
          </div>
          <div className="temp-condition">{conditionText}</div>
        </div>
      </div>
      <div className="feedback">Last updated on {last_updated}</div>
    </React.Fragment>
  );
};

export default WeatherData;
