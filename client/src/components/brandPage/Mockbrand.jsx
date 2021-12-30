import "../questions/Question.scss";
import "./MockBrand.scss";
import React from "react";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import UserInfo from "./UserInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import ShortAnswer from "../questions/ShortAnswer";
import LongAnswer from "../questions/LongAnswer";
import MultipleChoice from "../questions/MultipleChoice";
import RankingAnswer from "../questions/RankingAnswer";
import KeyWordAnswer from "../questions/KeyWordAnswer";
import Footer from "../landing/Footer";

export default function Mockbrand(props) {
  const {
    currentUser,
    getUser,
    getSurvey,
    getBrand,
    addSurvey,
    addQuestionToAdminSurvey
  } = useAuth()
  const [userInfo, setUserInfo] = useState("");
  const [currentBrand, setCurrentBrand] = useState("");
  const [currentSurvey, setCurrentSurvey] = useState("");
  const [shortAnswer, setShortAnswer] = useState("");
  const [longAnswer, setLongAnswer] = useState("");
  const [multipleChoice, setMultipleChoice] = useState("");
  const [rankingAnswer, setRankingAnswer] = useState("");
  const [keyWordAnswer, setKeyWordAnswer] = useState("");
  const [scaleAnswer, setScaleAnswer] = useState("");
  const [surveyStart, setSurveyStart] = useState(false);
  const [keyWord1, setKeyWord1] = useState("");
  const [keyWord2, setKeyWord2] = useState("");
  const [keyWord3, setKeyWord3] = useState("");
  const [keyWord4, setKeyWord4] = useState("");
  const [keyWord5, setKeyWord5] = useState("");
  const [keyWord6, setKeyWord6] = useState("");
  const [keyWord7, setKeyWord7] = useState("");
  const [keyWord8, setKeyWord8] = useState("");
  const [rankAnswerObject, setRankAnswerObject] = useState([
    { id: 1, answer: "", position: 1 },
    { id: 2, answer: "", position: 2 },
    { id: 3, answer: "", position: 3 },
    { id: 4, answer: "", position: 4 },
    { id: 5, answer: "", position: 5 },
    { id: 6, answer: "", position: 6 },
    { id: 7, answer: "", position: 7 },
    { id: 8, answer: "", position: 8 }
  ]);

  const [gender, setGender] = useState([
    "Male",
    "Female",
    "Non-Binary",
    "Don't care to disclose",
  ]);
  const [experience, setExperience] = useState("");
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    console.log("rankAnswerObject", rankAnswerObject)


    if (currentUser && !userInfo) {
      window.scrollTo(0, 0);
      getUser(currentUser.uid).then((data) => setUserInfo(data));
      //console.log("inside currentUser");
      props.setSurveySubmitted(false);
    }

    if (!currentBrand) {
      getBrand("SurgeonShoes").then((data) => setCurrentBrand(data));
      //console.log("inside currentBrand");
    }

    if (!currentSurvey) {
      getSurvey("GX7nZYcm4q5qq3drETLm", "SurgeonShoeSurvey").then((data) => {
        console.log("inside currentSurvey", data);
        setCurrentSurvey(data);
        populateFields(data);
        addQuestionToAdminSurvey("UserCategories", {
          gender: gender,
          experience: experience,
          specialty: specialty,
        })
      })
    }

    setRankAnswerObject([
      { id: 1, answer: keyWord1, position: 1 },
      { id: 2, answer: keyWord2, position: 2 },
      { id: 3, answer: keyWord3, position: 3 },
      { id: 4, answer: keyWord4, position: 4 },
      { id: 5, answer: keyWord5, position: 5 },
      { id: 6, answer: keyWord6, position: 6 },
      { id: 7, answer: keyWord7, position: 7 },
      { id: 8, answer: keyWord8, position: 8 }
    ])

  }, [userInfo, addSurvey, surveyStart, currentSurvey, keyWord1, keyWord2, keyWord3, keyWord4, keyWord5, keyWord6, keyWord7, keyWord8]);

  function populateFields(currentSurvey) {
    if (currentSurvey) {
      setShortAnswer(
        currentSurvey.surveyList.SurgeonShoeSurvey.ShortAnswer.questionData
      );
      setLongAnswer(
        currentSurvey.surveyList.SurgeonShoeSurvey.LongAnswer.questionData
      );
      setMultipleChoice(
        currentSurvey.surveyList.SurgeonShoeSurvey.MultipleChoice.questionData
      );
      setRankingAnswer(
        currentSurvey.surveyList.SurgeonShoeSurvey.RankingAnswer.questionData
      );
      setKeyWordAnswer(
        currentSurvey.surveyList.SurgeonShoeSurvey.KeyWordQuestions.questionData
      );
      //setScaleAnswer(currentSurvey.surveyList.SurgeonShoeSurvey.ScaleAnswer.questionData)
    }
  }

  // console.log("currentSurvey", currentSurvey);
  // console.log("surveyStart", surveyStart);
  // console.log("ShortAnswer", shortAnswer);
  // console.log("LongAnswer", longAnswer);
  // console.log("MultipleChoice", multipleChoice);
  // console.log("RankingAnswer", rankingAnswer);
  // console.log("KeyWordAnswer", keyWordAnswer);
  // console.log("ScaleAnswer", scaleAnswer);

  return (
    <>
      <div className="Brand">
        {/* {console.log(currentSurvey)} */}
        <div id="brandWrapper">
        <h1>{currentBrand.brandName}</h1>
        <h2>
          <i>"{currentBrand.missionStatement}"</i>
        </h2>
        {userInfo.usertype === "admin" ? (
          <Link
            to="UserInfo"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              addSurvey(
                currentUser.uid,
                "GX7nZYcm4q5qq3drETLm",
                "SurgeonShoes",
                "SurgeonShoeSurvey"
              ).then(() => {
                setSurveyStart(true);
              });
            }}
          >
            Create Survey
          </Link>
        ) : (
          <Link
            disabled={gender && experience && specialty ? false : true}
            to="UserInfo"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              addSurvey(
                currentUser.uid,
                "GX7nZYcm4q5qq3drETLm",
                "SurgeonShoes",
                "SurgeonShoeSurvey"
              ).then(() => {
                setSurveyStart(true);
              });
            }}
          >
            Start Survey
          </Link>
        )}
        </div>
      </div>
      <UserInfo
        gender={gender}
        setGender={setGender}
        experience={experience}
        setExperience={setExperience}
        specialty={specialty}
        setSpecialty={setSpecialty}
      ></UserInfo>
      <ShortAnswer
        shortAnswer={shortAnswer}
        keyWord1={keyWord1}
        keyWord2={keyWord2}
        keyWord3={keyWord3}
        setKeyWord1={setKeyWord1}
        setKeyWord2={setKeyWord2}
        setKeyWord3={setKeyWord3}
      ></ShortAnswer>
      <LongAnswer longAnswer={longAnswer}></LongAnswer>
      <MultipleChoice multipleChoice={multipleChoice}></MultipleChoice>
      <KeyWordAnswer 
        keyWordAnswer={keyWordAnswer}
        keyWord4={keyWord4}
        keyWord5={keyWord5}
        keyWord6={keyWord6}
        keyWord7={keyWord7}
        keyWord8={keyWord8}
        setKeyWord4={setKeyWord4}
        setKeyWord5={setKeyWord5}
        setKeyWord6={setKeyWord6}
        setKeyWord7={setKeyWord7}
        setKeyWord8={setKeyWord8}
      ></KeyWordAnswer>
      <RankingAnswer
        rankingAnswer={rankingAnswer}
        rankAnswerObject={rankAnswerObject}
        setRankAnswerObject={setRankAnswerObject}
        surveySubmitted={props.surveySubmitted}
        setSurveySubmitted={props.setSurveySubmitted}
        keyWord1={keyWord1}
        keyWord2={keyWord2}
        keyWord3={keyWord3}
        keyWord4={keyWord4}
        keyWord5={keyWord5}
        keyWord6={keyWord6}
        keyWord7={keyWord7}
        keyWord8={keyWord8}
      ></RankingAnswer>
      </>
  );
}
