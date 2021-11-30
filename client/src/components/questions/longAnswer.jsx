import './Question.scss'

function LongAnswer(props) {
    return (
        <section className="LongAnswer">
          <h3>What is typical morning from parking the car to seeing your first patient?</h3>
          <div className="inputWrapper">
          <input
            type="text"
            name="question answer 2"
            placeholder="pls enter your question answer"
          ></input>
          <p>0/250 max words</p>
          </div>
        </section>
    )
}

export default LongAnswer