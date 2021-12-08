import "./Landing.scss";
// import { Link } from 'react-router-dom'
// import SignUp from '../SignUp/SignUp';
// import LogIn from '../LogIn/LogIn';

// -----------------imports for scrollable landing page experiment
import React from "react";
import "./Landing.scss";
import Navbar from "./Navbar";
import About from "./Sections/About";
import SignUp from "../SignUp/SignUp"
import Login from "./Sections/Login";
import Main from "./Sections/Main";
import Brands from "./Sections/Brands";
import Stories from "./Sections/Stories";

function Landing() {
  return (
    <div className="Landing">
      <Navbar />
      <Main />
      <Login />
      <About />
      <Stories />
      <Brands />
    </div>
  );
}

export default Landing;
