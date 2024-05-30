import React, { useContext } from "react";
import Card from "../Components/Card";
import { ArtisanContext } from "../Context/ArtisanContext";

function ArtisanCategory(props) {
  const { datas } = useContext(ArtisanContext);

  return (
    <>
      <section className="mt-5 mb-5 ">
        <div className="bande">
          <p>Voici la liste des artisans dans la catégory : </p>
          <h1 className="m-3">{props.category}</h1>
          <p>
            Pour prendre contact avec l'artisan avec lequel vous souhaitez
            travailler, veuillez cliquez sur sa carte pour y découvrir ses
            coordonnées.
          </p>
        </div>
      </section>

      <div className="card-list container ">
        <div className="row d-flex justify-content-center">
          {datas.map((artisan) => {
            if (props.category === artisan.category) {
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
    </>
  );
}

export default ArtisanCategory;
