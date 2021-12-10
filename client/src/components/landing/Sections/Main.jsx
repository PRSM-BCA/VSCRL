import React from "react";
import SignupModal from "./SignupModal";
import VideoBackground from "../media/pexels-tima-miroshnichenko-5916543.mp4";
import adventure from "../media/adventure.png";
import brainstorm from "../media/brainstorm.png";
import discount from "../media/discount.png";
import "../../modal/ModalStyles.scss";

function Login() {
  return (
    <>
      <div className="main-section" id="main">
        <video autoPlay muted loop className="videoBackground">
          <source src={VideoBackground} type="video/mp4" />
        </video>
        <div className="curvedContainer">
          <h1>
            Connect with your favorite brands,
            <br /> get <i>rewarded</i> for living your passion.
          </h1>
          <SignupModal></SignupModal>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#1e2227"
              fill-opacity="1"
              d="M0,128L40,106.7C80,85,160,43,240,37.3C320,32,400,64,480,74.7C560,85,640,75,720,101.3C800,128,880,192,960,197.3C1040,203,1120,149,1200,128C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="icon-section">
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
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Iaculis nunc sed augue lacus.
            </p>
          </div>
          <div className="aboutMiniFlex">
            <img className="aboutImage" src={brainstorm} />
            {/* <p className="text">Empathic insights</p> */}
            <p className="description">
              <i id="miniHeader">Empathic Insights</i>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Iaculis nunc sed augue lacus.
            </p>
          </div>
          <div className="aboutMiniFlex">
            <img className="aboutImage" src={discount} />
            {/* <p className="text">Brand rewards</p> */}
            <p className="description">
              <i id="miniHeader">Brand Rewards</i>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Iaculis nunc sed augue lacus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
