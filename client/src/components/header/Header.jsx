import "./Header.scss";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../landing/media/vsrlLogo.jpg";
import { useState } from "react";
import { authentication, db } from "../../firebase-config";
import { doc, getDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import imgIcon from "../landing/media/NavBar.jpg";


export default function Header() {
  const [isLoggingIn, setLoggingIn] = useState(false);
  const { login, logout, currentUser, getUser, addSurvey } = useAuth();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [currentSurvey, setCurrentSurvey] = useState("");
  const [allSurveys, setAllSurveys] = useState("");
  const [surveyWrite, setSurveyWrite] = useState("");
  const [addedQuestion, setAddedQuestion] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      setErrorMessage("");
      await login(emailAddress, password);
      navigate("/Dashboard", { replace: true });
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [currentUser, getUser]);

  return (
    <div className="wrapper">
      <div class="dropdown">
        {/* <button class="dropbtn"> */}
        <img src={imgIcon} alt="img" className="imgIcon" />
        {/* </button> */}

        <div class="dropdown-content">
          {/* links to each component  */}
          <Link to="/Profile"><p>My profile</p></Link>
          <Link
            to="/"
            onClick={() => {
              logout();
              setUserInfo("");
              navigate("/")
            }}
          ><p>
            Logout</p>
          </Link>
          <Link to="/Dashboard"><p>Home</p></Link>
        </div>
        
      </div>
      <img alt="Site Logo" src={Logo} className="logoImg" />
    </div>
  );
}
