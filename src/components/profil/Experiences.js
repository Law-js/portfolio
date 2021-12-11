import React from "react";

const Experience = () => {
  return (
    <div className="experiences">
      <h4>Expérience</h4>
      <div className="exp-1 exp">
        <h5>Développeur Fullstack - FindQuickly</h5>
        <p>Depuis 2021</p>
        <p>
          FindQuickly est en cours de développement. Ma mission principale est
          la réalisation du CRUD utilisateurs et l'authentification ainsi que la
          mise en relation entre le côté client et le côté serveur.
        </p>
      </div>
      <div className="exp-2 exp">
        <h5>Serrurier métallier - Hans Leffer GmbH</h5>
        <p>2011-2020</p>
        <p>
          Cette expérience m'a permis de me plonger dans le monde du travail.
          Travailler en autonomie et respecter les délais demandés ont été des
          atouts indispensables.
        </p>
      </div>
      <div className="exp-3 exp">
        <h5>Militaire du rang - Armée de Terre</h5>
        <p>2008-2011</p>
        <p>
          Mon engagement au sein de l'armée m'a permis d'apprendre le travail en
          équipe et le respect des hiérarchies.
        </p>
      </div>
      <hr />
      <h4>Formations</h4>
      <div className="exp-4 exp">
        <h5>Développeur JS - Autodidacte</h5>
        <p>Depuis 2019</p>
      </div>
      <div className="exp-5 exp">
        <h5>Développeur Web - Esecad</h5>
        <p>2020-2021</p>
      </div>
    </div>
  );
};

export default Experience;
