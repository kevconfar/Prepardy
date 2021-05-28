import React from "react";
import PropTypes from "prop-types";
import Category from "./Category";

const Categories = props => {
  return (
    <div className="board" id={'categories'} >
      {props.categories.map(category =>
        <Category 
          title = {category.title}
          currentQuestion = { props.currentQuestion }
          selectQuestion = { props.selectQuestion }
          answeredQuestions = { props.answeredQuestions }
          clues = { category.clues }
          key = { category.id }
          id = { category.id }
        />
        )}
      {/* display all the categories */}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;