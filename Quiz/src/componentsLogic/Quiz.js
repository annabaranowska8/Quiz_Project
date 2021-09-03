import React, { useState, useEffect } from "react";
import CounterkLocalStorage from "./CounterkLocalStorage";
import QuizSummary from "./QuizSummary";

function Quiz({name, group}) {
  const [displaySingleQuestion, setDisplaySingleQuestion] = useState([""]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    fetch("./database/questions.json")
      .then((resp) => resp.json())
      .then((data) => setDisplaySingleQuestion(data.questions))
      .catch((err) => console.log(err));
  }, []);

  const onClickHandlerYes = (e) => {
    e.preventDefault();
    setQuestionNumber((currentNumber) => currentNumber + 1);
    setClickCounter((currentClick) => currentClick + 1);
    questionNumber === 9 && setEnable(true);
    setCounter(clickCounter + 1);
}

const onClickHandlerNo = (e) => {
    e.preventDefault();
    setQuestionNumber((currentNumber) => currentNumber + 1);
    questionNumber === 9 && setEnable(true);
}
const displayQuestion = (questionNumber) => {
    const number = displaySingleQuestion[questionNumber].id;
    const question = displaySingleQuestion[questionNumber].question;
    return `${number}. ${question}`;
}

const [counter, setCounter] = CounterkLocalStorage(
  "clickCounterInLocalStorage"
);

  return (
    <>
        {!enable && <div className="quiz__content">
          <div className="quiz__content__header">
          <h3>imię: <span>{name}</span>,  grupa: <span>{group}</span></h3>            
          </div>
          <div className="quiz--questionNumber">
            <p>{displayQuestion(questionNumber)}</p>
          </div>
          <button className="btn"
            id="yesButton"
            onClick={onClickHandlerYes}
          >
            Tak
          </button>
          <button className="btn"
            id="noButton"
            onClick={onClickHandlerNo}
          >
            Nie
          </button>
        </div> }
        {enable && <QuizSummary counter={counter} />}
    </>
  );
}

export default Quiz;