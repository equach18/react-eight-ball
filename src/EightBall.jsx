import { useState } from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { randomChoice } from "./helpers.js";

/**
 * Eightball component
 * renders a Magic Eight Ball simulator that generates random answers when clicked.
 * Users can track the number of times a color has been generated. When the Reset button is clicked, the ball will be set to its initial state.
 */
function EightBall({ answers = defaultAnswers }) {
  // state of answer: {msg, color}
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });
  // state of count: {green, goldenrod, red}
  const [count, setCount] = useState({ green: 0, goldenrod: 0, red: 0 });
  //   handleClick is triggered when the eight ball is clicked and renders a new answer, as well as updates the count of the corresponding color.
  const handleClick = () => {
    const newAnswer = randomChoice(answers);
    setAnswer(newAnswer);
    setCount((count) => {
      const newCount = { ...count };
      newCount[newAnswer.color] += 1;
      return newCount;
    });
  };
  //   resets the eight ball to its original state.
  const reset = () => {
    setAnswer({
      msg: "Think of a Question",
      color: "black",
    });
    setCount({ green: 0, goldenrod: 0, red: 0 });
  };

  return (
    <>
      <div
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: answer.color }}
      >
        {answer.msg}
      </div>
      <div className="EightBall-counter">
        <h3>Counter:</h3>
        <p>Green: {count.green}</p>
        <p>Yellow: {count.goldenrod}</p>
        <p>Red: {count.red}</p>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default EightBall;
