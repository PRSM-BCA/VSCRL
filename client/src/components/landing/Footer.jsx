import React from "react";
import email from "./media/email.png"
import location from "./media/location.png"
import phone from "./media/phone.png"

function Footer() {
  return (
    <>
      <div className="footerFlexContainer">
        <div className="footerMiniFlex">
          {/* <img className="footer-icon" src={email}/> */}
          <p className="footer-contact-type">hello@vscrl.com</p>
        </div>
        <div className="footerMiniFlex">
          {/* <img className="footer-icon" src={phone}/> */}
          <p className="footer-contact-type">802-232-1193</p>
        </div>
        <div className="footerMiniFlex">
          {/* <img className="footer-icon" src={location}/> */}
          <p className="footer-contact-type">
            50 Lakeside Avenue
            <br /> Burlington, VT
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer
