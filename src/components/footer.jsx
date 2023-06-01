const Footer = (props) => {
  return (
    <div className="footer">
      <span className="credits">
        Background Image by{" "}
        <a href="https://www.freepik.com/free-vector/flat-design-monsoon-season-clouds-illustration_26922266.htm#query=weather%20background&position=14&from_view=keyword&track=ais">
          Freepik
        </a>
      </span>
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
};

export default Footer;
