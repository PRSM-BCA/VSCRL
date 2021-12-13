import "./Profile.scss";
import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import profilePic from "../header/image/PImg.jpg";
import { Link } from "react-router-dom";
import Home from "./home.jpg";
import Header from "../header/Header";
import BarChartDisplay from "../chart/BarChartDisplay";

export default function Profile() {
  const {
    login,
    logout,
    updateAuthPassword,
    currentUser,
    getUser,
    getAllUsers,
    getBrand,
  } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [brand, setBrand] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    if (currentUser && !userInfo && !brand) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
      getBrand("SurgeonShoes").then((data) => setBrand(data));
    }
  }, [getUser, userInfo, currentUser]);

  async function handleSubmit() {
    if (newPassword !== confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }
    try {
      setErrorMessage("");
      await updateAuthPassword(currentUser, newPassword);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  }

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        <div className="AdminProfile">
          <div className="adminPanel">
            <div className="genderTab">
              <ul></ul>
            </div>
            <div className="experienceTab">
              <ul></ul>
            </div>
            <div className="specialtyTab">
              <ul></ul>
            </div>
          </div>
          <div className="displayDiv">
            <h1>Surgeon Shoe Survey</h1>
              <BarChartDisplay></BarChartDisplay>
            <div className="infoDiv">
                <div className="needsDiv">
                  <h3>Top 5 Overall Needs</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="featuresDiv">
                  <h3>Top 5 Overall Features</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="buzzwordsDiv">
                  <h3>Top 5 Overall Buzz Words</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <div className="ProfileWrapper">
          <svg
            className="topSvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#F1A61E"
              fill-opacity="1"
              d="M0,224L30,213.3C60,203,120,181,180,154.7C240,128,300,96,360,74.7C420,53,480,43,540,58.7C600,75,660,117,720,117.3C780,117,840,75,900,48C960,21,1020,11,1080,21.3C1140,32,1200,64,1260,85.3C1320,107,1380,117,1410,122.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
          <div className="Header">
            <Header />
          </div>

          <div className="profileBox">
            <img src={profilePic} alt="profilePic" />
            <h3 className="textBox">
              Welcome, {userInfo.firstname + " " + userInfo.lastname}{" "}
            </h3>
            <h4 className="textBoxx">
              Manage your info, privacy, and security to make VSRL work better
              for you.
            </h4>
            <div>
              <h1>Change password</h1>
              <div className="changePDiv">
                <form
                  action=""
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit();
                  }}
                >
                  <input
                    name="password"
                    type="password"
                    placeholder="New Password"
                    required
                    onChange={(evt) => {
                      setNewPassword(evt.target.value);
                    }}
                  />
                  <input
                    name="passwordConfirm"
                    type="password"
                    placeholder="Retype your new password"
                    required
                    onChange={(evt) => {
                      setConfirmPassword(evt.target.value);
                    }}
                  />
                  <input
                    type="submit"
                    id="inputSubmit"
                    value="Change password"
                  />
                </form>
              </div>

              <h1>Change Email</h1>
              <div className="changeEDiv">
                <form
                  action=""
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit();
                  }}
                >
                  <input
                    name="emailAddress"
                    type="text"
                    placeholder="Email Address"
                    required
                    onChange={(evt) => {
                      setNewEmail(evt.target.value);
                    }}
                  />
                  <input type="submit" id="inputSubmit" value="Change Email" />
                </form>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1B75BC"
              fill-opacity="1"
              d="M0,256L40,224C80,192,160,128,240,117.3C320,107,400,149,480,165.3C560,181,640,171,720,186.7C800,203,880,245,960,250.7C1040,256,1120,224,1200,197.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </AuthProvider>
    );
  }
}
