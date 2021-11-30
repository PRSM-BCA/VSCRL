import React, {useRef, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setErrorMessage("Passwords do not match")
        }

        try {
            setErrorMessage('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch(error) {
            console.log(error.message)
            setErrorMessage(error.message)
        }

        setLoading(false)

    }

    return (
        <form onSubmit={handleSubmit}>
            {currentUser && <h2>{currentUser.email}</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
            <input name="emailAddress" type="text" placeholder="Email Address" required ref={emailRef}/>
            <input name="password" type="password" placeholder="Password" required ref={passwordRef}/>
            <input name="passwordConfirm" type="password" placeholder="Retype your password" required ref={passwordConfirmRef}/>
            <button disabled={loading} type="submit" >Submit</button>
        </form>
    )
}
