import React from "react";
import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="Submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
        <form
          action="https://formsubmit.co/manoelfangmo@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="messsage" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
