import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ArtisanCategory from "../Pages/ArtisanCategory";
import ArtisanDetail from "../Pages/ArtisanDetail";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home";
import Accessibilité from "../Pages/PagesVide/Accessibilité";
import Contact from "../Pages/PagesVide/Contact";
import DonnéesPerso from "../Pages/PagesVide/DonnéesPerso";
import Marchés from "../Pages/PagesVide/Marchés";
import MentionLegale from "../Pages/PagesVide/MentionLegale";
import Presse from "../Pages/PagesVide/Presse";
import Région from "../Pages/PagesVide/Région";
import Footer from "./Footer";

function Router() {
  const Layout = () => {
    return (
      <>
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
