import React, {useRef, useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function SignUp() {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newUserName, setNewUserName] = useState("")
    const {signup, currentUser} = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(true)


    useEffect(() => {
        if (newEmail && newPassword && (newPassword === confirmPassword) && submit) {
            setSubmit(false)
        }
    }, [newEmail, newPassword, confirmPassword, submit, currentUser])

    async function handleSubmit() {
        if (newPassword !== confirmPassword) {
            return setErrorMessage("Passwords do not match")
        }
        try {
            setErrorMessage('')
            await signup(newEmail, newPassword)
        }
        catch(error) {
            console.log(error.message)
            setErrorMessage(error.message)
        }
        setLoading(false)
    }

    return (
        <form onSubmit={ (evt) => {
            evt.preventDefault()
            handleSubmit()
            setSubmit(true)
        }}>
            {currentUser && <h2>{currentUser.email}</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
            <input name="emailAddress" type="text" placeholder="Email Address" required onChange={ (evt) => {
                setNewEmail(evt.target.value)
            }}/>
            <input name="password" type="password" placeholder="Password" required onChange={ (evt) => {
                setNewPassword(evt.target.value)
            }}/>
            <input name="passwordConfirm" type="password" placeholder="Retype your password" required onChange={ (evt) => {
                setConfirmPassword(evt.target.value)
            }}/>
            <input disabled={submit} type="submit" value="Submit" />
        </form>
    )
}
// import { useState, useEffect } from "react";
// import { db } from "../../firebase-config";
// import { collection, addDoc } from "firebase/firestore";
// import { useAuth } from '../../contexts/AuthContext'
// import "./SignUp.scss";


// function SignUp() {
//   //setup state for username
//   const [newUserName, setNewUserName] = useState("");
//   //setup state for password
//   const [newPassword, setNewPassword] = useState("");
//   // setup state for confirming password
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [submit, setSubmit] = useState(false)
//   // Authentication
//   const { signup, currentUser } = useAuth()
//   const [newEmail, setNewEmail] = useState("")
//   const [errorMessage, setErrorMessage] = useState('')
//   const [loading, setLoading] = useState(false)
//   // create variable for collection reference
//   const userCollectionRef = collection(db, "users");

//   // create new username/password function
// useEffect(async()=> {
// if (newEmail && newPassword && (newPassword === confirmPassword) && !submit) {
// setSubmit(true)
// } 
// }, [])

// return (
//     <div className="signUp">
//         <h3>Create an Account</h3>
//         {currentUser && <h2>{currentUser.email}</h2>}
//             {errorMessage && <h2>{errorMessage}</h2>}
//       <input
//         type="text"
//         placeholder="Enter Email Address"
//         onChange={(event) => {
//           setNewEmail(event.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Create Password"
//         onChange={(event) => {
//           setNewPassword(event.target.value);
//         }}
//       />
//       <input 
//       type="text"
//       placeholder="Confirm Password"
//       onChange={(event)=>{
//         setConfirmPassword(event.target.value)
//       }}
//       />
//       <button disabled={submit} onClick={()=>{signup()
//       setSubmit(false)}}>Submit</button>
//     </div>
//   );
// }

// export default SignUp;