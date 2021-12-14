import React from "react";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";

export default function UserInfo() {
  const {
    currentUser,
    getUser,
    addSurvey,
    addAdminSurvey,
    addQuestionToSurvey,
    addQuestionToUserSurvey,
    addQuestionToAdminSurvey,
  } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  const [gender, setGender] = useState(["Male", "Female", "Non-Binary", "Don't care to disclose"]);
  const [experience, setExperience] = useState("");
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        {console.log(gender)}
        {console.log(experience)}
        {console.log(specialty)}
        <div className="UserInfo">
          <h1>
            <b>UserInfo</b>
          </h1>
          <div id="selectContainer">
            <div>
              <h2>Gender</h2>
              <select
                disabled="true"
                onChange={(evt) => {
                  console.log(gender);
                  setGender(evt.target.value);
                }}
              >
                <option selected disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Choose not to disclose">
                  Choose not to disclose
                </option>
              </select>
            </div>
            <div>
              <h2>Experience</h2>
                <textarea className="practice" placeholder="Enter what categories of experience you'd like this survey to contain seperated by a ',' i.e '0-5 Years, 5-10 Years, etc.'" onChange={ (evt) => {
                    setExperience(evt.target.value.replace(" ", "").split(","))
                }}>

                </textarea>
            </div>
            <div>
              <h2>Specialty</h2>
              <textarea className="practice" placeholder="Enter what categories of practice you'd like this survey to contain seperated by a ',' i.e 'Cardiology, Colorectomy, etc.'" onChange={ (evt) => {
                    setSpecialty(evt.target.value.split(","))
                }}>

                </textarea>
            </div>
          </div>
          <Link
            disabled={experience && specialty ? "true" : "false"}
            to="ShortAnswer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              addQuestionToAdminSurvey("UserCategories", {gender: gender, experience: experience, specialty: specialty})
            }}
          >
            Enter User Info
          </Link>
        </div>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <div className="UserInfo">
          <h1>
            <b>UserInfo</b>
          </h1>
          <div id="selectContainer">
            <div>
              <h2>Gender</h2>
              <select
                onChange={(evt) => {
                  setGender(evt.target.value);
                }}
              >
                <option selected disabled>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Choose not to disclose">
                  Choose not to disclose
                </option>
              </select>
            </div>
            <div>
              <h2>Years of Practice</h2>
              <select
                onChange={(evt) => {
                  setExperience(evt.target.value);
                }}
              >
                <option selected disabled>
                  Years of Practice
                </option>
                <option value="0-5 years">0-5 years</option>
                <option value="5-10 years">5-10 years</option>
                <option value="10-20 years">10-20 years</option>
                <option value="+20 years">+20 years</option>
              </select>
            </div>
            <div>
              <h2>Specialty</h2>
              <select
                onChange={(evt) => {
                  setSpecialty(evt.target.value);
                }}
              >
                <option selected disabled>
                  Specialty
                </option>
                <option value="Cardiothoracic">Cardiothoracic</option>
                <option value="Colorectal">Colorectal </option>
                <option value="Craniofacial">Craniofacial</option>
                <option value="Endocrine">Endocrine</option>
                <option value="ENT">ENT</option>
                <option value="General">General</option>
                <option value="OB Gyn">OB Gyn</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Orthopedic">Orthopedic</option>
                <option value="Pediatric">Pediatric</option>
                <option value="Plastics">Dental</option>
                <option value="Podiatric">Podiatric</option>
                <option value="Surg. Oncology">Surg. Oncology</option>
                <option value="Thoracic">Thoracic</option>
                <option value="Transplant">Transplant</option>
                <option value="Trauma">Trauma</option>
                <option value="Upper GI">Upper GI</option>
                <option value="Urology">Urology</option>
                <option value="Vascular">Vascular</option>
              </select>
            </div>
          </div>
          <Link
            to="ShortAnswer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              addQuestionToUserSurvey(currentUser.uid, "GX7nZYcm4q5qq3drETLm", "SurgeonShoeSurvey", "UserCategories", {genderAnswer: gender, experienceAnswer: experience, specialtyAnswer: specialty})
            }}
          >
            Enter User Info
          </Link>
        </div>
      </AuthProvider>
    );
  }
}
