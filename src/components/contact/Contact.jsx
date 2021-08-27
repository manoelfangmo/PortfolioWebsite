import React from "react";
import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";
import { send } from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Manoel",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    send(
      "service_ox1rlp9",
      "template_jhlbqc6",
      toSend,
      "user_nHthDlJJLpZN2zTxDtZ7x"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            value={toSend.message}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
          {/* </button> */}
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
