import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import icon from "./media/icon.png"


function Navbar() {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        id="icon"
        to="main"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <img src={icon} />
      </Link>

      <Link
        activeClass="active"
        id="loginLink"
        to="login"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Login
      </Link>


      <Link
        activeClass="active"
        id="howItWorksLink"
        to="howItWorks"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        How it works
      </Link>

      <Link
        activeClass="active"
        id="storiesLink"
        to="stories"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Stories
      </Link>

      <Link
        activeClass="active"
        id="brandsLink"
        to="brands"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Brands
      </Link>
    </div>
  );
}

export default Navbar;
