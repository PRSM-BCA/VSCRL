import "./Question.scss";

function ShortAnswer(props) {
  return (
    <div className="ShortAnswer">
      <form>
        <h3>List 3 frustrations about your footwear</h3>
        <section>
          #1
          <input
            type="text"
            name="question answer 1"
            placeholder="pls enter your question answer"
          ></input>
        </section>

        <section>
          #2
          <input
            type="text"
            name="question answer 2"
            placeholder="pls enter your question answer"
          ></input>
        </section>

        <section>
          #3
          <input
            type="text"
            name="question answer 3"
            placeholder="pls enter your question answer"
          ></input>
        </section>
      </form>
    </div>
  );
}

export default ShortAnswer;
