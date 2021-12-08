import React from "react";

function Stories() {
  return (
    <>
      <div className="stories-section" id="stories">
        <div className="curved">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#B85000"
              fill-opacity="1"
              d="M0,128L20,117.3C40,107,80,85,120,69.3C160,53,200,43,240,64C280,85,320,139,360,160C400,181,440,171,480,149.3C520,128,560,96,600,117.3C640,139,680,213,720,234.7C760,256,800,224,840,208C880,192,920,192,960,186.7C1000,181,1040,171,1080,186.7C1120,203,1160,245,1200,240C1240,235,1280,181,1320,160C1360,139,1400,149,1420,154.7L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
            ></path>
          </svg>
          <div className="story-placeholder">
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
        </div>
      </div>
    </>
  );
}

export default Stories;
