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

export default function Mockbrand(props) {
  const {
    currentUser,
    getUser,
    getSurvey,
    getBrand,
    addSurvey,
    addUserSurvey,
    addQuestionToAdminSurvey,
    addQuestionToUserSurvey
  } = useAuth();
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

  const [gender, setGender] = useState([
    "Male",
    "Female",
    "Non-Binary",
    "Don't care to disclose",
  ]);
  const [experience, setExperience] = useState("");
  const [specialty, setSpecialty] = useState("");

  useEffect(() => {
    console.log("currentUser", currentUser);
    console.log("userInfo", userInfo);
    console.log("currentBrand", currentBrand);
    console.log("currentSurvey", currentSurvey);
    console.log(props.surveySubmitted);

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
        setCurrentSurvey(data)
        populateFields(data);
        addQuestionToAdminSurvey("UserCategories", {
          gender: gender,
          experience: experience,
          specialty: specialty
        });
      });
    }
  }, [userInfo, addSurvey, surveyStart, currentSurvey]);

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

    console.log("currentSurvey", currentSurvey);
    console.log("surveyStart", surveyStart);
    console.log("ShortAnswer", shortAnswer);
    console.log("LongAnswer", longAnswer);
    console.log("MultipleChoice", multipleChoice);
    console.log("RankingAnswer", rankingAnswer);
    console.log("KeyWordAnswer", keyWordAnswer);
    console.log("ScaleAnswer", scaleAnswer);

  return (
    <AuthProvider>
      <div className="Brand">
        {console.log(currentSurvey)}
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
            ).then(() => {setSurveyStart(true)})
          }}
        >
          Start Survey
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
              ).then(() => {setSurveyStart(true)})
            }}
          >Start Survey</Link>
        )}
      </div>
      <UserInfo gender={gender} setGender={setGender} experience={experience} setExperience={setExperience} specialty={specialty} setSpecialty={setSpecialty}></UserInfo>
      <ShortAnswer shortAnswer={shortAnswer}></ShortAnswer>
      <LongAnswer longAnswer={longAnswer}></LongAnswer>
      <MultipleChoice multipleChoice={multipleChoice}></MultipleChoice>
      <KeyWordAnswer keyWordAnswer={keyWordAnswer}></KeyWordAnswer>
      <RankingAnswer
        rankingAnswer={rankingAnswer}
        surveySubmitted={props.surveySubmitted}
        setSurveySubmitted={props.setSurveySubmitted}
      ></RankingAnswer>
    </AuthProvider>
  );
}
