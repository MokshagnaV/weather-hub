import React from 'react';
import "./App.css";
import Weather from "./components/weather";
function App() {
  return (
    <React.Fragment>
      <Weather />
      <div className="footer">
        Background Image by{" "}
        <a href="https://www.freepik.com/free-vector/flat-design-monsoon-season-clouds-illustration_26922266.htm#query=weather%20background&position=14&from_view=keyword&track=ais">
          Freepik
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
