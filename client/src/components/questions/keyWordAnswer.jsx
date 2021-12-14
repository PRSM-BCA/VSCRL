import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";

function KeyWordAnswer(props) {
  const { currentUser, getUser, addQuestionToAdminSurvey, addQuestionToUserSurvey } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  //  set state variable for each pain (painBackground1 etc. setting initial state to color)
  const [selectPOne, setSelectPOne] = useState("painOne");
  const [selectPTwo, setSelectPTwo] = useState("painTwo");
  const [selectPThree, setSelectPThree] = useState("painThree");
  const [selectPFour, setSelectPFour] = useState("painFour");
  const [selectPFive, setSelectPFive] = useState("painFive");
  const [selectPSix, setSelectPSix] = useState("painSix");
  const [selectPSeven, setSelectPSeven] = useState("painSeven");
  const [selectPEight, setSelectPEight] = useState("painEight");
  const [selectPNine, setSelectPNine] = useState("painNine");
  const [count, setCount] = useState(0);
  

  //Admin states: create a set of nine state variables (one for each frustration input). Set onChange
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const [input4, setInput4] = useState(null);
  const [input5, setInput5] = useState(null);
  const [input6, setInput6] = useState(null);
  const [input7, setInput7] = useState(null);
  const [input8, setInput8] = useState(null);
  const [input9, setInput9] = useState(null);

  const [keyWordBank, setKeyWordBank] = useState([])

  // Admin function: change color onChange for ADMIN


  // keyUser function: Change style  and keep track of count
  function changeStyle(
    classType,
    selectPain,
    setSelectPain,
    counter,
    setCounter
  ) {
    if (selectPain === classType && counter < 5) {
      setSelectPain("transformStyle");
      setCounter(counter + 1);
    } else if (selectPain === "transformStyle") {
      setSelectPain(classType);
      setCounter(counter - 1);
    }
    console.log("counter", counter);
  }

  function keyWordArrayHandle(word) {
    if (keyWordBank.includes(word)) {
      keyWordBank.shift(keyWordBank.indexOf(word))
    }
    else {
    setKeyWordBank(keyWordBank => [...keyWordBank, word])
    }
  }

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser, props.keyWordAnswer]);

  // --------------------------------If Admin

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        <div className="KeyWordAnswer-admin">
          <div className="KeyWordMainWrapper">
            <div className="KeyWord-Instructions">
              <h1>
                Question Type:
                <br />
                KeyWord Answer <i>(Admin)</i>
              </h1>
              <p>
                <u>User Engagement</u>: Users will select 5 keywords from the
                nine that will appear (one in each bubble).
              </p>
              <p>
                <u>Instructions</u>:
                <br />
                1. Enter 9 key words (one in each bubble)
                <br />
                2. Enter question info
              </p>
            </div>
            <div className="gridWrapper">
              <input
                className="pain painOne"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput1(evt.target.value);
                  
                }}
              ></input>
              <input
                className="pain painTwo"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput2(evt.target.value);
                }}
              ></input>

              <input
                className="pain painThree"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput3(evt.target.value);
                }}
              ></input>

              <input
                className="pain painFour"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput4(evt.target.value);
                }}
              ></input>

              <input
                className="pain painFive"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput5(evt.target.value);
                }}
              ></input>

              <input
                className="pain painSix"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput6(evt.target.value);
                }}
              ></input>

              <input
                className="pain painSeven"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput7(evt.target.value);
                }}
              ></input>

              <input
                className="pain painEight"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput8(evt.target.value);
                }}
              ></input>

              <input
                className="pain painNine"
                type="text"
                name="keyword"
                placeholder="Enter..."
                onChange={(evt) => {
                  setInput9(evt.target.value);
                }}
              ></input>
            </div>
          </div>
          {input1 &&
          input2 &&
          input3 &&
          input4 &&
          input5 &&
          input6 &&
          input7 &&
          input8 &&
          input9 ? (
            <Link
              className="active"
              to="MultipleChoice"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                addQuestionToAdminSurvey("KeyWordQuestions", [
                  { word: input1, value: 0},
                  { word: input2, value: 0},
                  { word: input3, value: 0},
                  { word: input4, value: 0},
                  { word: input5, value: 0},
                  { word: input6, value: 0},
                  { word: input7, value: 0},
                  { word: input8, value: 0},
                  { word: input9, value: 0},
              ]);
              }}
            >
              Enter Key Word Prompts
            </Link>
          ) : (
            <Link
              disabled="true"
              to="MultipleChoice"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Enter Key Word Prompts
            </Link>
          )}
        </div>
      </AuthProvider>
    );

    // --------------------------------If Key User
  } else {
    return (
      <AuthProvider>
        {/* {console.log("keyWordBank", keyWordBank)} */}
        <div className="keyWordAnswer-keyUser">
          {/* {console.log(count)} */}
          <h1>Click 5 frustrations about your footwear (Key User)</h1>

          <div className="gridWrapper">
            <div
              className={`pain painOne ${selectPOne}`}
              onClick={() => {
                changeStyle(
                  "painOne",
                  selectPOne,
                  setSelectPOne,
                  count,
                  setCount
                );
                console.log("this is count", count);
                keyWordArrayHandle(props.keyWordAnswer[0].word)
              }}
            >
              <p>{props.keyWordAnswer ? props.keyWordAnswer[0].word : null}</p>
            </div>
            <div className="pain painTwo">
              <div
                className={`pain painTwo ${selectPTwo}`}
                onClick={() => {
                  changeStyle(
                    "painTwo",
                    selectPTwo,
                    setSelectPTwo,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[1].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[1].word : null}</p>
              </div>
            </div>
            <div className="pain painThree">
              <div
                className={`pain painThree ${selectPThree}`}
                onClick={() => {
                  changeStyle(
                    "painThree",
                    selectPThree,
                    setSelectPThree,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[2].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[2].word : null}</p>
              </div>
            </div>
            <div className="pain painFour">
              <div
                className={`pain painFour ${selectPFour}`}
                onClick={() => {
                  changeStyle(
                    "painFour",
                    selectPFour,
                    setSelectPFour,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[3].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[3].word : null}</p>
              </div>
            </div>
            <div className=" pain painFive">
              <div
                className={`pain painFive ${selectPFive}`}
                onClick={() => {
                  changeStyle(
                    "painFive",
                    selectPFive,
                    setSelectPFive,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[4].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[4].word : null}</p>
              </div>
            </div>
            <div className="pain painSix">
              <div
                className={`pain painSix ${selectPSix}`}
                onClick={() => {
                  changeStyle(
                    "painSix",
                    selectPSix,
                    setSelectPSix,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[5].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[5].word : null}</p>
              </div>
            </div>
            <div className="pain painSeven">
              <div
                className={`pain painSeven ${selectPSeven}`}
                onClick={() => {
                  changeStyle(
                    "painSeven",
                    selectPSeven,
                    setSelectPSeven,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[6].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[6].word : null}</p>
              </div>
            </div>
            <div className="pain painEight">
              <div
                className={`pain painEight ${selectPEight}`}
                onClick={() => {
                  changeStyle(
                    "painEight",
                    selectPEight,
                    setSelectPEight,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[7].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[7].word : null}</p>
              </div>
            </div>
            <div className="pain painNine">
              <div
                className={`pain painNine ${selectPNine}`}
                onClick={() => {
                  changeStyle(
                    "painNine",
                    selectPNine,
                    setSelectPNine,
                    count,
                    setCount
                  );
                  console.log("this is count", count);
                  keyWordArrayHandle(props.keyWordAnswer[8].word)
                }}
              >
                <p>{props.keyWordAnswer ? props.keyWordAnswer[8].word : null}</p>
              </div>
            </div>
          </div>
          {count === 5 ? (
            <Link
            className="active"
            to="MultipleChoice"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => {
              addQuestionToUserSurvey(currentUser.uid, "GX7nZYcm4q5qq3drETLm", "SurgeonShoeSurvey", "KeyWordBank", {keyWords: keyWordBank}, {merge: true})
            }}
          >Enter Question Info</Link>
          ) : (
            <Link
            disabled="true"
            to="MultipleChoice"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >Enter Question Info</Link>
          )}
        </div>
      </AuthProvider>
    );
  }
}

export default KeyWordAnswer;
