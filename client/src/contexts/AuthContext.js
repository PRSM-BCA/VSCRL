import React, { useEffect, useState, useContext } from 'react'
import { authentication, db } from '../firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { collection, query, doc, setDoc, getDoc, getDocs, where } from "@firebase/firestore"

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {

    // CurrentUser from Authentication Collection
    const [currentUser, setCurrentUser] = useState()

    // Creates user with specific Uid from Authentication Collection
    async function signup(email, password, username, firstname, lastname, dob) {
        await createUserWithEmailAndPassword(authentication, email, password)
            .then(registeredUser => {
                    console.log(registeredUser)
                    setDoc(doc(db, "users", registeredUser.user.uid), {
                            email: email,
                            password: password,
                            username: username,
                            firstname: firstname,
                            lastname: lastname,
                            dob: dob
                        })
            })
    }

    // Grabs correct user from Authentication Collection
    function login(email, password) {
        return signInWithEmailAndPassword(authentication, email, password)
    }

    // Sets currentUser to "" or null
    function logout() {
        return authentication.signOut()
    }


    // // Grabs specific user from Users Collection using Authentication Uid
    // async function getUser(authUid) {
    //     const userDoc = doc(db, "users", authUid)
    //     console.log(userDoc)
    //     const userSnap = await getDoc(userDoc)

    //     return userSnap

    // }

    // Grabs all users from Users Collection and logs them
    async function getAllUsers() {
        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
            console.log(doc.uid, " => ", doc.data())
        })
    }


    // Sets currentUser when Authentication event occurs
    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    // Variables passed to components
    const value = {
        currentUser, 
        signup,
        login,
        logout,
        //getUser,
        getAllUsers
    }

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider> 
    )
}
