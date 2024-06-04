import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import About from "../Components/About";
import ButtonGrp from "../Components/ButtonGrp";
import Contact from "../Components/Contact";
import NavBar from "../Components/Nav";
import { ArtisanContext } from "../Context/ArtisanContext";

import "../Css/style.css";

const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <About></About>;
    case 1:
      return <Contact></Contact>;

    default:
      break;
  }
};

function ArtisanDetail() {
  const [filterText, setFilterText] = useState("");
  const { datas } = useContext(ArtisanContext);
  const { id } = useParams();
  const artisan = datas.find((artisan) => artisan.id === Number(id));
  const [isSelected, setIsSelected] = useState(0);
  const buttons = ["À propos", "Contact"];

  return (
    <>
      <NavBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
      ></NavBar>

      <main>
        <div className="container shadow p-3 bg-body ">
          <div className="row  text-center ">
            <div className="col-md-4">
              <div>
                <img
                  className="card-img-top img-fluide"
                  src="/Img/6495568.jpg"
                  alt=""
                />
              </div>

              <div>
                <h3 className="fw-bold">{artisan.name}</h3>

                <p>{artisan.specialty}</p>

                <p className="fst-italic">{artisan.location}</p>

                <Rating
                  allowFraction={true}
                  initialValue={artisan.note}
                  readonly={true}
                />
                <p className="fst-italic">{artisan.note}</p>
              </div>
            </div>
            <div className=" col col-md-8">
              <ButtonGrp
                buttons={buttons}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              ></ButtonGrp>
              <div className="mt-5">
                <RenderComponent index={isSelected}></RenderComponent>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ArtisanDetail;
