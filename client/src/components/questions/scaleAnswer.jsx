import "./Question.scss";

function ScaleAnswer(props) {
  return (
    <div className="scaleAnswer">
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
  );
}

export default ScaleAnswer;
