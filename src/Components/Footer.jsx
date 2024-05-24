import React from "react";
import "../Css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container text-center text-light p-3">
        <div className="row">
          <div className="col-lg col-md-6">
            <h5 className="mb-3">Lyon</h5>
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <p>+33 (0)4 26 73 40 00</p>
          </div>

          <div className="col-lg col-md-6">
            <h5 className="mb-3">Mention légales</h5>
            <p>Données personelles</p>

            <p>Accessibilité : Partiellement conforme</p>
            <p>Presse</p>
            <p>Marchés publics</p>
            <p>Venir à la région</p>
            <p>Contact</p>
            <p>Gestion des cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
