import "./Landing.scss";
import { Link } from "react-router-dom";


function Landing() {
  return (
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

      <Link to="/SignUp">Sign Up</Link>

      {/* <form method="POST" action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" placeholder="Submit" />
      </form> */}
    </div>
  );
}

export default Landing;
