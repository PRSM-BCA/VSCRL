import "./Question.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { VscThreeBars } from "react-icons/vsc";
import { range, orderBy } from "lodash";
import RankingData from "../../RankingData";

import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

function RankingExp(props) {
  const { currentUser, getUser, addQuestionToAdminSurvey, addQuestionToUserSurvey } = useAuth();
  const [rankAnswer, setRankAnswer] = useState(RankingData);
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();

  // For tracking Admin input
  const [rankPrompt, setRankPrompt] = useState("");

  //  orderBy function to create order by position
  const listRenderer = orderBy(rankAnswer, "position").map((item) => {
    //console.log(item);
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

    // find the affected range of other answers
    let affectedRange;
    if (directionOfDrag === "GREATER") {
      affectedRange = range(source.index, destination.index + 1);
    } else if (directionOfDrag === "LESS") {
      affectedRange = range(destination.index, source.index);
    }

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
                <u>User Engagement</u>: In "Ranking Answer", Users are asked to
                rank the priority of their responses (#1 being most important
                and #8 being least important).
                <br />
                <br />
                Users' responses to previous short answer and word cloud
                questions will auto-fill into "Ranking Answer" type.
                <br />
                <br />
                Go ahead and give the draggable feature a try!
              </p>
            </div>
            <div className="draggable-wrapper">
              <h4>
                <u>Example</u>: Rank the 8 pains with your footwear{" "}
              </h4>
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
              placeholder="Enter your 8 pains prompt here..."
              onChange={(evt) => {
                console.log(rankPrompt);
                setRankPrompt(evt.target.value);
              }}
            />
            <section></section>

            {!rankPrompt ? (
              <Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Enter Question Info
              </Link>
            ) : (
              <Link
                className="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => {
                  addQuestionToAdminSurvey("RankingAnswer", {
                    prompt: rankPrompt,
                  });
                  props.setSurveySubmitted(true)
                  navigate("/Dashboard", { replace: true });
                }}
              >
                Enter Question Info
              </Link>
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
            <h2>{props.rankingAnswer.prompt}</h2>
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
              <Link
                className="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => {
                  props.setSurveySubmitted(true)
                  navigate("/Dashboard", { replace: true })
                }}
              >
                Enter Question Info
              </Link>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default RankingExp;
