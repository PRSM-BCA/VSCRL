import "./Question.scss";
import RankingFunctionality from "./RankingFunctionality.jsx";

function RankingAnswer(props) {
  return (
    <div className="RankingAnswer">
      <RankingFunctionality rankingAnswer={props.rankingAnswer} surveySubmitted={props.surveySubmitted} setSurveySubmitted={props.setSurveySubmitted}/>
    </div>
  );
}

export default RankingAnswer;
