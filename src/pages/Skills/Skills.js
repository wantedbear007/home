import React from "react";
import "./Skills.css";
import { BsCodeSlash } from "react-icons/bs";
import { ImDisplay } from "react-icons/im";

const Skills = () => {
  return (
    <div className="skillsParentContainer">
      <div className="titleContainer">
        <h1 className="title">Skills</h1>
      </div>
      <div className="detailsContainer">
        <div className="cardContainer">
          <div className="languageContainer">
            <div className="languageTitleContainer">
              <p className="languageTitle">Language</p>
            </div>
            <div className="languageIconContainer">
              <h2 className="icon">
                <BsCodeSlash />
              </h2>
            </div>
          </div>
          <ul className="listItems">
            <li>
              <p className="languages">Hyper Text Markup Language(HTML)</p>
            </li>
            <li>
              <p className="languages">Cascading StyleSheet(CSS)</p>
            </li>
            <li>
              <p className="languages">Javascript</p>
            </li>
            <li>
              <p className="languages">React.JS</p>
            </li>
            <li>
              <p className="languages">React Native</p>
            </li>
          </ul>
        </div>
        <div  className="cardContainer">
          <div className="technologiesContainer">
            <div className="technologiesTitleContainer">
              <p className="technologiesTitle">Technologies</p>
            </div>
            <div>
              <div className="technologiesIconContainer">
                <h2 className="icon">
                  <ImDisplay />
                </h2>
              </div>
            </div>
          </div>
          <ul className="listItems">
            <li>
              <p className="technologies">Adobe Photoshop</p>
            </li>
            <li>
              <p className="technologies">Adobe XD</p>
            </li>
            <li>
              <p className="technologies">Figma</p>
            </li>
            <li>
              <p className="technologies">Git / Github</p>
            </li>
            <li>
              <p className="technologies">Shell scripting</p>
            </li>
            <li>
              <p className="technologies">Visual Studio code</p>
            </li>
            <li>
              <p className="technologies">
                Microsoft Office / Excel / Powerpoint
              </p>
            </li>
            <li>
              <p className="technologies">
                Application programming Interface(API)
              </p>
            </li>
            <li>
              <p className="technologies">Debian / Linux</p>
            </li>
            <li>
              <p className="technologies">Microsoft Windows</p>
            </li>
            <li>
              <p className="technologies">VmWare / VirtualBox</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
