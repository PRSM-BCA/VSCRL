import "./Profile.scss";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import profilePic from "../header/image/PImg.jpg";
import { Link } from "react-router-dom";
import Home from "./home.jpg";

export default function Profile() {
  const { login, logout, currentUser, getUser, getAllUsers } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [currentUser, getUser]);

  return (
    <div className="ProfileWrapper">
      <div className="header">
        <h1>Your Profile</h1>
        <Link to="/Dashboard">
          <img src={Home} alt="" />
        </Link>
      </div>

      <div className="profileBox">
        <img src={profilePic} alt="profilePic" />
        <h3>Welcome, {userInfo.firstname + " " + userInfo.lastname} </h3>
        <h4>
          Manage your info, privacy, and security to make VSRL work better for
          you.
        </h4>
        <div>
          <h1>Change password</h1>
          <input
            name="password"
            type="password"
            placeholder="New Password"
            required
            onChange={(evt) => {
              newPassword = setNewPassword(evt.target.value);
            }}
          />
          <input
            name="passwordConfirm"
            type="password"
            placeholder="Retype your new password"
            required
            onChange={(evt) => {
              confirmPassword = setConfirmPassword(evt.target.value);
            }}
          />
          <h1>
              Change Email</h1>
              <input
              name="emailAddress"
              type="text"
              placeholder="Email Address"
              required
              onChange={(evt) => {newEmail=(setNewEmail(evt.target.value))
              }}
            />
        </div>
      </div>
    </div>
  );
}
