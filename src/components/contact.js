import React, { useRef } from "react";
import "./contact.css";
import Instagram from "../assets/insta_icon-removebg-preview.png";
import Github from "../assets/github2_icon-removebg-preview.png";
import X from "../assets/X_icon-removebg-preview.png";
import LinkedIn from "../assets/linkedin_icon-removebg-preview.png";
import emailjs from "@emailjs/browser";
import Java from "../assets/java_img.png"
import Python from "../assets/python_img.png"
import HTML from "../assets/html_img.png"
import Css from "../assets/css2_logo.jpeg"
import Js from "../assets/js_img.png"
import React_r from "../assets/react4_img.png"
import NodeJs from "../assets/nodejs2_img.jpg"
import Mongo from "../assets/Mongo2_img.jpg"

function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3btmcsh", "template_n9gcf3f", form.current, {
        publicKey: "Y-0RcHcDNB1kTEqgk8B1f",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert('email sent');  
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactpagetitle">My Skills</h1>
        <p className="clientdescription">
        I'm a Software Engineer who enjoys coding and problem-solving. I have a strong interest in learning new technologies and improving my skills. I am committed to creating efficient and effective software solutions.
        </p>
        <div className="skillimages">
          <img src={Java} alt="skillimage1" className="skillimg" />
          <img src={Python} alt="skillimage2" className="skillimg" />
          <img src={HTML} alt="skillimage3" className="skillimg" />
          <img src={Css} alt="skillimage4" className="skillimg" />
          <img src={Js} alt="skillimage4" className="skillimg" />
          <img src={React_r} alt="skillimage4" className="skillimg" />
          <img src={NodeJs} alt="skillimage4" className="skillimg" />
          <img src={Mongo} alt="skillimage4" className="skillimg" />

        </div>
      </div>
      <div id="contact">
        <h1 className="contacttitle">Contact Me</h1>
        <span className="contactdescription">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your name" name="your_name"/>
          <input type="email" className="email" placeholder="Your email" name="your_email"/>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button className="submitbtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
              <a href="https://www.instagram.com/muneeb_ahmed_18" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="link" />
            </a> 
            <a href="https://github.com/MohammadMuneebAhmed" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="Github" className="link" />
            </a>
            <a href="https://twitter.com/MdMuneebAhmed" target="_blank" rel="noopener noreferrer">
              <img src={X} alt="Twitter" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/md-muneeb-ahmed-5458732a0/
" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
