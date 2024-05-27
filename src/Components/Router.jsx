import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Alimentation from "../Pages/Alimentation";
import Artisan from "../Pages/Artisan";
import Bâtiment from "../Pages/Batiment";
import Fabrication from "../Pages/Fabrication";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Footer from "./Footer";
import NavBar from "./Nav";

function Router() {
  const Layout = () => {
    return (
      <>
        <NavBar></NavBar>
        <div className="content">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Bâtiment" element={<Bâtiment />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/Alimentation" element={<Alimentation />}></Route>
            <Route path="/Fabrication" element={<Fabrication />}></Route>
            <Route path="Artisan/:id" element={<Artisan></Artisan>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
