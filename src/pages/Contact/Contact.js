import React, { useState } from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import { HiOutlineClipboardCopy } from "react-icons/hi";

const Contact = () => {
  let mail = "Drop a mail";
  const [mailText, setMailText] = useState(mail);
  const [copyVisibility, setCopyVisibility] = useState(false);
  const mailId = "pratapsinghbhanu444@gmail.com";

  // links
  const linkedIn = "https://www.linkedin.com/in/bhanupratap-singh-054519226";
  const telegram = "https://t.me/Wantedbear007";
  const github = "https://github.com/wantedbear007";

  const buttonHandler = (url) => {
    window.open(url);
  };

  // mail buttonHandler
  const mailButtonHandler = () => {
    setMailText(mailId);
    setCopyVisibility(true);
  };

  const CopyButton = () =>
    copyVisibility ? (
      <button
        className="copyButton"
        onClick={() => {
          navigator.clipboard.writeText(mailId);
        }}
      >
        <HiOutlineClipboardCopy />
      </button>
    ) : null;

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
              <button
                className="contactButton"
                onClick={() => buttonHandler(linkedIn)}
              >
                Get In Touch
              </button>
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
              <button className="contactButton" onClick={mailButtonHandler}>
                {mailText}
                <span>
                  <CopyButton />
                </span>
              </button>
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
              <button
                className="contactButton"
                onClick={() => buttonHandler(telegram)}
              >
                Have a chat
              </button>
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
              <button
                className="contactButton"
                onClick={() => buttonHandler(github)}
              >
                Peek My Work
              </button>
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
