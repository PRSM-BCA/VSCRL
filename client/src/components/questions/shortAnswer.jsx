import "./Question.scss";

function ShortAnswer(props) {
  return (
    <div className="ShortAnswer">
      <form>
        <h3>List 3 frustrations about your footwear</h3>
        <div className="questionWrapper">
        <section>
          #1
          <textarea
            type="text"
            name="question answer 1"
            placeholder="I'm frustrated by..."
          ></textarea>
        </section>

        <section>
          #2
          <textarea
            type="text"
            name="question answer 2"
            placeholder="I'm frustrated by..."
          ></textarea>
        </section>

        <section>
          #3
          <textarea
            type="text"
            name="question answer 3"
            placeholder="I'm frustrated by..."
          ></textarea>
        </section>
        </div>
      </form>
    </div>
  );
}

export default ShortAnswer;
