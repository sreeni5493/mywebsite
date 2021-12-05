// import { useState } from "react";
import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  
  const formRef = useRef();
  const [done, setDone] = useState(false)
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vkqwavp",
        "template_uzfjf1z",
        formRef.current,
        "user_nXbAOkln98mdbObFNRR4o"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_vkqwavp",
  //       "template_uzfjf1z",
  //       form.current,
  //       "user_nXbAOkln98mdbObFNRR4o"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          {/* <label>Name</label> */}
          <input type="text" name="user_name" placeholder="Name"/>
          {/* <label>Email</label> */}
          <input type="email" name="user_email" placeholder="Email"/>
          {/* <label>Message</label> */}
          <textarea name="message" placeholder="Message"/>
          <button type="submit">Send</button>
          {done && "Thank you..."}
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
