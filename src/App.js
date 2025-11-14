import React from "react";
import Router from "./components/Router";
import ArtisanContextProvider from "./context/ArtisanContext";
import "./css/style.css";

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
