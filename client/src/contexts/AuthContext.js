import React, { useEffect, useState, useContext } from 'react'
import { authentication } from '../firebase-config'
import {createUserWithEmailAndPassword } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return createUserWithEmailAndPassword(authentication, email, password)
    }

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser, 
        signup
    }

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider> 
    )
}
