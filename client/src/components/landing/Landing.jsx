import "./Landing.scss";
import Footer from "./Footer.jsx"


// -----------------imports for scrollable landing page experiment
import React from "react";
import "./Landing.scss";
import Navbar from "./Navbar";
import HowItWorks from "./Sections/HowItWorks";
import Login from "./Sections/Login";
import Main from "./Sections/Main";
import Brands from "./Sections/Brands";
import Stories from "./Sections/Stories";

function Landing() {
  // const [additionalPage, setAdditionalPage] = useState(false)
  return (
    
      <div className="Landing">
        <Navbar />
        <Main />
        <Login />
        <HowItWorks />
        <Stories />
        <Brands />
        <Footer />
      </div>
      
    
  );
}

export default Landing;
