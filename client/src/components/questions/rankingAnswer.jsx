import "./Question.scss";
import Draggable from "react-draggable";
import tools2 from "./images/tools2.jpeg";
import { useState } from "react";

//-------------------------- Create variable that contains list of items with
const answerList = [
  { id: 1, answer: "Sweaty Feet" },
  { id: 2, answer: "Tired feet" },
  { id: 3, answer: "Body fluids on footwear" },
  { id: 4, answer: "Lack of style" },
  {id: 5, answer: "Lack of support"}, 
  {id: 6, answer: "Smelly shoes"},
  {id: 7, answer: "Hot feet"},
  {id: 8, answer: "Lack of cushion"}
];

function RankingAnswer(props) {
  // initialize the position state to store our position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // track position function will update our position whenever onDrag is triggered.
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <>
      <section className="RankingAnswer">
        {/* <img className="medicalTools_2" src={tools2} alt="Medical tools" /> */}
        <h2>Rank the 8 pains about your footwear</h2>
        <div className="dragAndDrop">
          <div className="dragAndDropGroup">
            <Draggable axis="y" onDrag={(event, data) => trackPos(data)}>
              <div className="dragAndDropItem">
                <div>
                  <p>Sweaty Feet</p>
                  <div>
                    x: {position.x.toFixed(0)}, y:{position.y.toFixed(0)}
                  </div>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Tired feet</p>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Body fluids on footwear</p>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Lack of style</p>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Lack of support</p>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Smelly shoes</p>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Hot feet</p>
                </div>
              </div>
            </Draggable>
            <Draggable axis="y">
              <div className="dragAndDropItem">
                <div>
                  <p>Lack of cushion</p>
                </div>
              </div>
            </Draggable>
          </div>
        </div>
      </section>
    </>
  );
}

export default RankingAnswer;
