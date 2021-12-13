import "../questions/Question.scss";
import "./MockBrand.scss";
import React from 'react'
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import UserInfo from "./UserInfo";
import { Link, animateScroll as scroll } from "react-scroll";
import ShortAnswer from "../questions/ShortAnswer";
import LongAnswer from "../questions/LongAnswer";
import MultipleChoice from "../questions/MultipleChoice";
import RankingAnswer from "../questions/RankingAnswer";
import KeyWordAnswer from "../questions/KeyWordAnswer";

export default function Mockbrand() {

    const { currentUser, getUser, getSurvey, getBrand, addSurvey } = useAuth();
    const [userInfo, setUserInfo] = useState("");
    const [currentBrand, setCurrentBrand] = useState("")
    const [currentSurvey, setCurrentSurvey] = useState("")
    const [shortAnswer, setShortAnswer] = useState("")
    const [longAnswer, setLongAnswer] = useState("")
    const [multipleChoice, setMultipleChoice] = useState("")
    const [rankingAnswer, setRankingAnswer] = useState("")
    const [keyWordAnswer, setKeyWordAnswer] = useState("")
    const [scaleAnswer, setScaleAnswer] = useState("")


    useEffect(() => {
        if (currentUser && !userInfo && !currentBrand) {
          getUser(currentUser.uid).then((data) => setUserInfo(data));
          getBrand("SurgeonShoes").then((data) => setCurrentBrand(data))
          setCurrentSurvey(getSurvey(currentUser.uid, "GX7nZYcm4q5qq3drETLm", "SurgeonShoeSurvey").then((data) => setCurrentSurvey(data)))
        }

        window.scrollTo(0, 0)
      }, [getUser, userInfo, currentUser, currentBrand, getBrand]);


      function populateFields() {
        setShortAnswer(currentSurvey.surveyList.SurgeonShoeSurvey.ShortAnswer.questionData)
        setLongAnswer(currentSurvey.surveyList.SurgeonShoeSurvey.LongAnswer.questionData)
        setMultipleChoice(currentSurvey.surveyList.SurgeonShoeSurvey.MultipleChoice.questionData)
        setRankingAnswer(currentSurvey.surveyList.SurgeonShoeSurvey.RankingAnswer.questionData)
        setKeyWordAnswer(currentSurvey.surveyList.SurgeonShoeSurvey.KeyWordQuestions.questionData)
        //setScaleAnswer(currentSurvey.surveyList.SurgeonShoeSurvey.ScaleAnswer.questionData)
      }


    return (
        <AuthProvider>
            <div className="Brand">
                {console.log("currentSurvey", currentSurvey)}
                {console.log("ShortAnswer", shortAnswer)}
                {console.log("LongAnswer", longAnswer)}
                {console.log("MultipleChoice", multipleChoice)}
                {console.log("RankingAnswer", rankingAnswer)}
                {console.log("KeyWordAnswer", keyWordAnswer)}
                {console.log("ScaleAnswer", scaleAnswer)}
                <h1>{currentBrand.brandName}</h1>
                <h2><i>"{currentBrand.missionStatement}"</i></h2>
                <Link
                    to="UserInfo"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => {
                        addSurvey(currentUser.uid, "GX7nZYcm4q5qq3drETLm", "SurgeonShoes", "SurgeonShoeSurvey")
                        populateFields()
                    }
                    }
                    >
                    Start Survey
                </Link>
            </div>
            <UserInfo></UserInfo>
            <ShortAnswer shortAnswer={shortAnswer}></ShortAnswer>
            <LongAnswer longAnswer={longAnswer}></LongAnswer>
            <MultipleChoice multipleChoice={multipleChoice}></MultipleChoice>
            <RankingAnswer rankingAnswer={rankingAnswer}></RankingAnswer>
            <KeyWordAnswer keyWordAnswer={keyWordAnswer}></KeyWordAnswer>
        </AuthProvider>
    )
}
