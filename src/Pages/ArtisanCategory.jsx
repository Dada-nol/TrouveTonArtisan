import React, { useContext } from "react";
import Card from "../Components/Card";
import { ArtisanContext } from "../Context/ArtisanContext";

function ArtisanCategory(props) {
  const { datas } = useContext(ArtisanContext);

  return (
    <>
      <section className="text-center">
        <div className="bande">
          <h1 className="m-3">{props.category}</h1>
        </div>
      </section>

      <section className="card-list container text-center">
        <h2>
          Voici la liste des artisans dans la catégory "{props.category}" :{" "}
        </h2>
        <div className="row d-flex justify-content-center">
          {datas.map((artisan) => {
            if (props.category === artisan.category) {
              return (
                <Card
                  key={artisan.id}
                  id={artisan.id}
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
      </section>
    </>
  );
}

export default ArtisanCategory;
