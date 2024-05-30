import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ArtisanCategory from "../Pages/ArtisanCategory";
import Artisan from "../Pages/ArtisanDetail";
import Home from "../Pages/Home";
import Footer from "./Footer";
import NavBar from "./Nav";

function Router() {
  const Layout = () => {
    return (
      <>
        <NavBar></NavBar>
        <main className="content">
          <Outlet></Outlet>
        </main>
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
            <Route
              path="/Bâtiment"
              element={<ArtisanCategory category="Bâtiment" />}
            ></Route>
            <Route
              path="/Services"
              element={<ArtisanCategory category="Services" />}
            ></Route>
            <Route
              path="/Alimentation"
              element={<ArtisanCategory category="Alimentation" />}
            ></Route>
            <Route
              path="/Fabrication"
              element={<ArtisanCategory category="Fabrication" />}
            ></Route>
            <Route path="/Artisan/" element={<Artisan></Artisan>}>
              <Route path=":id" element={<Artisan></Artisan>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
