import React, { useContext } from "react";
import Card from "../Components/Card";
import { ArtisanContext } from "../Context/ArtisanContext";

function ArtisanCategory(props) {
  const { datas } = useContext(ArtisanContext);

  return (
    <div className="artisan-category">
      {datas.map((datas) => {
        if (props.category === datas.category) {
          return (
            <Card
              key={datas.id}
              name={datas.name}
              note={datas.note}
              location={datas.location}
              specialty={datas.specialty}
            ></Card>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ArtisanCategory;
