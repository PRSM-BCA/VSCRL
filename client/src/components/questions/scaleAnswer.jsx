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
            <label className="form-control">
            <input type="radio" name="radio" value="never" />
            Never</label>
          </li>
          <li>
            <label className="form-control">
            <input type="radio" name="radio" value="weekly" />
            Weekly</label>
          </li>
          <li>
            <label className="form-control">
            <input type="radio" name="radio" value="daily" />
            Daily</label>
          </li>
          <li>
            <label className="form-control">
            <input type="radio" name="radio" value="postop" />
            Post-OP</label>
          </li>
          <li>
            <label className="form-control">
            <input type="radio" name="radio" value="postop" />
            Post-OP</label>
          </li>
        </ul>
        </form>
        <form action="" method="GET">
        <label className="question">How often do you clean your shoes?</label>
        <ul className="likert">
          <li>
            <label className="form-control">
            <input type="radio" name="radio" value="never" />
            Never</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="weekly" />
            Weekly</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="daily" />
            Daily</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="postop" />
            Post-OP</label>
          </li>
          <li>
            <label className="form-control">
            <input type="radio" name="radio" value="postop" />
            Post-OP</label>
          </li>
        </ul>
        </form>
        <form action="" method="GET">
        <label className="question">How often do you buy work shoes?</label>
        <ul className="likert">
        <li>
        <label className="form-control">
            <input type="radio" name="radio" value="never" />
            Never</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="fewYears" />
            Every few years</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="coupleYears" />
            1-2 years</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="Yearly" />
            Yearly</label>
          </li>
          <li>
          <label className="form-control">
            <input type="radio" name="radio" value="sixMonths" />
            Every Six Months</label>
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
            <label className="form-control">
              <input type="radio" name="radio" value="never" />
              Never</label>
            </li>
            <li>
            <label className="form-control">
              <input type="radio" name="radio" value="weekly" />
              Weekly</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="daily" />
              Daily</label>
            </li>
            <li>
            <label className="form-control">
              <input type="radio" name="radio" value="postop" />
              Post-OP</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="postop" />
              Post-OP</label>
            </li>
          </ul>
          </form>
          <form action="" method="GET">
          <label className="question">How often do you clean your shoes?</label>
          <ul className="likert">
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="never" />
              Never</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="weekly" />
              Weekly</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="daily" />
              Daily</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="postop" />
              Post-OP</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="postop" />
              Post-OP</label>
            </li>
          </ul>
          </form>
          <form action="" method="GET">
          <label className="question">How often do you buy work shoes?</label>
          <ul className="likert">
          <li>
            <label className="form-control">
              <input type="radio" name="radio" value="never" />
              Never</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="fewYears" />
              Every few years</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="coupleYears" />
              1-2 years</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="Yearly" />
              Yearly</label>
            </li>
            <li>
              <label className="form-control">
              <input type="radio" name="radio" value="sixMonths" />
              Every Six Months</label>
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
