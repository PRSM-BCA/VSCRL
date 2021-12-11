import "./Question.scss";
import tools1 from "./images/tools1.jpeg";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

function LongAnswer(props) {
  const { currentUser, getUser } = useAuth();
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
              <button disabled type="submit" onClick={() => {}}>
                Enter Question Info
              </button>
            ) : (
              <button className="active" type="submit" onClick={() => {}}>
                Enter Question Info
              </button>
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
            <h2>
              Describe a typical morning from parking the car to seeing your
              first patient
            </h2>
            <textarea
              type="text"
              name="question answer 2"
              onChange={(evt) => {
                setWordArray(evt.target.value.split(" ").length);
              }}
            ></textarea>
            <p className="disabled" id="wordLimit">
              {wordArray}/250 max words
            </p>
            {console.log(wordArray)}
            {wordArray > 250 || wordArray <= 1 ? (
              <button disabled>Enter Response</button>
            ) : (
              <button className="active" onClick={(evt) => {}}>
                Enter Response
              </button>
            )}
          </div>
        </div>
      </AuthProvider>
    )
  }
}

export default LongAnswer;
