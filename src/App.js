import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/Nav";
import Alimentation from "./Components/Pages/Alimentation";
import Bâtiment from "./Components/Pages/Batiment";
import Fabrication from "./Components/Pages/Fabrication";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Bâtiment" element={<Bâtiment />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Alimentation" element={<Alimentation />}></Route>
          <Route path="/Fabrication" element={<Fabrication />}></Route>
        </Routes>
      </header>
      <main></main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
