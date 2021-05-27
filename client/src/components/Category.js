import React from "react";
import PropTypes from "prop-types";
import Clue from "./Clue";
// import Response from "./Response";

const Category = (props) => {
  return (
    <div className={"category"}>
      <div className="column">
        <div className="header">{props.title.toUpperCase()}</div>
        <ul>
          {props.clues.map((clue) => {
            return (
              <li>
                {props.answeredQuestions.includes(clue.id) ? (
                  <div className="clueValue"></div>
                ) : (
                  <Clue
                    clueObject={clue}
                    selected={false}
                    selectQuestion={props.selectQuestion}
                    answered={props.answeredQuestions.indexOf(clue.id) !== -1}
                    key={clue.id}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;