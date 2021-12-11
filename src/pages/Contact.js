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
          <h5>Merci pour votre visite ☺ !</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
