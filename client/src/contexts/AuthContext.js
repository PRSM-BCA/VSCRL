import React, { useEffect, useState, useContext } from 'react'
import { authentication, db } from '../firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "@firebase/firestore"

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password, username, firstname, lastname, dob) {
        createUserWithEmailAndPassword(authentication, email, password)
            .then(registeredUser => {
                    console.log(registeredUser)
                    const dbCollection = collection(db, "users")
                    addDoc(dbCollection, {
                        uid: registeredUser.user.uid,
                        email: email,
                        password: password,
                        username: username,
                        firstname: firstname,
                        lastname: lastname,
                        dob: dob
                    })
            })
    }

    function login(email, password) {
        return signInWithEmailAndPassword(authentication, email, password)
    }

    function logout() {
        return authentication.signOut()
    }

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser, 
        signup,
        login,
        logout
    }

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider> 
    )
}
