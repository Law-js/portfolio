import React from "react";
import NavBar from "../components/NavBar";
import TextAnim from "../components/profil/TextAnim";
import { Parallax } from "react-parallax";
import img from "../assets/textures/8k_earth_nightmap.jpg";
import Descr from "../components/profil/Descr";
import Knowledges from "../components/profil/Knowledges";

const Profil = () => {
  return (
    <>
      <NavBar />
      <div className="profil">
        <Parallax bgImage={img} strength={500}>
          <header className="header" role="heading">
            <div className="header-content">
              <TextAnim />
              <h2>D'une passion un métier</h2>
            </div>
          </header>
        </Parallax>
        <main className="profil-main">
          <Descr />
          <Knowledges />
        </main>
      </div>
    </>
  );
};

export default Profil;
