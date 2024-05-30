import React from "react";
import Router from "./Components/Router";
import ArtisanContextProvider from "./Context/ArtisanContext";
import "./Css/style.css";

function App() {
  return (
    <div className="App">
      <ArtisanContextProvider>
        <Router></Router>
      </ArtisanContextProvider>
    </div>
  );
}

export default App;
