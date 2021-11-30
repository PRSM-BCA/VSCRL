import React, { useEffect, useState, useContext } from 'react'
import { authentication, db } from '../firebase-config'
import {createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "@firebase/firestore"

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    createUserWithEmailAndPassword(authentication, email, password).then(
      (registeredUser) => {
        console.log(registeredUser);
        const dbCollection = collection(db, "users");
        addDoc(dbCollection, {
          uid: registeredUser.user.uid,
          email: email,
          password: password,
        });
      }
    );
  }

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
