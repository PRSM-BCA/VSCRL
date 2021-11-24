import "./Question.scss";

function ShortAnswer(props) {
  return (
    <div className="ShortAnswer">
      <form>
        <h3>question 1</h3>
        <input
          type="text"
          name="question answer 1"
          placeholder="pls enter your question answer"
        ></input>
        <h3>question 2</h3>
        <input
          type="text"
          name="question answer 2"
          placeholder="pls enter your question answer"
        ></input>
        <h3>question 3</h3>
        <input
          type="text"
          name="question answer 3"
          placeholder="pls enter your question answer"
        ></input>
      </form>
    </div>
  );
}

export default ShortAnswer;
