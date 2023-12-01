import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Have you ever imagined that finding the cleanest, most supplied, with
          the best courses gym was just a dream? well, it is all true if you
          join us! try to believe!
        </p>
      </div>
    </div>
  );
}

export default About;
