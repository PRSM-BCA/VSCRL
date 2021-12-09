import "./Landing.scss";
// import { Link } from 'react-router-dom'
// import SignUp from '../SignUp/SignUp';
// import LogIn from '../LogIn/LogIn';

// -----------------imports for scrollable landing page experiment
import React from "react";
import "./Landing.scss";
import Navbar from "./Navbar";
import About from "./Sections/About";
import Login from "./Sections/Login";
import Main from "./Sections/Main";
import Brands from "./Sections/Brands";
import Stories from "./Sections/Stories";


function Landing() {
  // const [additionalPage, setAdditionalPage] = useState(false)
  return (
    <div className="Landing">
      {/* <nav>
          <Link to='/KeyWordAnswer'>KeyWordAnswer</Link>
          <Link to='/LongAnswer'>LongAnswer</Link>
          <Link to='/MultipleChoice'>MultipleChoice</Link>
          <Link to='/RankingAnswer'>RankingAnswer</Link>
          <Link to='/ScaleAnswer'>ScaleAnswer</Link>
          <Link to='/SelectImg'>SelectImg</Link>
          <Link to='/ShortAnswer'>ShortAnswer</Link>
        </nav> */}
      {/* <div>
      <SignUp></SignUp>
        <LogIn></LogIn>
      </div> */}
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
