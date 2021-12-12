import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";

function ShortAnswer(props) {
  const { currentUser, getUser, addSurvey, addAdminSurvey, addQuestionToSurvey, addQuestionToAdminSurvey  } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [questionPrompt, setQuestionPrompt] = useState("");

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        <div className="ShortAnswer">
          <div className="mainContainer">
            <h1>
              Short Answer <i>(Admin)</i>
            </h1>
            <div className="questionWrapper">
              <input
                id="questionPrompt"
                type="text"
                placeholder="Enter question prompt here..."
                onChange={(evt) => {
                  setQuestionPrompt(evt.target.value)
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
          { !questionPrompt ?
            (
              <div className="linkDiv">
                <Link
                      to="UserInfo"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        addQuestionToAdminSurvey("ShortAnswer", {prompt: questionPrompt})
                      }}
                      >
                  Enter Short Answer
                </Link>
              </div>
            )
            : (

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
                        addQuestionToAdminSurvey("ShortAnswer", {prompt: questionPrompt})
                      }}
                      >
                  Enter Short Answer
                </Link>
              </div>
            )
          }
        </div>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <div className="ShortAnswer">
          <div className="mainContainer">
            <h1>
              Short Answer <i>(Key User)</i>
            </h1>
            <div className="questionWrapper">
              <h2 id="questionPrompt">Question Prompt</h2>
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
                    setQuestion1(evt.target.value);
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
                    setQuestion2(evt.target.value);
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
                    setQuestion3(evt.target.value);
                  }}
                />
              </section>
            </div>
          </div>
          { question1 && question2 && question3 ?
            (
              <button className="active" type="submit" onClick={() => {}}>
                Enter Question Info
              </button>
            )
            : (
              <button disabled type="submit" onClick={() => {}}>
              Enter Question Info
            </button>
            )
          }
        </div>
      </AuthProvider>
    );
  }
}

export default ShortAnswer;
