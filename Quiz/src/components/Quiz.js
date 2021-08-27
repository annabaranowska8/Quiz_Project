import React, { useState, useEffect } from "react";
import QuizSummary from "./QuizSummary";

function Quiz() {
  const [displaySingleQuestion, setDisplaySingleQuestion] = useState([""]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [clickCounter, setClickCounter] = useState(0);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    fetch("./database/questions.json")
      .then((resp) => resp.json())
      .then((data) => setDisplaySingleQuestion(data.questions))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentQuestion(displaySingleQuestion[questionNumber]);
  }, [displaySingleQuestion]);

const onClickHandlerYes = () => {
    setQuestionNumber((currentNumber) => currentNumber + 1);
    setClickCounter((currentClick) => currentClick + 1);
    questionNumber === 9 && setEnable(true);
}

const onClickHandlerNo = () => {
    setQuestionNumber((currentNumber) => currentNumber + 1);
    questionNumber === 9 && setEnable(true);
}
const displayQuestion = (questionNumber) => {
    const number = displaySingleQuestion[questionNumber].id;
    const question = displaySingleQuestion[questionNumber].question;
    return `${number}. ${question}`;
}
console.log(clickCounter);
  return (
    <>
        {!enable && <div>
          <p>QUESTION</p>
          <div style={{ backgroundColor: "red" }}>
            <p>{displayQuestion(questionNumber)}</p>
          </div>
          <button
            id="yesButton"
            onClick={onClickHandlerYes}
          >
            Tak
          </button>
          <button
            id="noButton"
            onClick={onClickHandlerNo}
          >
            Nie
          </button>
        </div> }
        {enable && <QuizSummary counter={clickCounter}/>}
    </>
  );
}

export default Quiz;
