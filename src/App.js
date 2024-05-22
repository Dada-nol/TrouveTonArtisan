import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Alimentation from "./Components/Pages/Alimentation";
import Bâtiment from "./Components/Pages/Bâtiment";
import Fabrication from "./Components/Pages/Fabrication";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Bâtiment" element={<Bâtiment />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Alimentation" element={<Alimentation />}></Route>
          <Route path="/Fabrication" element={<Fabrication />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
