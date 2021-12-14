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
  const [question1Value1, setQuestion1Value1] = useState("");
  const [question1Value2, setQuestion1Value2] = useState("");
  const [question1Value3, setQuestion1Value3] = useState("");
  const [question1Value4, setQuestion1Value4] = useState("");
  const [question1Value5, setQuestion1Value5] = useState("");
  const [question2Value1, setQuestion2Value1] = useState("");
  const [question2Value2, setQuestion2Value2] = useState("");
  const [question2Value3, setQuestion2Value3] = useState("");
  const [question2Value4, setQuestion2Value4] = useState("");
  const [question2Value5, setQuestion2Value5] = useState("");
  const [question3Value1, setQuestion3Value1] = useState("");
  const [question3Value2, setQuestion3Value2] = useState("");
  const [question3Value3, setQuestion3Value3] = useState("");
  const [question3Value4, setQuestion3Value4] = useState("");
  const [question3Value5, setQuestion3Value5] = useState("");
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
      question1Value1 ||
        question1Value2 ||
        question1Value3 ||
        question1Value4 ||
        question1Value5
    );
    setAdminEnter(question1Text);
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
          <div className="admin-question">
            <label className="question-Edit">
              <input
                id="question1Input"
                type="text"
                placeholder="Survey Question 1"
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
                <input
                  id="q1v1"
                  type="text"
                  placeholder="Question 1 Value 1"
                  onChange={(evt) => {
                    console.log(question1Value1);
                    setQuestion1Value1(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question1Value1} />
                    <p>{question1Value1 ? question1Value1 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q1v2"
                  type="text"
                  placeholder="Question 1 Value 2"
                  onChange={(evt) => {
                    console.log(question1Value2);
                    setQuestion1Value2(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question1Value2} />
                    <p>{question1Value2 ? question1Value2 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q1v3"
                  type="text"
                  placeholder="Question 1 Value 3"
                  onChange={(evt) => {
                    console.log(question1Value3);
                    setQuestion1Value3(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question1Value3} />
                    <p>{question1Value3 ? question1Value3 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q1v4"
                  type="text"
                  placeholder="Question 1 Value 4"
                  onChange={(evt) => {
                    console.log(question1Value4);
                    setQuestion1Value4(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question1Value4} />
                    <p>{question1Value4 ? question1Value4 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q1v5"
                  type="text"
                  placeholder="Question 1 Value 5"
                  onChange={(evt) => {
                    console.log(question1Value5);
                    setQuestion1Value5(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question1Value5} />
                    <p>{question1Value5 ? question1Value5 : ""}</p>
                  </label>
                </li>
              </div>
            </ul>
          </div>
          <div className="admin-question">
            <label className="question-Edit">
              <input
                id="question2Input"
                type="text"
                placeholder="Survey Question 2"
                onChange={(evt) => {
                  console.log(question2Text);
                  setQuestion2Text(evt.target.value);
                }}
              />

              <p>{question2Text ? question2Text : ""}</p>
            </label>
            {/* Editable Scale Values */}
            <ul className="likert">
              <div className="valueEdit">
                <input
                  id="q2v1"
                  type="text"
                  placeholder="Question 2 Value 1"
                  onChange={(evt) => {
                    console.log(question2Value1);
                    setQuestion2Value1(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question2Value1} />
                    <p>{question2Value1 ? question2Value1 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q2v2"
                  type="text"
                  placeholder="Question 2 Value 2"
                  onChange={(evt) => {
                    console.log(question2Value2);
                    setQuestion2Value2(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question2Value2} />
                    <p>{question2Value2 ? question2Value2 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q2v3"
                  type="text"
                  placeholder="Question 2 Value 3"
                  onChange={(evt) => {
                    console.log(question2Value3);
                    setQuestion2Value3(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question2Value3} />
                    <p>{question2Value3 ? question2Value3 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q2v4"
                  type="text"
                  placeholder="Question 2 Value 4"
                  onChange={(evt) => {
                    console.log(question2Value4);
                    setQuestion2Value4(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question2Value4} />
                    <p>{question2Value4 ? question2Value4 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q2v5"
                  type="text"
                  placeholder="Question 2 Value 5"
                  onChange={(evt) => {
                    console.log(question2Value5);
                    setQuestion2Value5(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question2Value5} />
                    <p>{question2Value5 ? question2Value5 : ""}</p>
                  </label>
                </li>
              </div>
            </ul>
          </div>
          <div className="admin-question">
            <label className="question-Edit">
              <input
                id="question3Input"
                type="text"
                placeholder="Survey Question 3"
                onChange={(evt) => {
                  console.log(question1Text);
                  setQuestion1Text(evt.target.value);
                }}
              />

              <p>{question3Text ? question3Text : ""}</p>
            </label>
            {/* Editable Scale Values */}
            <ul className="likert">
              <div className="valueEdit">
                <input
                  id="q3v1"
                  type="text"
                  placeholder="Question 3 Value 1"
                  onChange={(evt) => {
                    console.log(question3Value1);
                    setQuestion3Value1(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question3Value1} />
                    <p>{question3Value1 ? question3Value1 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q3v2"
                  type="text"
                  placeholder="Question 3 Value 2"
                  onChange={(evt) => {
                    console.log(question3Value2);
                    setQuestion3Value2(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question3Value2} />
                    <p>{question3Value2 ? question3Value2 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q3v3"
                  type="text"
                  placeholder="Question 3 Value 3"
                  onChange={(evt) => {
                    console.log(question1Value3);
                    setQuestion3Value3(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question3Value3} />
                    <p>{question3Value3 ? question3Value3 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q3v4"
                  type="text"
                  placeholder="Question 3 Value 4"
                  onChange={(evt) => {
                    console.log(question3Value4);
                    setQuestion3Value4(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question3Value4} />
                    <p>{question3Value4 ? question3Value4 : ""}</p>
                  </label>
                </li>
              </div>
              <div className="valueEdit">
                <input
                  id="q3v5"
                  type="text"
                  placeholder="Question 3 Value 5"
                  onChange={(evt) => {
                    console.log(question3Value5);
                    setQuestion3Value5(evt.target.value);
                  }}
                />
                <li>
                  <label className="form-control">
                    <input className="admin-radio" type="radio" name="radio" value={question3Value5} />
                    <p>{question3Value5 ? question3Value5 : ""}</p>
                  </label>
                </li>
              </div>
            </ul>
          </div>
          <div id="submitContent">
            {adminEnter ? (
              <Link
                className="active"
                to="ScaleAnswer"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => {
                  addQuestionToAdminSurvey("ScaleAnswer", {
                    question1Text: question1Text,
                    question1Value1: question1Value1,
                    question1Value2: question1Value2,
                    question1Value3: question1Value3,
                    question1Value4: question1Value4,
                    question1Value5: question1Value5,
                  });
                }}
              >
                Enter Scale Questions
              </Link>
            ) : (
              <Link
                to="ScaleAnswer"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Enter Multiple Choice Questions
              </Link>
            )}
          </div>
          <div className="buttons">
            <button className="clear">Clear</button>
            <button className="submit">Submit</button>
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
