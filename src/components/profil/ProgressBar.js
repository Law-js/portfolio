import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="languages-content">
      <h4>{props.title}</h4>
      <div className="years">
        <span>Années</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>
      <div>
        {props.languages.map((item) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
