import React from "react";
import icon from "./media/icon.png";
import phone_icon from "./media/phone_icon.png";
import email_icon from "./media/email_icon.png";
import map_icon from "./media/map_icon.png";

function Footer() {
  return (
    <>
      <div className="bottom-tag">
        <h1>
          Living thru passion.
          <br />
          Deeper connection.
          <br />
          Transparent engagement.
          <br />
          Creating better products.
        </h1>
      </div>

      <div className="footerWrapper">
        <div className="icon-flex">
          <img id="icon-footer" src={icon} />
          <div className="footerFlexContainer">
            <div className="footerMiniFlex">
              {/* <img className="contact-icon" src={email_icon} /> */}
              <p className="footer-contact-type">hello@vscrl.com</p>
            </div>

            <div className="footerMiniFlex">
              {/* <img className="contact-icon" src={phone_icon} /> */}
              <p className="footer-contact-type"> 802-232-1193 </p>
            </div>

            <div className="footerMiniFlex">
              {/* <img className="contact-icon" src={map_icon} /> */}
              <p className="footer-contact-type">
                50 Lakeside Ave. Burlington, VT
              </p>
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#1B75BC"
              fill-opacity="1"
              d="M0,96L80,80C160,64,320,32,480,48C640,64,800,128,960,128C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#043962"
              fill-opacity="1"
              d="M0,160L120,170.7C240,181,480,203,720,202.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Footer;
