import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox
          image={fimage1}
          title="Weightlifting"
          description="Sculpt strength in a cutting-edge iron paradise."
        />
        <Featurebox
          image={fimage2}
          title="Specific Muscle"
          description="Precision equipment for targeted muscle growth sessions."
        />
        <Featurebox
          image={fimage3}
          title="Flex your muscle"
          description="Amplify muscle gains in a superior fitness environment."
        />
        <Featurebox
          image={fimage4}
          title="Cardio Exercise"
          description="Elevate endurance with top-notch cardiovascular workout options."
        />
      </div>
    </div>
  );
}

export default Feature;
