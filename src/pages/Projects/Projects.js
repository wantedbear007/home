import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="projectParentContainer">
      <Fade top>
        <h1 className="titleText">Projects</h1>
      </Fade>
      <div className="projectsParentContainer">
      <Fade bottom>
        <div className="projectContainer">
          <div className="projectTitleContainer">
            <h2 className="projectTitle">Eternity News</h2>
          </div>
          <div className="contentContainer">
            <div className="projectParagraphContainer">
              <p className="detailsParagraph">
                EternityNews makes reading news easier. It let you read news
                from many different sources. It also saves your time by
                providing only sufficient information so that you can be the
                updated around you. It has also a night mode included into it so
                that you can catchup at night too.
              </p>
              <button className="learnMoreButton">Learn more...</button>
            </div>
          </div>
          <img
            src={require("../../assets/Images/appImage.png")}
            className="appImage"
          />
        </div>
      </Fade>
      <Fade bottom>
        <div className="projectContainer">
          <div className="projectTitleContainer">
            <h2 className="leftProjectTitle">Eternity for Reddit</h2>
          </div>
          <div className="leftContentContainer">
            <div className="leftProjectParagraphContainer">
              <p className="detailsParagraph">
                EternityNews makes reading news easier. It let you read news
                from many different sources. It also saves your time by
                providing only sufficient information so that you can be the
                updated around you. It has also a night mode included into it so
                that you can catchup at night too.
              </p>
              <button className="learnMoreButton">Learn more...</button>
            </div>
          </div>
          <img
            src={require("../../assets/Images/appImage.png")}
            className="leftAppImage"
          />
        </div>
      </Fade>
      <Fade bottom>
        <div className="projectContainer">
          <div className="projectTitleContainer">
            <h2 className="projectTitle">SnapsOverload</h2>
          </div>
          <div className="contentContainer">
            <div className="projectParagraphContainer">
              <p className="detailsParagraph">
                EternityNews makes reading news easier. It let you read news
                from many different sources. It also saves your time by
                providing only sufficient information so that you can be the
                updated around you. It has also a night mode included into it so
                that you can catchup at night too.
              </p>
              <button className="learnMoreButton">Learn more...</button>
            </div>
          </div>
          <img
            src={require("../../assets/Images/appImage.png")}
            className="appImage"
          />
        </div>
      </Fade>
      </div>
    </div>
  );
};

export default Projects;
