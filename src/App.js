import React from "react";
import "./App.css";
import Weather from "./components/weather";
import Footer from "./components/footer";
function App() {
  return (
    <React.Fragment>
      <Weather />
      <Footer />
    </React.Fragment>
  );
}

export default App;
