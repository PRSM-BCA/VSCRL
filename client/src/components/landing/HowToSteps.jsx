import React from "react";
import profile from "./media/profile.png";
import discount_icon from "./media/discount_icon.png";
import keyInsights_icon from "./media/keyInsights_icon.png"
import network_icon from "./media/network_icon.png"
import prof_2 from "./media/prof_2.png"


function HowToSteps() {
  return (
    <>
      <svg
        className="howToSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
      >
        <path
          fill="#F1A61E"
          fill-opacity="1"
          d="M0,160L34.3,181.3C68.6,203,137,245,206,229.3C274.3,213,343,139,411,138.7C480,139,549,213,617,245.3C685.7,277,754,267,823,250.7C891.4,235,960,213,1029,218.7C1097.1,224,1166,256,1234,256C1302.9,256,1371,224,1406,208L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <p id="howTitle">How it works...</p>
      <div className="howToSteps">
        <div className="stepOne step">
          <img id="profile-icon" src={prof_2} />
          <p>
            <b>Step 1.</b>
            <br />
            Create a profile.
          </p>
        </div>
        <div className="stepTwo step">
          <img id="network-icon" src={network_icon} />
          <p>
            <b>Step 2.</b>
            <br />
            Connect to the brands you're passionate about.
          </p>
        </div>
        <div className="stepThree step">
          <img id="keyInsights-icon" src={keyInsights_icon} />
          <p>
            <b>Step 3.</b>
            <br />
            Share your insights and join customer discovery.
          </p>
        </div>
        <div className="stepFour step">
          <img id="discount-icon" src={discount_icon} />
          <p>
            <b>Step 4.</b>
            <br />
            Complete discovery process and earn rewards with the brands you
            love.
          </p>
        </div>
      </div>
    </>
  );
}

export default HowToSteps;
