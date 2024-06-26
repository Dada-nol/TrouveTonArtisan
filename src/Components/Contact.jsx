import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArtisanContext } from "../Context/ArtisanContext";

function Contact() {
  const { datas } = useContext(ArtisanContext);
  const { id } = useParams();
  const artisan = datas.find((artisan) => artisan.id === Number(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const Alert = () => {
    alert(
      `Votre message a bien été envoyé à l'adresse suivante : ${artisan.email}`
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Votre nom
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder="exemple: Patrick"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <p className="form-text">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">
            Votre numéro de téléphone
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPhone1"
            placeholder="06 29 .. .. .."
          />
        </div>

        <div>
          <label htmlFor="exampleInputSubject1" className="form-label">
            Objet
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputSubject1"
            placeholder="Sujet"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Zone de texte
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Votre message"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              Alert();
            }}
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
