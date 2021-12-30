import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";
import Icon from "../landing/media/icon.png";
import { arrayUnion } from "@firebase/firestore"


function ShortAnswer(props) {
  const {
    currentUser,
    getUser,
    addSurvey,
    addAdminSurvey,
    addQuestionToUserSurvey,
    addQuestionToAdminSurvey,
  } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [questionPrompt, setQuestionPrompt] = useState("");

  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
    return (
      <div className="ShortAnswer">
        <div className="mainContainer">
          <h1>Short Answer</h1>
          <div className="questionWrapper">
            <input
              id="questionPrompt"
              type="text"
              placeholder="Enter question prompt here..."
              onChange={(evt) => {
                setQuestionPrompt(evt.target.value);
              }}
            />
            <section>
              <p>
                <i>#1</i>
              </p>
              <input
                disabled
                className="questionInput"
                type="text"
                name="question answer 1"
                placeholder="User answer goes here..."
              />
            </section>

            <section>
              <p>
                <i>#2</i>
              </p>
              <input
                disabled
                className="questionInput"
                type="text"
                name="question answer 2"
                placeholder="User answer goes here..."
              />
            </section>

            <section>
              <p>
                <i>#3</i>
              </p>
              <input
                disabled
                className="questionInput"
                type="text"
                name="question answer 3"
                placeholder="User answer goes here..."
              />
            </section>
          </div>
        </div>
        {!questionPrompt ? (
          <div className="linkDiv">
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                addQuestionToAdminSurvey("ShortAnswer", {
                  prompt: questionPrompt,
                });
              }}
            >
              Enter Short Answer
            </Link>
          </div>
        ) : (
          <div className="linkDiv">
            <Link
              disabled="true"
              className="active"
              to="LongAnswer"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                addQuestionToAdminSurvey("ShortAnswer", {
                  prompt: questionPrompt,
                });
              }}
            >
              Enter Short Answer
            </Link>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="ShortAnswer">
        <div className="mainContainer">
          <img src={Icon} alt="VSCRL Logo" width="175px" height="auto" />
          <div className="questionWrapper">
            <h2 id="questionPrompt">{props.shortAnswer.prompt}</h2>
            <section>
              <p>
                <i>#1</i>
              </p>
              <input
                className="questionInput"
                type="text"
                name="question answer 1"
                placeholder="Type answer here..."
                onChange={(evt) => {
                  setAnswer1(evt.target.value);
                }}
              />
            </section>

            <section>
              <p>
                <i>#2</i>
              </p>
              <input
                className="questionInput"
                type="text"
                name="question answer 2"
                placeholder="Type answer here..."
                onChange={(evt) => {
                  setAnswer2(evt.target.value);
                }}
              />
            </section>

            <section>
              <p>
                <i>#3</i>
              </p>
              <input
                className="questionInput"
                type="text"
                name="question answer 3"
                placeholder="Type answer here..."
                onChange={(evt) => {
                  setAnswer3(evt.target.value);
                }}
              />
            </section>
          </div>
        </div>
        {answer1 && answer2 && answer3 ? (
          <div className="linkDiv">
            <Link
              to="LongAnswer"
              className="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                addQuestionToUserSurvey(
                  currentUser.uid,
                  "GX7nZYcm4q5qq3drETLm",
                  "SurgeonShoeSurvey",
                  "ShortAnswer",
                  {
                    keyWord1: answer1,
                    keyWord2: answer2,
                    keyWord3: answer3
                  }
                )
                props.setKeyWord1(answer1)
                props.setKeyWord2(answer2)
                props.setKeyWord3(answer3)
              }}
            >
              Enter Short Answer
            </Link>
          </div>
        ) : (
          <div className="linkDiv">
            <Link
              disabled="true"
              to="LongAnswer"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Enter Short Answer
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ShortAnswer;
