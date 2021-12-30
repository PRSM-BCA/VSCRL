import Footer from "./Footer.jsx"


// -----------------imports for scrollable landing page experiment
import React, {useState, useEffect} from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import "./Landing.scss";
import Navbar from "./Navbar";
import HowItWorks from "./Sections/HowItWorks";
import Login from "./Sections/Login";
import Main from "./Sections/Main";
import Brands from "./Sections/Brands";
import Stories from "./Sections/Stories";


function Landing(props) {

  const {
    currentUser,
    getUser,
  } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
      props.setSurveySubmitted(false)
    }
  }, [getUser, userInfo, currentUser]);


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
