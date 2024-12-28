import React, { useContext, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/Nav";
import { ArtisanContext } from "../context/ArtisanContext";

function ArtisanCategory(props) {
  const { datas } = useContext(ArtisanContext);
  const [filterText, setFilterText] = useState("");
  return (
    <>
      <NavBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
      ></NavBar>

      <main>
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
            {datas

              .filter((artisan) => {
                if (filterText === "") {
                  return artisan;
                } else if (
                  artisan.name.toLowerCase().includes(filterText.toLowerCase())
                ) {
                  return artisan;
                } else if (
                  artisan.specialty
                    .toLowerCase()
                    .includes(filterText.toLowerCase())
                ) {
                  return artisan;
                } else if (
                  artisan.location
                    .toLowerCase()
                    .includes(filterText.toLowerCase())
                ) {
                  return artisan;
                } else {
                  return null;
                }
              })
              .map((artisan) => {
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
      </main>
    </>
  );
}

export default ArtisanCategory;
