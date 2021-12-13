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

    const { currentUser, getUser, getBrand } = useAuth();
    const [userInfo, setUserInfo] = useState("");
    const [currentBrand, setCurrentBrand] = useState("")


    useEffect(() => {
        if (currentUser && !userInfo) {
          getUser(currentUser.uid).then((data) => setUserInfo(data));
          getBrand("SurgeonShoes").then((data) => setCurrentBrand(data))
        }
        window.scrollTo(0, 0)
      }, [getUser, userInfo, currentUser, getBrand]);

    if (userInfo.usertype === "admin") {
    return (
        <AuthProvider>
            <div className="Brand">
                <h1>{currentBrand.brandName}</h1>
                <h2><i>"{currentBrand.missionStatement}"</i></h2>
                <Link
                    to="UserInfo"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                    <button type="submit">Start Survey</button>
                </Link>
            </div>
            <UserInfo></UserInfo>
            <ShortAnswer></ShortAnswer>
            <LongAnswer></LongAnswer>
            <MultipleChoice></MultipleChoice>
            <RankingAnswer></RankingAnswer>
            <KeyWordAnswer></KeyWordAnswer>
        </AuthProvider>
    )
    }
    else {
        return (
            <AuthProvider>
            <div className="Brand">
                <h1>{currentBrand.brandName}</h1>
                <h2><i>"{currentBrand.missionStatement}"</i></h2>
                <Link
                    to="UserInfo"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                    <button type="submit">Start Survey</button>
                </Link>
            </div>
            <UserInfo></UserInfo>
            <ShortAnswer></ShortAnswer>
            <LongAnswer></LongAnswer>
            <MultipleChoice></MultipleChoice>
            <RankingAnswer></RankingAnswer>
            <KeyWordAnswer></KeyWordAnswer>
        </AuthProvider>
        )
    }
}
