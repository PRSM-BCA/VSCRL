// import React, {useEffect, useRef, useState} from 'react'
// import { useAuth } from '../../contexts/AuthContext'
// import { db } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import "./SignUp.scss";

// export default function SignUp() {

//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const passwordConfirmRef = useRef()
//     const { signup, currentUser } = useAuth()
//     const [errorMessage, setErrorMessage] = useState('')
//     const [loading, setLoading] = useState(false)

//     async function handleSubmit(e) {
//         e.preventDefault()

//         if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//             return setErrorMessage("Passwords do not match")
//         }

//         try {
//             setErrorMessage('')
//             setLoading(true)
//             await signup(emailRef.current.value, passwordRef.current.value)
//         }
//         catch(error) {
//             console.log(error.message)
//             setErrorMessage(error.message)
//         }

//         setLoading(false)

//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             {currentUser && <h2>{currentUser.email}</h2>}
//             {errorMessage && <h2>{errorMessage}</h2>}
//             <input name="emailAddress" type="text" placeholder="Email Address" required ref={emailRef}/>
//             <input name="password" type="password" placeholder="Password" required ref={passwordRef}/>
//             <input name="passwordConfirm" type="password" placeholder="Retype your password" required ref={passwordConfirmRef}/>
//             <button disabled={loading} type="submit" >Submit</button>
//         </form>
//     )
// }

//------------------------------------------- Sophie's changes 
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext'
import "./SignUp.scss";


function SignUp() {
  //setup state for username
  const [newUserName, setNewUserName] = useState("");
  //setup state for password
  const [newPassword, setNewPassword] = useState("");
  // setup state for confirming password
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submit, setSubmit] = useState(false)
  // Authentication
  const { signup, currentUser } = useAuth()
  const [newEmail, setNewEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  // create variable for collection reference
  const userCollectionRef = collection(db, "users");

  // create new username/password function
useEffect(async()=> {
if (newEmail && newPassword && (newPassword === confirmPassword) && !submit) {
setSubmit(true)
} 
}, [submit]) 


  // const createUser = async () => {
  //   await addDoc(userCollectionRef, {
  //     email: newEmail,
  //     password: newPassword,
  //   });
  // };

  return (
    <div className="signUp">
        <h3>Create an Account</h3>
        {currentUser && <h2>{currentUser.email}</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
      <input
        type="text"
        placeholder="Enter Email Address"
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Create Password"
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <input 
      type="text"
      placeholder="Confirm Password"
      onChange={(event)=>{
        setConfirmPassword(event.target.value)
      }}
      />
      <button disabled={submit} onClick={()=>{signup()
      setSubmit(false)}}>Submit</button>
    </div>
  );
}

export default SignUp;
