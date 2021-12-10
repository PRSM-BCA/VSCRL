import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Stories() {
  return (
    <>
      <div className="stories-section" id="stories">
        <div className="curved">
          <svg
            id="top-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              // fill="#1B75BC"
              fill="#F8F7F2"
              // fill="#FFFFFF"
              
              fill-opacity="1"
              d="M0,128L20,117.3C40,107,80,85,120,69.3C160,53,200,43,240,64C280,85,320,139,360,160C400,181,440,171,480,149.3C520,128,560,96,600,117.3C640,139,680,213,720,234.7C760,256,800,224,840,208C880,192,920,192,960,186.7C1000,181,1040,171,1080,186.7C1120,203,1160,245,1200,240C1240,235,1280,181,1320,160C1360,139,1400,149,1420,154.7L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            ></path>
          </svg>

          <div className="carousel-wrapper">
            <Carousel
              infiniteLoop
              autoPlay
              transitionTime={2000}
              interval={5000}
              showArrows={false}
              showStatus={false}
              useKeyboardArrows={true}
            >
              <div className="story">
                <div className="story-image"></div>
                <div className="story-text">
                  "When I share my voice as a snowboarder,
                  <br /> I get to use more of the gear I love."
                  <div className="story-text-author">
                    <br /> Rachel Cooper
                    <br /> Park City, UT
                  </div>
                </div>
              </div>
              <div className="story">
                <div className="story-image"></div>
                <div className="story-text">
                  "It's cool knowing that my perspective
                  <br />
                  could shape the future of my favorite products!"
                  <div className="story-text-author">
                    <br /> Opal Darling
                    <br /> Burlington, VT
                  </div>
                </div>
              </div>
              <div className="story">
                <div className="story-image"></div>
                <div className="story-text">
                  "I feel like I'm contributing to a future
                  <br />
                  where products meet actual needs!"
                  <div className="story-text-author">
                    <br /> Xander Thomas
                    <br /> Cleveland, OH
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <svg
            id="bottom-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              // fill="#1B75BC"
              fill="#FFFFFF"
              // fill= "#B85000"
              fill-opacity="1"
              d="M0,160L24,154.7C48,149,96,139,144,138.7C192,139,240,149,288,149.3C336,149,384,139,432,112C480,85,528,43,576,42.7C624,43,672,85,720,112C768,139,816,149,864,144C912,139,960,117,1008,138.7C1056,160,1104,224,1152,234.7C1200,245,1248,203,1296,165.3C1344,128,1392,96,1416,80L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
          
        </div>
      </div>
    </>
  );
}

export default Stories;
