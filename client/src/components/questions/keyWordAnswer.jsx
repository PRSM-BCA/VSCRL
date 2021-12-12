import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

function KeyWordAnswer(props) {
  const { currentUser, getUser } = useAuth();
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

  // Change style function and keep track of count
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

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  // --------------------------------If Admin

  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        <div className="KeyWordAnswer">
          <h1>Click 5 frustrations about your footwear (ADMIN)</h1>

          <div className="gridWrapper">
            <input
              className="pain painOne "
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput1(evt.target.value);
              }}
            ></input>
            <input
              className="pain painTwo"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput2(evt.target.value);
              }}
            ></input>

            <input
              className="pain painThree"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput3(evt.target.value);
              }}
            ></input>

            <input
              className="pain painFour"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput4(evt.target.value);
              }}
            ></input>

            <input
              className="pain painFive"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput5(evt.target.value);
              }}
            ></input>

            <input
              className="pain painSix"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput6(evt.target.value);
              }}
            ></input>

            <input
              className="pain painSeven"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput7(evt.target.value);
              }}
            ></input>

            <input
              className="pain painEight"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput8(evt.target.value);
              }}
            ></input>

            <input
              className="pain painNine"
              type="text"
              name="keyword"
              placeholder="Enter"
              onChange={(evt) => {
                setInput9(evt.target.value);
              }}
            ></input>
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
            <button className="active" type="submit" onClick={() => {}}>
              Enter Question Info
            </button>
          ) : (
            <button disabled type="submit" onClick={() => {}}>
              Enter Question Info
            </button>
          )}
        </div>
      </AuthProvider>
    );

    // --------------------------------If Key User
  } else {
    return (
      <AuthProvider>
        <div className="KeyWordAnswer">
          {console.log(count)}
          <h1>Click 5 frustrations about your footwear</h1>

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
              }}
            >
              <p>Lack of Cushion</p>
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
                }}
              >
                <p>Sweaty Feet</p>
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
                }}
              >
                <p>Test</p>
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
                }}
              >
                <p>Body fluids on footwear</p>
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
                }}
              >
                <p>Too expensive</p>
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
                }}
              >
                <p>Lack of support</p>
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
                }}
              >
                <p>Never have my half-size</p>
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
                }}
              >
                <p>Hot feet</p>
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
                }}
              >
                <p>Lack of arch support</p>
              </div>
            </div>
          </div>
          {count === 5 ? (
            <button className="active" type="submit" onClick={() => {}}>
              Enter Question Info
            </button>
          ) : (
            <button disabled type="submit" onClick={() => {}}>
              Enter Question Info
            </button>
          )}
        </div>
      </AuthProvider>
    );
  }
}

export default KeyWordAnswer;
