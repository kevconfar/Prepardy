import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
// import Clue from './Clue';

const Gameboard = props => {
  return (
   
    <div id={props.currentQuestion.question ? "question" : "gameboard"}>
    {props.currentQuestion.question ? 
      (
        <div>{props.currentQuestion.question}</div>) :
      (<Categories 
        currentQuestion = { props.currentQuestion }
        selectQuestion = { props.selectQuestion }
        categories = { props.categories }
        answeredQuestions = { props.answeredQuestions } />)}
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;