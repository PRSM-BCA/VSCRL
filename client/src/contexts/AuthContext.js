import React, { useEffect, useState, useContext } from 'react'
import { authentication, db } from '../firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import { collection, doc, setDoc, updateDoc, push, getDoc, getDocs, arrayUnion } from "@firebase/firestore"

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {

    // CurrentUser from Authentication Collection
    const [currentUser, setCurrentUser] = useState()

    // CurrentBrand from Brand Collection
    const [currentBrand, setCurrentBrand] = useState()

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

    async function updateAuthPassword(password) {
        await updatePassword(currentUser, password)
    }

    // Grabs correct user from Authentication Collection
    function login(email, password) {
        return signInWithEmailAndPassword(authentication, email, password)
    }

    // Sets currentUser to "" or null
    function logout() {
        return authentication.signOut()
    }

    // Gets User based off Authentication Uid
    async function getUser(authUid) {
        const userDoc = await doc(db, "users", authUid)
        const userSnap = await getDoc(userDoc)

        return userSnap.data()
    }

    // Add user record to Survey
    async function addSurvey(authUid, surveyId, brandName, surveyName) {
        let brandRef = await getDoc(doc(db, "brands", brandName))
        brandRef = brandRef.data()
        let surveyRef = await setDoc(doc(db, "surveys", surveyId, authUid, surveyName), brandRef)
        //console.log(surveyRef)
        await updateDoc(doc(db, "users", authUid), {surveyList: arrayUnion({
            surveyId: surveyId,
            inProgress: true
        })}, {capital: true}, {merge: true})
        return surveyRef
    }

    // Add question collection to specific user survey
    async function addQuestionToUserSurvey(authUid, surveyId, surveyName, questionType, questionData) {
        let surveyRef = await updateDoc(doc(db, "surveys", surveyId, authUid, surveyName), {[`surveyList.SurgeonShoeSurvey.${questionType}`]: {questionData}}, {merge: true})
        return surveyRef
    }

    async function addAdminSurvey(surveyId) {
        await updateDoc(doc(db, "brands", "SurgeonShoes"), {
            surveyId: surveyId
        }, {capital: true}, {merge: true})
    }

    async function addQuestionToAdminSurvey(questionType, questionData) {
        let surveyRef = await updateDoc(doc(db, "brands", "SurgeonShoes"), {[`surveyList.SurgeonShoeSurvey.${questionType}`]: {questionData}}, {merge: true})
        return surveyRef
    }

    async function getBrand(brandName) {
        let brandRef = await getDoc(doc(db, "brands", brandName))
        return brandRef.data()
    }

    // Get survey from database
    async function getSurvey(surveyId, surveyName) {
        let surveyRef = await getDoc(doc(db, "surveys", surveyId, currentUser.uid, surveyName))
        return surveyRef.data()
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
        updateAuthPassword,
        getUser,
        getSurvey,
        addSurvey,
        addAdminSurvey,
        addQuestionToUserSurvey,
        addQuestionToAdminSurvey,
        getBrand
    }

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider> 
    )
}
