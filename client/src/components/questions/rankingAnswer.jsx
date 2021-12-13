import RankingFunctionality from "./RankingFunctionality.jsx";

function RankingAnswer(props) {
  return (
    <div className="RankingAnswer">
      <RankingFunctionality rankingAnswer={props.rankingAnswer}/>
    </div>
  );
}

export default RankingAnswer;
