import React from "react";
import Router from "./Components/Router";
import ArtisanContext from "./Context/Context";

function App() {
  return (
    <div className="App">
      <ArtisanContext>
        <Router></Router>
      </ArtisanContext>
    </div>
  );
}

export default App;
