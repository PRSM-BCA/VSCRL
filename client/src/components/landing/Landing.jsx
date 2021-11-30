import "./Landing.scss";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";

function Landing() {
  return (
    <>
      <div className="Landing">
        <h1>PRSM!</h1>
        <nav>
          <Link to="/KeyWordAnswer">KeyWordAnswer</Link>
          <Link to="/LongAnswer">LongAnswer</Link>
          <Link to="/MultipleChoice">MultipleChoice</Link>
          <Link to="/RankingAnswer">RankingAnswer</Link>
          <Link to="/ScaleAnswer">ScaleAnswer</Link>
          <Link to="/SelectImg">SelectImg</Link>
          <Link to="/ShortAnswer">ShortAnswer</Link>
        </nav>
      </div>
      <div class="signUp">
        <SignUp />
      </div>
    </>
  );
}

export default Landing;
