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
   

      


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#043962" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,202.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>


        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L60,144C120,128,240,96,360,74.7C480,53,600,43,720,74.7C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#043962"
            fill-opacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,165.3C672,160,768,160,864,165.3C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}

      </div>
    </>
  );
}

export default Footer;
