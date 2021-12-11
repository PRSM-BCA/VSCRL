import React, { useEffect, useState, useContext } from 'react'
import { authentication, db } from '../firebase-config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import { collection, doc, setDoc, updateDoc, getDoc, getDocs, arrayUnion } from "@firebase/firestore"

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

    // Grabs all users from Users Collection and logs them
    async function getAllUsers() {
        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
            console.log(doc.uid, " => ", doc.data())
        })
    }
    
    // Get survey from database
    async function getSurvey(authUid, surveyId) {
        let surveyRef = await getDocs(collection(db, "surveys/" + surveyId + "/" + authUid))
        let surveyInfo = []
        surveyRef.forEach((doc) => {
            surveyInfo.push(doc.data())
        })
        return surveyInfo
    }

    // Grabs all users from Users Collection and logs them
    async function getAllSurveys() {
        const surveyRef = await getDocs(collection(db, "surveys"))
        let surveyQuestions = []
        surveyRef.forEach((doc) => {
            surveyQuestions.push(doc.data())
        })
        return surveyQuestions
    }

    // Grabs survey questions of specific user's survey
    async function getSurveyQuestions(authUid, surveyId) {
        let surveyRef = await getDoc(doc(db, "surveys/" + surveyId + "/" + authUid + "/Questions"))
        return surveyRef.data()
    }

    // Gets user information from specific survey
    async function getUserFromSurvey(authUid, surveyId) {
        let surveyRef = await getDoc(doc(db, "surveys/" + surveyId + "/" + authUid + "/UserInfo"))
        return surveyRef.data()
    }

    // Add user record to Survey
    async function addSurvey(user, authUid, surveyId) {
        let surveyRef = await setDoc(doc(db, "surveys", surveyId, authUid, "UserInfo"), {user: user})
        console.log("Reached")
        await updateDoc(doc(db, "users", authUid), {surveyList: arrayUnion({
            surveyId: surveyId,
            inProgress: true
        })}, {capital: true}, {merge: true})
        return surveyRef
    }

    // Add question collection to specific user survey
    async function addQuestionToUserSurvey(authUid, surveyId, questionType, questionData) {
        let surveyRef = await setDoc(doc(db, "surveys", surveyId, authUid, "Questions"), {[questionType]: questionData})
        return surveyRef
    }


    async function addBrand(brandId, brandName, missionStatement) {
        let brandRef = await setDoc(doc(db, "brands", brandId), {brandName: brandName, missionStatemnt: missionStatement})
        return brandRef
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
        getAllUsers,
        getSurvey,
        getAllSurveys,
        getSurveyQuestions,
        getUserFromSurvey,
        addSurvey,
        addQuestionToUserSurvey
    }

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider> 
    )
}
