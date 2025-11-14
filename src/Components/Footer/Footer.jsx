import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center text-light p-3">
        <div className="row">
          <div className="col-lg col-md-6">
            <img className="logo img-fluide" src="/Img/Logo.png" alt=""></img>
          </div>
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
            <p>
              <Link className="footer-link" to="/Données-personnelles">
                Données personelles
              </Link>
            </p>
            <p>
              <Link className="footer-link" to="/Mentions-légales">
                Mentions légales
              </Link>
            </p>
            <p>
              <Link className="footer-link" to="/Accessibilité">
                Accessibilité : Partiellement conforme
              </Link>
            </p>
            <p>
              <Link className="footer-link" to="/Presse">
                Presse
              </Link>
            </p>
            <p>
              <Link className="footer-link" to="/Marchés">
                Marchés publics
              </Link>
            </p>
            <p>
              <Link className="footer-link" to="/Région">
                Venir à la région
              </Link>
            </p>
            <p>
              <Link className="footer-link" to="/Contact">
                Contact
              </Link>
            </p>

            <p>Gestion des cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
