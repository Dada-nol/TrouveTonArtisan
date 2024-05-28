import React from "react";
import datas from "../Data/datas.json";
import Card from "./Card";

function CardList() {
  return (
    <div className="card-list container ">
      <div className="row d-flex justify-content-center">
        {datas.map((datas) => {
          return (
            <Card
              key={datas.id}
              name={datas.name}
              note={datas.note}
              location={datas.location}
              specialty={datas.specialty}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
