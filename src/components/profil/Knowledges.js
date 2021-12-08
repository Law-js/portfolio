import React from "react";
import Experience from "./Experiences";
import Languages from "./Languages";
import OtherSkills from "./OtherSkills";
import Qualities from "./Qualities";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <h3>Mes acquis</h3>
      <div className="knowledges-content">
        <Languages />
        <Experience />
        <OtherSkills />
        <Qualities />
      </div>
    </div>
  );
};

export default Knowledges;
