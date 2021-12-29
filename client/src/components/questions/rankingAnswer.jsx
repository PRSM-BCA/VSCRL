import Footer from "../landing/Footer";
import "./Question.scss";
import RankingFunctionality from "./RankingFunctionality.jsx";

function RankingAnswer(props) {
  return (
    <div className="RankingAnswer">
      <RankingFunctionality
        rankingAnswer={props.rankingAnswer}
        surveySubmitted={props.surveySubmitted}
        setSurveySubmitted={props.setSurveySubmitted}
        question1={props.question1}
        question2={props.question2}
        question3={props.question3}
      />
      <Footer></Footer>
    </div>
  );
}

export default RankingAnswer;
