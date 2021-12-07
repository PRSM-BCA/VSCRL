import './Header.scss';
import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Logo from '../landing/Vscrl_Logo.png'
import { useState } from 'react'
import { authentication, db } from '../../firebase-config'
import { doc, getDoc } from "@firebase/firestore"

export default function Header() {

    const [isLoggingIn, setLoggingIn] = useState(false)
    const { login, logout, currentUser, getUser, getAllUsers, getSurvey, getSurveyQuestions, getAllSurveys, getUserFromSurvey, addUserToSurvey, addQuestionToUserSurvey } = useAuth();
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [userInfo, setUserInfo] = useState("")
    const [currentSurvey, setCurrentSurvey] = useState("")
    const [allSurveys, setAllSurveys] = useState("")
    const [surveyWrite, setSurveyWrite] = useState("")
    const [addedQuestion, setAddedQuestion] = useState("")

    const navigate = useNavigate()

    async function handleSubmit() {
        try {
          setErrorMessage("")
          await login(emailAddress, password)
          navigate("/Dashboard", {replace: true})
        } catch (error) {
          console.log(error.message)
          setErrorMessage(error.message)
        }
      }


    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            getUser(currentUser.uid).then(data => setUserInfo(data))            
            if (userInfo) {
                
            }
        }
    }, [currentUser, getUser, addUserToSurvey, addQuestionToUserSurvey, getAllSurveys]) 

    return (
        <div className="Header">
            <img alt="Site Logo" src={Logo}/>

            
            {console.log(userInfo)}
            {userInfo ? <h1>{userInfo.firstname + " " + userInfo.lastname}</h1> : null}
            {
                currentUser ? (
                    <div id="signInContainer">
                        {/*currentUser ? console.log(userInfo) : <h2>No current user</h2>*/}
                        <button onClick={() => {
                            logout()
                            setUserInfo("")
                        }}>Logout</button>
                    </div>
                ) 
                :
                (
                    <div id="signInContainer">

                        {
                            isLoggingIn ? (
                                <form name="logInForm" onSubmit={(evt) => {
                                    evt.preventDefault()
                                    handleSubmit()
                                    setLoggingIn(false)
                                }}>
                                    <input type="text" placeholder="Email Address" onChange={ (evt) => {
                                        setEmailAddress(evt.target.value)
                                    }}/>
                                    <input type="password" placeholder="Password" onChange={ (evt) => {
                                        setPassword(evt.target.value)
                                    }}/>
                                    <input type="submit" value="Log In" />
                                </form>
                            )
                             : (
                                null
                             )
                        }


                        <button disabled={isLoggingIn} onClick={() => {
                            setLoggingIn(true)
                            //navigate("/")
                        }}>Log In</button>

                        <button onClick={() => {
                            navigate("/")
                        }}>Sign Up</button>
                    </div>
                )
            }
        </div>
    )
}
