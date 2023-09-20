import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <React.Fragment>
      <main className="container flex flex-col justify-center items-center min-h-screen">
        <Navbar />
        <Home />
      </main>
    </React.Fragment>
  );
}

export default App;
