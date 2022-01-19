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
                  updated around you. It has also a night mode included into it
                  so that you can catchup at night too.
                </p>
                <button className="learnMoreButton">Learn more...</button>
              </div>
            </div>
            <img
              alt="appImage"
              src={require("../../assets/Images/eternitynews.png")}
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
                  Eternity for reddit is a reddit client written on
                  react-native. It is a light weight easy to use app with basic
                  functionalities. It has a beautiful user interface along with
                  easy-to-use layout. As of now it has Trending page and a
                  search functionality both works flawlessly without any ad’s
                  interruption.
                </p>
                <button className="learnMoreButton">Learn more...</button>
              </div>
            </div>
            <img
              alt="appImage"
              src={require("../../assets/Images/eternityreddit.png")}
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
                  SnapsOverload was among my first react native projects. This
                  is a very basic wallpapers app that fetches wallpapers from
                  Unsplash API. There are many new changes that are to be made
                  on this project in near future some of them are better user
                  interface along with search functionality and much more.
                </p>
                <button className="learnMoreButton">Learn more...</button>
              </div>
            </div>
            <img
              alt="appImage"
              src={require("../../assets/Images/snapsoverload.png")}
              className="appImage"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
