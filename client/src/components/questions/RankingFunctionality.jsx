import "./Question.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { VscThreeBars } from "react-icons/vsc";
import { range, orderBy } from "lodash";
import RankingData from "../../RankingData";

import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

function RankingExp(props) {
  const { currentUser, getUser } = useAuth();
  const [rankAnswer, setRankAnswer] = useState(RankingData);
  const [userInfo, setUserInfo] = useState("");

  // For tracking Admin input
  const [rankPrompt, setRankPrompt] = useState("");

  //  orderBy function to create order by position
  const listRenderer = orderBy(rankAnswer, "position").map((item) => {
    console.log(item);
    return (
      <Draggable
        axis="y"
        draggableId={item.id.toString()}
        index={item.position}
        key={item.id}
      >
        {/* Provided function */}
        {(provided) => {
          return (
            <div
              className="list-container_item"
              // All data points inside the container div
              {...provided.draggableProps}
              ref={provided.innerRef}
              {...provided.dragHandleProps}
            >
              {/* Activate the handle */}
              <a {...provided.dragHandleProps} className="handlebars">
                <VscThreeBars />
              </a>
              <div>
                {item.position}. {item.answer}
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  });

  //  creating function for onDragEnd
  const onDragEnd = (data) => {
    const { destination, source } = data;
    console.log("this is our destination and source", destination, source);
    // if no destination and no source, don't do anything
    if (!destination || !source) {
      return;
    }
    // if no actual change, then don't change order
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // check the direction greater than or less than
    const directionOfDrag =
      // if destination is greater than source, then GREATER, if not then LESS
      destination.index > source.index ? "GREATER" : "LESS";
    console.log("direction of drag", directionOfDrag);
    // find the affected range of other answers
    let affectedRange;
    if (directionOfDrag === "GREATER") {
      affectedRange = range(source.index, destination.index + 1);
    } else if (directionOfDrag === "LESS") {
      affectedRange = range(destination.index, source.index);

      console.log("Are we getting to this part?");
    }
    console.log("affected range", affectedRange);

    // if answers are affected increment or decrement base on greater than or less than value
    // update positions
    const reorderedAnswers = rankAnswer.map((answer) => {
      if (answer.id === parseInt(data.draggableId)) {
        answer.position = data.destination.index;
        return answer;
      } else if (affectedRange.includes(answer.position)) {
        if (directionOfDrag === "GREATER") {
          answer.position = answer.position - 1;
          return answer;
        } else if (directionOfDrag === "LESS") {
          answer.position = answer.position + 1;
          return answer;
        }
      } else {
        return answer;
      }
    });
    // update the playlist state
    setRankAnswer(reorderedAnswers);
  };

  //-----------------------------------useEffect

  useEffect(() => {
    if (currentUser && !userInfo) {
      getUser(currentUser.uid).then((data) => setUserInfo(data));
    }
  }, [getUser, userInfo, currentUser]);

  //-----------------------------------IF ADMIN
  if (userInfo.usertype === "admin") {
    return (
      <AuthProvider>
        <div className="rankingAnswer-admin">
          <div className="mainContainer">
            <div className="rankTitle-rankInstruction">
              <h1>
                Question Type:
                <br />
                Ranking Answer <i>(Admin)</i>
              </h1>
              <p>
                <u>INSTRUCTIONS:</u> Users' responses to previous short answer
                and word cloud questions will auto-fill into "Ranking question"
                type.
                <br />
                <br />
                In this question, Users are asked to rank the priority of their
                responses (#1 being most important and #8 being least
                important).
                <br />
                <br />
                <b>
                  Here (pictured right) is an example of what a User would see.
                </b>
                <br />
                <br />
                Go ahead and give the draggable feature a try!
              </p>
            </div>
            <div className="draggable-wrapper">
              <h2>Rank the 8 pains with your footwear</h2>
              <div className="list-container">
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="Answers">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {provided.placeholder}
                        {listRenderer}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
          </div>
          <div className="adminRankWrapper">
            <input
              id="questionPrompt"
              type="text"
              placeholder="Rank the 8..."
              onChange={(evt) => {
                console.log(rankPrompt);
                setRankPrompt(evt.target.value);
              }}
            />
            <section></section>

            {!rankPrompt ? (
              <button disabled type="submit" onClick={() => {}}>
                Enter Question Info
              </button>
            ) : (
              <button className="active" type="submit" onClick={() => {}}>
                Enter Question Info
              </button>
            )}
          </div>
        </div>
      </AuthProvider>
    );
    //-----------------------------------IF KEY USER
  } else {
    return (
      <AuthProvider>
        <div className="rankingAnswer-keyUser">
          <div className="draggable-wrapper-keyUser">
            <h2>Rank the 8 pains with your footwear</h2>
            <div className="list-container">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="Answers">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {provided.placeholder}
                      {listRenderer}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default RankingExp;
