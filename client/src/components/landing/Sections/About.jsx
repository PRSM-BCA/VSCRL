import React from "react";
import adventure from "../media/adventure.png";
import brainstorm from "../media/brainstorm.png";
import discount from "../media/discount.png";

function About() {
  return (
    <>
      <div className="about-section" id="about">
        <div className="aboutHeaderFlexContainer">
          <p id="header">
            {" "}
            We provide transparency between you and the brands you love.
          </p>
          <p id="subheader">
            <i>Together we can create better products for all of us!</i>
          </p>
        </div>
        <div className="aboutFlexContainer">
          <div className="aboutMiniFlex">
            <img className="aboutImage" src={adventure} />
            <p className="description">
              <i id="miniHeader">Live Your Passion</i> 
              &nbsp;
              <br />Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Iaculis nunc sed augue lacus.
            </p>
          </div>
          <div className="aboutMiniFlex">
            <img className="aboutImage" src={brainstorm} />
            {/* <p className="text">Empathic insights</p> */}
            <p className="description">
              <i id="miniHeader">Empathic Insights</i>
              <br />Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Iaculis nunc sed augue lacus.
            </p>
          </div>
          <div className="aboutMiniFlex">
            <img className="aboutImage" src={discount} />
            {/* <p className="text">Brand rewards</p> */}
            <p className="description">
              <i id="miniHeader">Brand Rewards</i>
              <br />Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Iaculis nunc sed augue lacus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
