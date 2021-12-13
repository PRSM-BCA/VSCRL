import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";

function ScaleAnswer(props) {
  const {
    currentUser,
    getUser,
    addSurvey,
    addAdminSurvey,
    addQuestionToSurvey,
    addQuestionToAdminSurvey,
  } = useAuth();

  const [userInfo, setUserInfo] = useState("");
  //set state variable for admin to edit likert scale questions and values
  const [question1Text, setQuestion1Text] = useState("");
  const [question2Text, setQuestion2Text] = useState("");
  const [question3Text, setQuestion3Text] = useState("");
  const [question1Value1, setQuestion1Value1] = useState("false");
  const [question1Value2, setQuestion1Value2] = useState("false");
  const [question1Value3, setQuestion1Value3] = useState("false");
  const [question1Value4, setQuestion1Value4] = useState("false");
  const [question1Value5, setQuestion1Value5] = useState("false");
  const [question2Value1, setQuestion2Value1] = useState("false");
  const [question2Value2, setQuestion2Value2] = useState("false");
  const [question2Value3, setQuestion2Value3] = useState("false");
  const [question2Value4, setQuestion2Value4] = useState("false");
  const [question2Value5, setQuestion2Value5] = useState("false");
  const [question3Value1, setQuestion3Value1] = useState("false");
  const [question3Value2, setQuestion3Value2] = useState("false");
  const [question3Value3, setQuestion3Value3] = useState("false");
  const [question3Value4, setQuestion3Value4] = useState("false");
  const [question3Value5, setQuestion3Value5] = useState("false");
  const [enter, setEnter] = useState(
      question1Value1 ||
      question1Value2 ||
      question1Value3 ||
      question1Value4 ||
      question1Value5
  );

  const [adminEnter, setAdminEnter] = useState(question1Text);

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
    setEnter(
      (
        question1Value1 ||
        question1Value2 ||
        question1Value3 ||
        question1Value4 ||
        question1Value5
        )
    )
    setAdminEnter(question1Text)
  }, [
    getUser,
    userInfo,
    currentUser,
    question1Text,
    question1Value1,
    question1Value2,
    question1Value3,
    question1Value4,
    question1Value5,
  ]);

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        {console.log(adminEnter)}
        <div className="scaleAnswer">
          <h1>Admin</h1>
          <div className="admin-question1">
            <h2>Question One</h2>
            <label className="question">
              <input
                id="question1Input"
                type="text"
                placeholder="Enter your survey question"
                onChange={(evt) => {
                  console.log(question1Text);
                  setQuestion1Text(evt.target.value);
                }}
              />

              <p>{question1Text ? question1Text : ""}</p>
            </label>
            {/* Editable Scale Values */}
            <ul className="likert">
              <div className="valueEdit">
                Question 1 Value 1
                <input
                  id="q1v1"
                  type="text"
                  placeholder="Enter Question 1 Selection Value 1."
                  onChange={(evt) => {
                    console.log(question1Value1);
                    setQuestion1Value1(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input type="radio" name="radio" value={question1Value1} />
                    <p>{question1Value1 ? question1Value1 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                Question1 Value 2
                <input
                  id="q1v2"
                  type="text"
                  placeholder="Enter Question 1 Selection Value 2."
                  onChange={(evt) => {
                    console.log(question1Value2);
                    setQuestion1Value2(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input type="radio" name="radio" value={question1Value2} />
                    <p>{question1Value2 ? question1Value2 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                Question 1 Value 3
                <input
                  id="q1v3"
                  type="text"
                  placeholder="Enter Question 1 Selection Value 3."
                  onChange={(evt) => {
                    console.log(question1Value3);
                    setQuestion1Value3(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input type="radio" name="radio" value={question1Value3} />
                    <p>{question1Value3 ? question1Value3 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                Question 1 Value 4
                <input
                  id="q1v4"
                  type="text"
                  placeholder="Enter Question 1 Selection Value 4."
                  onChange={(evt) => {
                    console.log(question1Value4);
                    setQuestion1Value4(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input type="radio" name="radio" value={question1Value4} />
                    <p>{question1Value4 ? question1Value4 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                Question 1 Value 5
                <input
                  id="q1v5"
                  type="text"
                  placeholder="Enter Question 1 Selection Value 5."
                  onChange={(evt) => {
                    console.log(question1Value5);
                    setQuestion1Value5(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input type="radio" name="radio" value={question1Value5} />
                    <p>{question1Value5 ? question1Value5 : ""}</p>
                  </label>
                </li>
              </div>
            </ul>
          </div>
          <div className="question2">
            <input
              id="question2Input"
              type="text"
              placeholder="What would you like to ask?"
              onChange={(evt) => {
                console.log(question2Text);
                setQuestion2Text(evt.target.value);
              }}
            />
            <label className="question">
              How often do you clean your shoes?
            </label>
            <ul className="likert">
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="never" />
                  Never
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="weekly" />
                  Weekly
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="daily" />
                  Daily
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="postop" />
                  Post-OP
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="postop" />
                  Post-OP
                </label>
              </li>
            </ul>
          </div>
          <div className="question3">
            <input
              id="question3Input"
              type="text"
              placeholder="What would you like to ask?"
              onChange={(evt) => {
                console.log(question3Text);
                setQuestion3Text(evt.target.value);
              }}
            />
            <label className="question">How often do you buy work shoes?</label>
            <ul className="likert">
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="never" />
                  Never
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="fewYears" />
                  Every few years
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="coupleYears" />
                  1-2 years
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="Yearly" />
                  Yearly
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="sixMonths" />
                  Every Six Months
                </label>
              </li>
            </ul>
            <div className="buttons">
              <button className="clear">Clear</button>
              <button className="submit">Submit</button>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  } else {
    return (
      <AuthProvider>
        <div className="scaleAnswer">
          <h1>Key User</h1>
          <form action="" method="GET">
            <label className="question">
              How often do your shoes get gross?
            </label>
            <ul className="likert">
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="never" />
                  Never
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="weekly" />
                  Weekly
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="daily" />
                  Daily
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="postop" />
                  Post-OP
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="postop" />
                  Post-OP
                </label>
              </li>
            </ul>
          </form>
          <form action="" method="GET">
            <label className="question">
              How often do you clean your shoes?
            </label>
            <ul className="likert">
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="never" />
                  Never
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="weekly" />
                  Weekly
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="daily" />
                  Daily
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="postop" />
                  Post-OP
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="postop" />
                  Post-OP
                </label>
              </li>
            </ul>
          </form>
          <form action="" method="GET">
            <label className="question">How often do you buy work shoes?</label>
            <ul className="likert">
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="never" />
                  Never
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="fewYears" />
                  Every few years
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="coupleYears" />
                  1-2 years
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="Yearly" />
                  Yearly
                </label>
              </li>
              <li>
                <label className="form-control">
                  <input type="radio" name="radio" value="sixMonths" />
                  Every Six Months
                </label>
              </li>
            </ul>
            <div className="buttons">
              <button className="clear">Clear</button>
              <button className="submit">Submit</button>
            </div>
          </form>
        </div>
      </AuthProvider>
    );
  }
}

export default ScaleAnswer;
