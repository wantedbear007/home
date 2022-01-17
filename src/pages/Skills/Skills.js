import React from "react";
import "./Skills.css";
import { BsCodeSlash } from "react-icons/bs";
import { ImDisplay } from "react-icons/im";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className="skillsParentContainer">
      <div className="titleContainer">
        <Fade bottom>
          <h1 className="title">Skills</h1>
        </Fade>
      </div>
      <div className="detailsContainer">
        <Fade bottom>
          <div className="cardContainer">
            <div className="titleSection">
              <div className="cardTitleContainer">
                <p className="cardTitles">Languages</p>
              </div>
              <div className="iconContainer">
                <h2>
                  <BsCodeSlash />
                </h2>
              </div>
            </div>
            <ul className="listItems">
              <li>Hyper Text Markup Language(HTML)</li>
              <li>Cascading StyleSheet(CSS)</li>
              <li>Javascript</li>
              <li>React.JS</li>
              <li>React Native</li>
            </ul>
          </div>
        </Fade>
        <Fade bottom>
          <div className="cardContainer">
            <div className="titleSection">
              <div className="cardTitleContainer">
                <p className="cardTitles">Technologies</p>
              </div>
              <div>
                <div className="iconContainer">
                  <h2>
                    <ImDisplay />
                  </h2>
                </div>
              </div>
            </div>
            <ul className="listItems">
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Git / Github</li>
              <li>Shell scripting</li>
              <li>Visual Studio code</li>
              <li>Microsoft Office / Excel / Powerpoint</li>
              <li>Application programming Interface(API)</li>
              <li>Debian / Linux</li>
              <li>Microsoft Windows</li>
              <li>VmWare / VirtualBox</li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
