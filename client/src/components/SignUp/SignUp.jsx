import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom'
import LogIn from "../LogIn/LogIn";

import Additional from "./Additional";
import Primary from "./Primary";

export default function SignUp() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [dob, setDob] = useState("")
  const { signup, currentUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [submit, setSubmit] = useState(true);
  const [additionalPage, setAdditionalPage] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if ((newEmail && newPassword && newPassword === confirmPassword && submit) || (newUserName &&newFirstName && newLastName && dob)) {
      setSubmit(false);
    }
  }, [newEmail, newPassword, confirmPassword, submit, currentUser]);

  async function handleSubmit() {
    if (newPassword !== confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }
    try {
      setErrorMessage("");
      await signup(newEmail, newPassword, newUserName, newFirstName, newLastName, dob);
      // navigate("/KeyWordAnswer", {replace: true})
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="SignUp">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
          setSubmit(true);
        }}
      >
        {currentUser ? <h2>{currentUser.email}</h2> : <h2>No current user</h2>}
        {errorMessage && <h2>{errorMessage}</h2>}
        {!additionalPage ? (
          <Primary newEmail={newEmail} setNewEmail={setNewEmail} setNewPassword={setNewPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} newUserName={newUserName} setNewUserName={setNewUserName} submit={submit} setSubmit={setSubmit} additionalPage={additionalPage} setAdditionalPage={setAdditionalPage} newFirstName={newFirstName} setNewFirstName={setNewFirstName} newLastName={newLastName} setNewLastName={setNewLastName} dob={dob} setDob={setDob}></Primary>
        ) : (
          <Additional newEmail={newEmail} setNewEmail={setNewEmail} setNewPassword={setNewPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} newUserName={newUserName} setNewUserName={setNewUserName} submit={submit} setSubmit={setSubmit} additionalPage={additionalPage} setAdditionalPage={setAdditionalPage} newFirstName={newFirstName} setNewFirstName={setNewFirstName} newLastName={newLastName} setNewLastName={setNewLastName} dob={dob} setDob={setDob}></Additional>
        )}
      </form>
    </div>
  );
}
