import { useState, useEffect } from "react";
import './App.scss';
import { db } from './firebase-config.js';
import { collection, getDocs } from "firebase/firestore";

function App() {
//setting state for keyUsers to view data
const [setUsers, setUsers] = useState([]);
const usersCollectionRef = collection(db, "users")

useEffect (() => {
  const getUsers = async() => {
    const data = await getDocs(usersCollectionRef)
    console.log(data)
    //setUser state equal to array in our user collection
    //mapping through each document 
    //doc.data only returns Name and Age, not ID
    setKeyUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    console.log(data.docs)
  }; getKeyUsers()
}, [])




  return (
    <div className="App">
      {users.map((users) => {
        return <div>
          {" "}
          <h1>Name: {users.username}</h1>
        </div>
      })}
      <h1>PRSM!</h1>
      <p>This is scss...</p>
      <p>added</p>
    </div>
  );
}

export default App;
