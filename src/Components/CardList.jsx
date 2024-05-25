import React from "react";
import data from "../Data/datas.json";
import Card from "./Card";

function CardList() {
  return (
    <div>
      <Card data={data}></Card>
    </div>
  );
}

export default CardList;
