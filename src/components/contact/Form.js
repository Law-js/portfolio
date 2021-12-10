import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);

      return false;
    }
  };

  const failMessage = () => {
    let formMsg = document.querySelector(".form-message");

    formMsg.innerHTML = "Merci de bien remplir les champs requis (*).";
    formMsg.style.opacity = "1";
    formMsg.style.color = "#f00";

    document.getElementById("name").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");
  };

  const successMsg = () => {
    let formMsg = document.querySelector(".form-message");

    formMsg.innerHTML = "Message envoyé !";
    formMsg.style.opacity = "1";
    formMsg.style.color = "green";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");

    setTimeout(() => {
      formMsg.style.opacity = "0";
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      emailjs
        .sendForm(
          "service_4rthmrn",
          "template_74qh1dj",
          e.target,
          "user_UNihDaUKVzci6PQteKFpl"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setName("");
      setCompany("");
      setPhone("");
      setEmail("");
      setMessage("");

      successMsg();
    } else {
      failMessage();
    }
  };

  return (
    <form className="form" onSubmit={sendEmail}>
      <div className="row">
        <div className="field">
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom *"
            value={name}
            autoComplete="off"
          />
        </div>
        <div className="email-content field">
          <span id="not-mail"> Email non valide</span>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            value={email}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Société"
            value={company}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Téléphone"
            value={phone}
          />
        </div>
      </div>
      <div className="row">
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message *"
          value={message}
        />
      </div>
      <div className="btn">
        <input type="submit" value="Envoyer" />
      </div>
      <div className="form-message"></div>
    </form>
  );
};

export default Form;
