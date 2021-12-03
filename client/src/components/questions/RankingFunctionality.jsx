import "./Question.scss";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { VscThreeBars } from "react-icons/vsc";
import { range, orderBy } from "lodash";

import RankingData from "../../RankingData";

function RankingExp() {
  const [rankAnswer, setRankAnswer] = useState(RankingData);

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

  return (
    <>
      <h2 className="eightPainsTitle">Rank the 8 pains with your footwear</h2>
      <h4 className="eightPainsSubTitle">
        <i>Your shoes could be your biggest ally!</i>
      </h4>
      <div className="list-container">
        {/* make call to drag and drop context and call onDragEnd function that gets
        fired anytime an element is clicked and dragged */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            // type="typeRank"
            droppableId="Answers"
          >
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {provided.placeholder}
                {listRenderer}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default RankingExp;
