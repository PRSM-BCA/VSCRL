import "./Question.scss";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

function ScaleAnswer(props) {
  const { currentUser, getUser } = useAuth();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  if (userInfo.usertype === "admin") {
  return (
    <AuthProvider>
    <div className="scaleAnswer">
      <h1>Admin</h1>
      <form action="" method="GET">
        <label className="question">How often do your shoes get gross?</label>
        <ul className="likert">
          <li>
            <input type="radio" name="likert" value="never" />
            <label>Never</label>
          </li>
          <li>
            <input type="radio" name="likert" value="weekly" />
            <label>Weekly</label>
          </li>
          <li>
            <input type="radio" name="likert" value="daily" />
            <label>Daily</label>
          </li>
          <li>
            <input type="radio" name="likert" value="postop" />
            <label>Post-OP</label>
          </li>
          <li>
            <input type="radio" name="likert" value="postop" />
            <label>Post-OP</label>
          </li>
        </ul>
        </form>
        <form action="" method="GET">
        <label className="question">How often do you clean your shoes?</label>
        <ul className="likert">
          <li>
            <input type="radio" name="likert" value="never" />
            <label>Never</label>
          </li>
          <li>
            <input type="radio" name="likert" value="weekly" />
            <label>Weekly</label>
          </li>
          <li>
            <input type="radio" name="likert" value="daily" />
            <label>Daily</label>
          </li>
          <li>
            <input type="radio" name="likert" value="postop" />
            <label>Post-OP</label>
          </li>
          <li>
            <input type="radio" name="likert" value="postop" />
            <label>Post-OP</label>
          </li>
        </ul>
        </form>
        <form action="" method="GET">
        <label className="question">How often do you buy work shoes?</label>
        <ul className="likert">
        <li>
            <input type="radio" name="likert" value="never" />
            <label>Never</label>
          </li>
          <li>
            <input type="radio" name="likert" value="fewYears" />
            <label>Every few years</label>
          </li>
          <li>
            <input type="radio" name="likert" value="coupleYears" />
            <label>1-2 years</label>
          </li>
          <li>
            <input type="radio" name="likert" value="Yearly" />
            <label>Yearly</label>
          </li>
          <li>
            <input type="radio" name="likert" value="sixMonths" />
            <label>Every Six Months</label>
          </li>
        </ul>
        <div className="buttons">
            <button className="clear">Clear</button>
            <button className="submit">Submit</button>
        </div>

      </form>
    </div>
    </AuthProvider>
  );} else {
    return (
      <AuthProvider>
      <div className="scaleAnswer">
        <h1>Key User</h1>
        <form action="" method="GET">
          <label className="question">How often do your shoes get gross?</label>
          <ul className="likert">
            <li>
              <input type="radio" name="likert" value="never" />
              <label>Never</label>
            </li>
            <li>
              <input type="radio" name="likert" value="weekly" />
              <label>Weekly</label>
            </li>
            <li>
              <input type="radio" name="likert" value="daily" />
              <label>Daily</label>
            </li>
            <li>
              <input type="radio" name="likert" value="postop" />
              <label>Post-OP</label>
            </li>
            <li>
              <input type="radio" name="likert" value="postop" />
              <label>Post-OP</label>
            </li>
          </ul>
          </form>
          <form action="" method="GET">
          <label className="question">How often do you clean your shoes?</label>
          <ul className="likert">
            <li>
              <input type="radio" name="likert" value="never" />
              <label>Never</label>
            </li>
            <li>
              <input type="radio" name="likert" value="weekly" />
              <label>Weekly</label>
            </li>
            <li>
              <input type="radio" name="likert" value="daily" />
              <label>Daily</label>
            </li>
            <li>
              <input type="radio" name="likert" value="postop" />
              <label>Post-OP</label>
            </li>
            <li>
              <input type="radio" name="likert" value="postop" />
              <label>Post-OP</label>
            </li>
          </ul>
          </form>
          <form action="" method="GET">
          <label className="question">How often do you buy work shoes?</label>
          <ul className="likert">
          <li>
              <input type="radio" name="likert" value="never" />
              <label>Never</label>
            </li>
            <li>
              <input type="radio" name="likert" value="fewYears" />
              <label>Every few years</label>
            </li>
            <li>
              <input type="radio" name="likert" value="coupleYears" />
              <label>1-2 years</label>
            </li>
            <li>
              <input type="radio" name="likert" value="Yearly" />
              <label>Yearly</label>
            </li>
            <li>
              <input type="radio" name="likert" value="sixMonths" />
              <label>Every Six Months</label>
            </li>
          </ul>
          <div className="buttons">
              <button className="clear">Clear</button>
              <button className="submit">Submit</button>
          </div>
  
        </form>
      </div>
      </AuthProvider>
    )
  }
}

export default ScaleAnswer;
