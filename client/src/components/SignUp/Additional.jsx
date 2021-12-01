import React from "react";

export default function Additional(props) {

    return (
      <div className="Additional">
        <input name="userName" type="text" placeholder="Enter a Username" required onChange={(evt) => {
          props.setNewUserName(evt.target.value)
        }}/>
        <input name="firstName" type="text" placeholder="First Name" required onChange={(evt) => {
          props.setNewFirstName(evt.target.value)
        }}/>
        <input name="lastName" type="text" placeholder="Last Name" required onChange={(evt) => {
          props.setNewLastName(evt.target.value)
        }}/>
        <input name="dob" type="date" placeholder="What is your date of birth?" required onChange={(evt) => {
          props.setDob(evt.target.value)
        }}/>
        <input type ="submit" disabled={props.submit} value="Submit" />
      </div>
    );
  
}
