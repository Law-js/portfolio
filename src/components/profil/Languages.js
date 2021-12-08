import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Sass", xp: 1.75 },
      { id: 2, value: "Javascript", xp: 1.6 },
      { id: 3, value: "Node JS", xp: 1.08 },
      { id: 4, value: "Typescript", xp: 0.8 },
    ],
    others: [
      { id: 1, value: "Express JS", xp: 1.08 },
      { id: 2, value: "React JS", xp: 1.0 },
      { id: 3, value: "Redux", xp: 0.9 },
      { id: 4, value: "MongoDB", xp: 1.08 },
    ],
  };

  render() {
    let { languages, others } = this.state;

    return (
      <div className="languages">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={others}
          className="othersDisplay"
          title="autres"
        />
      </div>
    );
  }
}

export default Languages;
