import "./Question.scss";
import tools1 from "./images/tools1.jpeg";

function LongAnswer(props) {
  return (
    <section className="LongAnswer">
      <img className="medicalTools" src={tools1} alt="Medical tools" />
      <div className="inputWrapper">
        <h2>
          Describe a typical morning from parking the car to seeing your first
          patient...
        </h2>
        <textarea
          type="text"
          name="question answer 2"
        ></textarea>
        <p>0/250 max words</p>
      </div>
    </section>
  );
}

export default LongAnswer;
