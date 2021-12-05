// import { useState } from "react";
import "./contact.scss";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkqwavp",
        "template_uzfjf1z",
        form.current,
        "user_nXbAOkln98mdbObFNRR4o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label> */}
          <input type="text" name="user_email" placeholder="Email"/>
          {/* <label>Message</label> */}
          <textarea name="message" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
        </form>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </div>
  );
}
