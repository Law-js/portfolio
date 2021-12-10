import React from "react";
import Contacts from "../components/contact";
import Navbar from "../components/NavBar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact-container">
          <Contacts form={true} links={false} />
        </div>

        <div className="thx">
          <span>M</span>
          <span>e</span>
          <span>r</span>
          <span>c</span>
          <span>i</span>
          <span> </span>
          <span>p</span>
          <span>o</span>
          <span>u</span>
          <span>r</span>
          <span> </span>
          <span>v</span>
          <span>o</span>
          <span>t</span>
          <span>r</span>
          <span>e</span>
          <span> </span>
          <span>v</span>
          <span>i</span>
          <span>s</span>
          <span>i</span>
          <span>t</span>
          <span>e</span>
          <span> </span>
          <span>☺</span>
          <span> </span>
          <span>!</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
