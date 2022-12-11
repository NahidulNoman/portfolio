import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0tz5yhc', 'template_mlmgf46', form.current, 'DCE3ig2mZ3F6ek7EO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="w-96 mx-auto bg-slate-300 rounded-lg  mt-28">
      <form ref={form} onSubmit={sendEmail} className="text-center p-7">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">
          Contact Me
        </h2>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs mb-4"
        />{" "}
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Enter Email"
          className="input input-bordered w-full max-w-xs mb-4"
        />{" "}
        <br />
        <textarea
          className="textarea textarea-bordered w-full max-w-xs mb-4"
          placeholder="Your Message"
          name="message"
        ></textarea>{" "}
        <br />
        <input type="submit" value="Send" className="btn btn-primary w-full max-w-xs"/>
      </form>
    </div>
  );
};

export default Contact;
