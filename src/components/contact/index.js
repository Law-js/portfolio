import React, { useState } from "react";
import Form from "./Form";
import Links from "./Links";

const Contacts = (props) => {
  const [formModal, setFormModal] = useState(props.form);
  const [linksModal, setLinksModal] = useState(props.links);

  const handleModals = (e) => {
    if (e.target.id === "send") {
      setFormModal(true);
      setLinksModal(false);
    } else if (e.target.id === "links") {
      setFormModal(false);
      setLinksModal(true);
    }
  };
  return (
    <>
      <ul className="contact-nav">
        <li className="contact-title">
          <h3>Contactez-moi</h3>
        </li>
        <li>
          <ul>
            <li
              id="send"
              onClick={handleModals}
              className={formModal ? "active-btn" : null}
              title="Envoyer un message"
            >
              Message
            </li>
            <li
              id="links"
              onClick={handleModals}
              className={linksModal ? "active-btn" : null}
              title="Voir les liens"
            >
              Liens utiles
            </li>
          </ul>
        </li>
      </ul>
      {formModal && <Form />}
      {linksModal && <Links />}
    </>
  );
};

export default Contacts;
