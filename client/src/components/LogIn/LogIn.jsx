import React, {useState} from 'react'
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from 'react-router-dom'

export default function LogIn() {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const { login, logout, currentUser } = useAuth()
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    async function handleSubmit() {
        try {
          setErrorMessage("")
          await login(newEmail, newPassword)
          // navigate("/KeyWordAnswer", {replace: true})
        } catch (error) {
          console.log(error.message)
          setErrorMessage(error.message)
        }
      }

    async function handleLogOut() {
        setErrorMessage('')

        try {
            await logout()
            navigate("/")
        } catch {
            setErrorMessage("Failed to log out")
        }
    }
    
      return (
        <div className="LogIn">
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmit();
            }}
          >
            {errorMessage && <h2>{errorMessage}</h2>}
            <input
              name="emailAddress"
              type="text"
              placeholder="Email Address"
              required
              onChange={(evt) => {
                setNewEmail(evt.target.value)
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={(evt) => {
                setNewPassword(evt.target.value)
              }}
            />
            <input type ="submit" value="Log In" />
          </form>
          <form 
            onSubmit={(evt) => {
                evt.preventDefault();
                handleLogOut();
            }}>
                <input type="submit" value="Log Out"/>
            </form>
        </div>
      )
}
