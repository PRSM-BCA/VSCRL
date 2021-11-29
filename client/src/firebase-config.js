// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

//The firebase configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "prsm-d7c3a.firebaseapp.com",
    projectId: "prsm-d7c3a",
    storageBucket: "prsm-d7c3a.appspot.com",
    messagingSenderId: "194694059065",
    appId: "1:194694059065:web:ba7ef40b7d3078ee6929e8",
    measurementId: "G-E3KDER2D64"
  };



//'app' will initialize firebase 
const app = initializeApp(firebaseConfig)
//exporting the variable db so we can access it's data in other files 
export const db = getFirestore(app) 


