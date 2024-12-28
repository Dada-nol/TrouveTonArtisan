import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ArtisanCategory from "../pages/ArtisanCategory";
import ArtisanDetail from "../pages/ArtisanDetail";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Accessibilité from "../pages/PagesVide/Accessibilité";
import Contact from "../pages/PagesVide/Contact";
import DonnéesPerso from "../pages/PagesVide/DonnéesPerso";
import Marchés from "../pages/PagesVide/Marchés";
import MentionLegale from "../pages/PagesVide/MentionLegale";
import Presse from "../pages/PagesVide/Presse";
import Région from "../pages/PagesVide/Région";
import Footer from "./Footer";
import NavBar from "./Nav";

function Router() {
  const [filterText, setFilterText] = useState("");

  const Layout = () => {
    return (
      <>
        <NavBar
          filterText={filterText}
          onFilterTextChange={setFilterText}
        ></NavBar>
        <>
          <Outlet></Outlet>
        </>
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
            <Route
              path="/artisan/:id"
              element={<ArtisanDetail></ArtisanDetail>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
            <Route
              path="/Accessibilité"
              element={<Accessibilité></Accessibilité>}
            ></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route
              path="/Données-personnelles"
              element={<DonnéesPerso />}
            ></Route>
            <Route path="/Marchés" element={<Marchés />}></Route>
            <Route path="/Mentions-légales" element={<MentionLegale />}></Route>
            <Route path="/Presse" element={<Presse />}></Route>
            <Route path="/Région" element={<Région />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
