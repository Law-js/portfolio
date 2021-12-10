import React from "react";

const Links = () => {
  return (
    <div className="links">
      <ul className="contactBox">
        <li>
          <i class="fas fa-map-marker-alt"></i>
          <a
            href="https://www.google.fr/maps/place/57510+Puttelange-aux-Lacs/@49.0537225,6.9002752,14z/data=!3m1!4b1!4m5!3m4!1s0x47944ec11978d3ab:0x40a5fb99a3a98b0!8m2!3d49.05323!4d6.929866"
            rel="noopener noreferrer"
            target="_blank"
          >
            Puttelange-aux-Lacs
          </a>
        </li>
        <li>
          <i class="fas fa-mobile-alt"></i>
          <a href="tel:06-45-92-26-14" rel="noopener noreferrer">
            06 45 92 26 14
          </a>
        </li>
        <li>
          <i class="fas fa-at"></i>
          <a href="mailto:hp.hectorpascal@gmail.com" rel="noopener noreferrer">
            hp.hectorpascal@gmail.com
          </a>
        </li>
      </ul>
      <ul className="socialNetWork">
        <li>
          <a
            href="https://github.com/Law-js"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/law-js"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-codepen"></i>
            <span>CodePen</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pascal-hector-a637a414b/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
