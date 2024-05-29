import React, { useContext } from "react";
import Card from "../Components/Card";
import { ArtisanContext } from "../Context/ArtisanContext";

function ArtisanCategory(props) {
  const { datas } = useContext(ArtisanContext);

  return (
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
  );
}

export default ArtisanCategory;
