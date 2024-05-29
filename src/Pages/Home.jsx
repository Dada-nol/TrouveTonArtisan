import React, { useContext } from "react";
import Card from "../Components/Card";
import { ArtisanContext } from "../Context/ArtisanContext";
import "../Css/style.css";

const Home = () => {
  const { datas } = useContext(ArtisanContext);

  return (
    <>
      <section className="container shadow p-3 mt-5 mb-5 bg-body rounded">
        <div className="step">
          <h1 className="fw-bold mb-5">Comment trouver mon artisan ?</h1>
          <p>L'explication étape par étape du fonctionnement du site : </p>

          <ul>
            <li>
              <h3 className="fw-bold">Etape 1</h3>
              <p>Choisir la catégorie d'artisanat dans le menu.</p>
            </li>
            <li>
              <h3 className="fw-bold">Etape 2</h3>
              <p>Choisir un artisan</p>
            </li>
            <li>
              <h3 className="fw-bold">Etape 3</h3>
              <p>Le contacter via le formulaire de contact</p>
            </li>
            <li>
              <h3 className="fw-bold">Etape 4</h3>
              <p>Une réponse sera apporté sous 24h</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="container shadow p-3 mt-3 mb-3 bg-body rounded">
        <div className="row">
          <h2 className="fw-bold">Les employés du mois</h2>
          <div className="row d-flex justify-content-center">
            {datas.map((artisan, i) => {
              if (datas[i].top === true) {
                return (
                  <Card
                    key={artisan.id}
                    name={artisan.name}
                    note={artisan.note}
                    location={artisan.location}
                    specialty={artisan.specialty}
                  ></Card>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
