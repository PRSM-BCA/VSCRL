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

  // IF statement to handle when click again to return to initial state color

  ////-----------------------------------function to handle onClick
  function changeStyleOne() {
    console.log("clicked");
    // Pain One
    if (selectPOne === "painOne") {
      setSelectPOne("transformStyle");
    } else if (selectPOne === "transformStyle") {
      setSelectPOne("painOne")
    }
  }
  //-----------------------------------
  function changeStyleTwo() {
    // Pain Two
    if (selectPTwo === "painTwo") {
      setSelectPTwo("transformStyle");
    } else if (selectPTwo === "transformStyle") {
      setSelectPTwo("painTwo")
    }
  }
  //-----------------------------------
  function changeStyleThree() {
    // Pain Three
    if (selectPThree === "painThree") {
      setSelectPThree("transformStyle");
    } else if (selectPThree === "transformStyle") {
      setSelectPThree("painThree")
    }
  }

  //-----------------------------------
  function changeStyleFour() {
    // Pain Four
    if (selectPFour === "painFour") {
      setSelectPFour("transformStyle");
    } else if (selectPFour === "transformStyle") {
      setSelectPFour("painFour")
    }
  }

  //-----------------------------------
  function changeStyleFive() {
    // Pain Five
    if (selectPFive === "painFive") {
      setSelectPFive("transformStyle");
    } else if (selectPFive === "transformStyle") {
      setSelectPFive("painFive")
    }
  }

  //-----------------------------------
  function changeStyleSix() {
    // Pain six
    if (selectPSix === "painSix") {
      setSelectPSix("transformStyle");
    } else if (selectPSix === "transformStyle") {
      setSelectPSix("painSix")
    }
  }

  //-----------------------------------
  function changeStyleSeven() {
    // Pain Seven
    if (selectPSeven === "painSeven") {
      setSelectPSeven("transformStyle");
    } else if (selectPSeven === "transformStyle") {
      setSelectPSeven("painSeven")
    }
  }
  //-----------------------------------
  function changeStyleEight() {
    // Pain Eight
    if (selectPEight === "painEight") {
      setSelectPEight("transformStyle");
    } else if (selectPEight === "transformStyle") {
      setSelectPEight("painEight")
    }
  }

  //-----------------------------------
  function changeStyleNine() {
    // Pain Nine
    if (selectPNine === "painNine") {
      setSelectPNine("transformStyle");
    } else if (selectPNine === "transformStyle") {
      setSelectPNine("painNine")
    }
  }

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
    return;
  } else {
    return (
      <>
        <div className="KeyWordAnswer">
          <h1>Click 5 frustrations about your footwear</h1>

          <div className="gridWrapper">
            <div className="painOne">
              <div className={selectPOne} onClick={changeStyleOne}>
                <p>Lack of Cushion</p>
              </div>
            </div>
            <div className="painTwo">
              <div className={selectPTwo} onClick={changeStyleTwo}>
                <p>Sweaty Feet</p>
              </div>
            </div>
            <div className="painThree">
              <div className={selectPThree} onClick={changeStyleThree}>
                <p>Test</p>
              </div>
            </div>
            <div className="painFour">
              <div className={selectPFour} onClick={changeStyleFour}>
                <p>Body fluids on footwear</p>
              </div>
            </div>
            <div className="painFive">
              <div className={selectPFive} onClick={changeStyleFive}>
                <p>Too expensive</p>
              </div>
            </div>
            <div className="painSix">
              <div className={selectPSix} onClick={changeStyleSix}>
                <p>Lack of support</p>
              </div>
            </div>
            <div className="painSeven">
              <div className={selectPSeven} onClick={changeStyleSeven}>
                <p>Never have my half-size</p>
              </div>
            </div>
            <div className="painEight">
              <div className={selectPEight} onClick={changeStyleEight}>
                <p>Hot feet</p>
              </div>
            </div>
            <div className="painNine">
              <div className={selectPNine} onClick={changeStyleNine}>
                <p>Lack of arch support</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default KeyWordAnswer;
