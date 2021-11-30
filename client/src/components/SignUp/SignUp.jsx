import { useState } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "./SignUp.scss";


function SignUp() {
  //setup state for username
  const [newUserName, setNewUserName] = useState("");
  //setup state for password
  const [newPassword, setNewPassword] = useState("");
  // create variable for collection reference
  const userCollectionRef = collection(db, "users");

  // create new username/password function
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      username: newUserName,
      password: newPassword,
    });
  };

  return (
    <div className="signUp">
        <h3>Create an Account</h3>
      <input
        type="text"
        placeholder="Create Username"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Create Password"
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <button onClick={createUser}>Submit</button>
    </div>
  );
}

export default SignUp;
