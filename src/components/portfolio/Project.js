import React, { Component } from "react";
import { motion } from "framer-motion";
class Project extends Component {
  state = {
    show: false,
  };

  handleInfo = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const variants = {
      initial: {
        opacity: 0,
        y: -1000,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
      },
    };

    const transition = {
      ease: "linear",
      duration: 0.5,
    };

    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <motion.div
        className="project"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={transition}
      >
        <figure>
          <img src={picture} alt={name} />
          <figcaption className="info">
            <div className="icons">
              {languagesIcons.map((icon) => (
                <i className={icon} key={icon}></i>
              ))}
            </div>
            <span className="infos" onClick={this.handleInfo}>
              <i className="fas fa-plus" title={"Plus d'infos sur " + name}></i>
            </span>
          </figcaption>
        </figure>
        <div className="project-title">
          <h2>{name}</h2>
        </div>

        {this.state.show && (
          <div className="show">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retour
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  }
}

export default Project;
