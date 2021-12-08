import React from "react";

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerFlexContainer">
          <div className="footerMiniFlex">
            <p className="footer-contact-type">hello@vscrl.com</p>
          </div>

          <div className="footerMiniFlex">
            <p className="footer-contact-type">802-232-1193</p>
          </div>

          <div className="footerMiniFlex">
            <p className="footer-contact-type">
              50 Lakeside Avenue
              <br /> Burlington, VT
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#043962"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Footer;
