import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import vscrlLogo from "./media/vscrlLogo.png"


function Navbar() {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        id="vscrlLogo"
        to="main"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <img id="vscrlLogo" src={vscrlLogo} />
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
