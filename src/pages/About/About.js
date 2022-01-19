import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  // learnMoreButtonHandler
  const learnMoreButtonHandler = () => {
    const url = "https://wantedbear007.github.io/site/";
    window.open(url);
  };

  return (
    <div className="aboutParentContainer">
      <div className="textContainer">
        <Fade bottom>
          <h1 className="text">About</h1>
        </Fade>
      </div>
      <div className="paragraphContainer">
        <Fade bottom>
          <p className="paragraph">
            Hello there! My name is Bhanupratap Singh. I am a Business and
            marketing student who fell in love with computers and its functions.
            From a long period of time, I had immense curiosity with how a
            program is developed, painting of beautiful User Interfaces having a
            responsive and great user experience. Due to my academic reasons, I
            never got a chance to get my hands into this but when I was
            finishing off my initial year of collage in late 2019 Coronavirus
            pandemic happened and I got enough time and then I started learning
            and exploring many different concepts across different domains of
            computers and programming. I am tinkering and teaching myself the
            latest and greatest. I have decided to develop a career with
            programming in JavaScript and confident enough to have one.
          </p>
          <button className="learnMoreButton" onClick={learnMoreButtonHandler}>
            Learn more...
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default About;
