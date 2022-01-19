import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="homeParentContainer">
      <Fade bottom>
        <div className="nameContainer">
          <h1 className="name">Hi, I'm Bhanupratap.</h1>
          <p className="slogan">
            I believe that user experience is what makes a good product
            great.
          </p>
          <p className="designation">Front-end / UI / UX developer.</p>
          <div className="buttonContainer">
            <button className="resumeButton">resume</button>
            <button className="projectsButton">Projects</button>
          </div>
        </div>
        <div>
          <img
            alt="User"
            src={require("../../assets/Images/60111.jpg")}
            className="image"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Home;
