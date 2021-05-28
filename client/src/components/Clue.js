import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Clue = props => {
 
  return (
    <>
      {props.answered && (
        <motion.div
          onClick={props.answeredQuestion}
          // onClick={() => setOpen(false)}
          className="expanded-card"
          layoutId="expandable-card"
          // style={{ background: clue }}
        >
          <motion.h2 layoutId="expandable-card-h" classname="question">
            <p>{props.question}</p>
            
          </motion.h2>
          

          
        </motion.div>
      )}
      {!props.selected && !props.answered && (
        <motion.div
          // onClick={() => setOpen(true)}
          onClick={() => props.selectQuestion(props.clueObject)}
          className="normal-card"
          layoutId="expandable-card"
          // style={{ background: clue }}
        >
          <motion.h1 layoutId="expandable-card-h" className="clueValue">
            ${props.clueObject.value  ? props.clueObject.value : 1000}
          </motion.h1>
        </motion.div>
      )}
    </>
    // <>
    //   {selected && <div id = 'question' onClick = {answeredQuestion} >{clue.question}</div>}
    //   {!selected && !answered && <div className = 'clueValue' onClick = {() => selectQuestion(clue)}>${clue.value}</div>}
    // </>
  );
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;