import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Clue = props => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
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
            {/* <input type="text" placeholder="Answer Here!"></input>  */}
            {/* <Response /> */}
          </motion.h2>
          {/* <p>{clue.text}</p> */}

          {/* <input className="response" type="text" placeholder="Answer Here!"></input>  */}
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