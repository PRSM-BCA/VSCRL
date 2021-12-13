import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";

function MultipleChoice(props) {
  const {
    currentUser,
    getUser,
    addSurvey,
    addAdminSurvey,
    addQuestionToSurvey,
    addQuestionToAdminSurvey,
  } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [selectedYes1, setSelectedYes1] = useState(false);
  const [selectedNo1, setSelectedNo1] = useState(false);
  const [selectedYes2, setSelectedYes2] = useState(false);
  const [selectedNo2, setSelectedNo2] = useState(false);
  const [selectedYes3, setSelectedYes3] = useState(false);
  const [selectedNo3, setSelectedNo3] = useState(false);
  const [question1Text, setQuestion1Text] = useState("");
  const [question2Text, setQuestion2Text] = useState("");
  const [question3Text, setQuestion3Text] = useState("");
  const [enter, setEnter] = useState(
    (selectedYes1 || selectedNo1) &&
      (selectedYes2 || selectedNo2) &&
      (selectedYes3 || selectedNo3)
  );
  const [adminEnter, setAdminEnter] = useState(
    question1Text && question2Text & question3Text
  );

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
    setEnter(
      (selectedYes1 || selectedNo1) &&
        (selectedYes2 || selectedNo2) &&
        (selectedYes3 || selectedNo3)
    );
    setAdminEnter(question1Text && question2Text && question3Text);
  }, [
    getUser,
    userInfo,
    currentUser,
    selectedYes1,
    selectedYes2,
    selectedYes3,
    selectedNo1,
    selectedNo2,
    selectedNo3,
    question1Text,
    question2Text,
    question3Text,
  ]);

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        {console.log(adminEnter)}
        <div className="MultipleChoice">
          <h1>Multiple Choice (Admin)</h1>
          <div className="mainContent">
            <div className="q q1">
              <div className="prompt">
                <input
                  type="text"
                  placeholder="Enter question text here..."
                  onChange={(evt) => {
                    setQuestion1Text(evt.target.value);
                    console.log(question1Text);
                  }}
                />
              </div>
              <div class="questionDiv disabledChoice">
                <div className="choice">
                  <div className={"choiceLine"}>
                    <div className="outer-circle admin-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
                <div className="choice">
                  <div className={"choiceLine"}>
                    <div className="outer-circle admin-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="q q2">
              <div className="prompt">
                <input
                  type="text"
                  placeholder="Enter question text here..."
                  onChange={(evt) => {
                    setQuestion2Text(evt.target.value);
                    console.log(question2Text);
                  }}
                />
              </div>
              <div className="questionDiv disabledChoice">
                <div className="choice">
                  <div className={"choiceLine"}>
                    <div className="outer-circle admin-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
                <div className="choice">
                  <div className={"choiceLine"}>
                    <div className="outer-circle admin-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="q q3">
              <div className="prompt">
                <input
                  type="text"
                  placeholder="Enter question text here..."
                  onChange={(evt) => {
                    setQuestion3Text(evt.target.value);
                    console.log(question3Text);
                  }}
                />
              </div>
              <div className="questionDiv disabledChoice">
                <div className="choice">
                  <div className={"choiceLine"}>
                    <div className="outer-circle admin-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
                <div className="choice">
                  <div className={"choiceLine"}>
                    <div className="outer-circle admin-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="submitContent">
              {adminEnter ? (
                <Link
                  className="active"
                  to="RankingAnswer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => {
                    addQuestionToAdminSurvey("MultipleChoice", {
                      prompt1: question1Text,
                      prompt2: question2Text,
                      prompt3: question3Text,
                    });
                  }}
                >
                  Enter Multiple Choice Questions
                </Link>
              ) : (
                <Link
                to="RankingAnswer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Enter Multiple Choice Questions
                </Link>
              )}
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <div className="MultipleChoice">
          <h1>Multiple Choice (Key User)</h1>
          <div className="mainContent">
            <div className="q q1">
              <div className="prompt">
                <h2>Is this the case?</h2>
              </div>
              <div className="questionDiv">
                <div className="choice">
                  <div
                    className={`choiceLine choice1 ${
                      selectedYes1 ? "activeLine1" : ""
                    }`}
                    onClick={() => {
                      if (selectedYes1) {
                        setSelectedNo1(false);
                        setSelectedYes1(false);
                      } else {
                        setSelectedNo1(false);
                        setSelectedYes1(true);
                      }
                    }}
                  >
                    <input type="radio" checked={selectedYes1} />
                    <div className="outer-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
                <div className="choice">
                  <div
                    className={`choiceLine choice1 ${
                      selectedNo1 ? "activeLine1" : ""
                    }`}
                    onClick={() => {
                      if (selectedNo1) {
                        setSelectedNo1(false);
                        setSelectedYes1(false);
                      } else {
                        setSelectedNo1(true);
                        setSelectedYes1(false);
                      }
                    }}
                  >
                    <input type="radio" checked={selectedNo1} />
                    <div className="outer-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="q q2">
              <div className="prompt">
                <h2>Is this the case?</h2>
              </div>
              <div className="questionDiv">
                <div className="choice">
                  <div
                    className={`choiceLine choice2 ${
                      selectedYes2 ? "activeLine2" : ""
                    }`}
                    onClick={() => {
                      if (selectedYes2) {
                        setSelectedNo2(false);
                        setSelectedYes2(false);
                      } else {
                        setSelectedNo2(false);
                        setSelectedYes2(true);
                      }
                    }}
                  >
                    <input type="radio" checked={selectedYes2} />
                    <div className="outer-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
                <div className="choice">
                  <div
                    className={`choiceLine choice2 ${
                      selectedNo2 ? "activeLine2" : ""
                    }`}
                    onClick={() => {
                      if (selectedNo2) {
                        setSelectedNo2(false);
                        setSelectedYes2(false);
                      } else {
                        setSelectedNo2(true);
                        setSelectedYes2(false);
                      }
                    }}
                  >
                    <input type="radio" checked={selectedNo2} />
                    <div className="outer-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="q q3">
              <div className="prompt">
                <h2>Is this the case?</h2>
              </div>
              <div className="questionDiv">
                <div className="choice">
                  <div
                    className={`choiceLine choice3 ${
                      selectedYes3 ? "activeLine3" : ""
                    }`}
                    onClick={() => {
                      if (selectedYes3) {
                        setSelectedNo3(false);
                        setSelectedYes3(false);
                      } else {
                        setSelectedNo3(false);
                        setSelectedYes3(true);
                      }
                    }}
                  >
                    <input type="radio" checked={selectedYes3} />
                    <div className="outer-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
                <div className="choice">
                  <div
                    className={`choiceLine choice3 ${
                      selectedNo3 ? "activeLine3" : ""
                    }`}
                    onClick={() => {
                      if (selectedNo3) {
                        setSelectedNo3(false);
                        setSelectedYes3(false);
                      } else {
                        setSelectedNo3(true);
                        setSelectedYes3(false);
                      }
                    }}
                  >
                    <input type="radio" checked={selectedNo3} />
                    <div className="outer-circle">
                      <div id="mid-circle">
                        <div id="inner-circle"></div>
                      </div>
                    </div>
                    <p>No</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="submitContent">
              <button
                className={enter ? "active" : ""}
                type="submit"
                disabled={enter}
                onClick={() => {}}
              >
                Enter Responses
              </button>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default MultipleChoice;
