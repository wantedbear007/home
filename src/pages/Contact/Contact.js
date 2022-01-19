import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="privilegeClass">
    <Fade bottom>
      <div className="contactParentContainer">
        <h1 className="text">Contact</h1>
        <div className="contactContainers">
          <div className="contactCard">
            <img
            alt="linkedIn"
              src={require("../../assets/icons/linkedin.png")}
              className="contactLogo"
            />
            <h2 className="contactText">LinkedIn</h2>
            <button className="contactButton">Get In Touch</button>
          </div>
        </div>

        <div className="contactContainers">
          <div className="contactCard">
            <img
            alt="gmail"
              src={require("../../assets/icons/gmail.png")}
              className="contactLogo"
            />
            <h2 className="contactText">Gmail</h2>
            <button className="contactButton">Drop a Mail</button>
          </div>
        </div>

        <div className="contactContainers">
          <div className="contactCard">
            <img
            alt="telegram"
              src={require("../../assets/icons/telegram.png")}
              className="contactLogo"
            />
            <h2 className="contactText">Telegram</h2>
            <button className="contactButton">Have a chat</button>
          </div>
        </div>

        <div className="contactContainers">
          <div className="contactCard">
            <img
             alt="github"
              src={require("../../assets/icons/github.png")}
              className="contactLogo"
            />
            <h2 className="contactText">Github</h2>
            <button className="contactButton">Peek My Work</button>
          </div>
        </div>
        
      </div>
      <h2 className="credits">
        Website proudly designed and developed by Bhanupratap with Love❤️.
      </h2>
    </Fade>
    </div>
  );
};

export default Contact;
