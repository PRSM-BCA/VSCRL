import React, {useRef, useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Additional from './Additional'

export default function SignUp(props) {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newUserName, setNewUserName] = useState("")
    const {signup, currentUser} = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(true)
    const [additionalPage, setAdditionalPage] = useState(false)


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
        <div className="SignUp">
        <form onSubmit={ (evt) => {
            evt.preventDefault()
            handleSubmit()
            setSubmit(true)
        }}>
            {currentUser && <h2>{currentUser.email}</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
            {!additionalPage ? (<div>
            <input name="emailAddress" type="text" placeholder="Email Address" required onChange={ (evt) => {
                setNewEmail(evt.target.value)
            }}/>
            <input name="password" type="password" placeholder="Password" required onChange={ (evt) => {
                setNewPassword(evt.target.value)
            }}/>
            <input name="passwordConfirm" type="password" placeholder="Retype your password" required onChange={ (evt) => {
                setConfirmPassword(evt.target.value)
            }}/>
            <button disabled={submit} onClick={()=>{setAdditionalPage(true)}}  value="Submit">Sign Up</button></div>):(<Additional></Additional>)}
        </form>
        </div>
    )
}
