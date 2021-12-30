import Footer from "../landing/Footer";
import "./Question.scss";
import RankingFunctionality from "./RankingFunctionality.jsx";

function RankingAnswer(props) {
  return (
    <div className="RankingAnswer">
      <RankingFunctionality
        rankingAnswer={props.rankingAnswer}
        rankAnswerObject={props.rankAnswerObject}
        setRankAnswerObject={props.setRankAnswerObject}
        surveySubmitted={props.surveySubmitted}
        setSurveySubmitted={props.setSurveySubmitted}
        keyWord1={props.keyWord1}
        keyWord2={props.keyWord2}
        keyWord3={props.keyWord3}
        keyWord4={props.keyWord4}
        keyWord5={props.keyWord5}
        keyWord6={props.keyWord6}
        keyWord7={props.keyWord7}
        keyWord8={props.keyWord8}
      />
      <Footer></Footer>
    </div>
  );
}

export default RankingAnswer;
