import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

function KeyWordAnswer(props) {
  const { currentUser, getUser } = useAuth();
  const [userInfo, setUserInfo] = useState("");
  const [selectStyle, setSelectStyle] = useState();
  // could set state variable for each pain (painBackground1 etc. setting initial state to color)
  // IF statement to handle when click again to return to initial state color

  function transformStyle() {
    console.log("you just clicked")
    setSelectStyle("transformStyle");
    
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
            <h1 className="TitleHeader">
              Click 5 frustrations about your footwear
            </h1>
           
              <div className="WordCloud">
                <div id="painOne" className={selectStyle} onClick={transformStyle}>
                  Lack of Cushion
                </div>
                <div id="painTwo" className={selectStyle} onClick={transformStyle}>
                  Sweaty Feet
                </div>
                <div id="painThree" className={selectStyle} onClick={transformStyle}>
                  Test
                </div>
                <div id="painFour" className={selectStyle} onClick={transformStyle}>
                  Body fluids on footwear
                </div>
                <div id="painFive" className={selectStyle}  onClick={transformStyle}>
                  Too expensive
                </div>
                <div id="painSix" className={selectStyle} onClick={transformStyle}>
                  Lack of support
                </div>
                <div id="painSeven" onClick={transformStyle}>
                  Never have my size
                </div>
                <div id="painEight" onClick={transformStyle}>
                  Hot feet
                </div>
                <div id="painNine" onClick={transformStyle}>
                  Lack of arch support
                </div>
              </div>
         

        </div>
      </>
    );
  }
}

export default KeyWordAnswer;
