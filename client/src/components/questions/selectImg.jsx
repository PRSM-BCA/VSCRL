import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

function SelectImg(props) {
  const { currentUser, getUser } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
    return (
      <div className="SelectImg">
        <h1>Select Image (Admin)</h1>
        <section id="imgSection">

        </section>
      </div>
    );
  } else {
    return (
      <div className="SelectImg">
        <h1>Select Image (Key User)</h1>
        <section id="imgSection">
        <div className="tallImg gridImg"></div>
            <div className="shortImg gridImg"></div>
            <div className="wideImg gridImg"></div>
            <div className="boxImg gridImg"></div>
            <div className="tallImg gridImg"></div>
            <div className="boxImg gridImg"></div>
            <div className="tallImg gridImg"></div>
            <div className="shortImg gridImg"></div>
            <div className="wideImg gridImg"></div>
        </section>
      </div>
    );
  }
}

export default SelectImg;
