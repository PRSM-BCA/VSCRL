import "./Question.scss";
import tools1 from "./images/tools1.jpeg";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";


function LongAnswer(props) {
  const { currentUser, getUser, addSurvey, addAdminSurvey, addQuestionToUserSurvey, addQuestionToAdminSurvey  } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [promptEntry, setPromptEntry] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [wordArray, setWordArray] = useState(0);

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        <div className="LongAnswer">
          <h1>Long-form Answer</h1>
          <img className="medicalTools" src={tools1} alt="Medical tools" />
          <div className="inputWrapper">
            <input
              id="promptInput"
              type="text"
              placeholder="Enter your Prompt"
              onChange={(evt) => {
                console.log(promptEntry);
                setPromptEntry(evt.target.value);
              }}
            />

            <textarea
              class="disabled"
              disabled
              draggable="false"
              type="text"
              name="question answer 2"
              placeholder="User answers the question here..."
            ></textarea>
            <input
              id="maxWordInput"
              type="number"
              placeholder="Word Count"
              onChange={(evt) => {
                setWordCount(evt.target.value);
                console.log(wordCount);
              }}
            />
            {console.log(wordCount)}
            {console.log(promptEntry)}
            {wordCount <= 0 && !promptEntry ? (
              <Link
              disabled="true"
              to="MultipleChoice"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
                Enter Long-form Answer
              </Link>
            ) : (
              <Link
                    className="active"
                    to="MultipleChoice"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => {
                      addQuestionToAdminSurvey("LongAnswer", {prompt: promptEntry, wordCount: wordCount})
                    }}
                    >
                      Enter Long-form Answer
                </Link>

            )}
          </div>
        </div>
      </AuthProvider>
    )
  } else {
    return (
      <AuthProvider>
        <div className="LongAnswer">
          <h1>Long-form Answer</h1>
          <img className="medicalTools" src={tools1} alt="Medical tools" />
          <div className="inputWrapper">
            {console.log(promptEntry)}
            <h2>
              {props.longAnswer.prompt}
            </h2>
            <textarea
              type="text"
              name="question answer 2"
              onChange={(evt) => {
                setPromptEntry(evt.target.value)
                setWordArray(evt.target.value.split(" ").length);
              }}
            ></textarea>
            <p className="disabled" id="wordLimit">
              {wordArray}/{props.longAnswer.wordCount} max words
            </p>
            {wordArray > props.longAnswer.wordCount || wordArray <= 1 ? (
              <Link
              disabled="true"
              to="MultipleChoice"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              >
                Enter Long-form Answer
              </Link>
            ) : (
              <Link
                    className="active"
                    to="MultipleChoice"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => {
                      addQuestionToUserSurvey(currentUser.uid, "GX7nZYcm4q5qq3drETLm", "SurgeonShoeSurvey", "LongAnswer", {prompt: promptEntry});
                    }}
                    >
                      Enter Long-form Answer
                </Link>
            )}
          </div>
        </div>
      </AuthProvider>
    )
  }
}

export default LongAnswer;
