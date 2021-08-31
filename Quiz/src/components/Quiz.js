import React, { useState, useEffect } from "react";
import QuizSummary from "./QuizSummary";
import QuizWelcome from "./QuizWelcome";

const CounterkLocalStorage = clickLS => {
  const [counter, setCounter] = useState(
      localStorage.getItem(clickLS)
  );
  useEffect(() => {
      localStorage.setItem(clickLS, counter);
  }, [counter])
  return [counter, setCounter];
}

function Quiz({name, group}) {
  const [displaySingleQuestion, setDisplaySingleQuestion] = useState([""]);
  const [questionNumber, setQuestionNumber] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState("");
  const [clickCounter, setClickCounter] = useState(0);
  const [enable, setEnable] = useState(false);
  const nameSummary = name;
  const groupSummary = group;

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
    // parseInt(setCounter((currentNumber) => currentNumber + 1));
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
// const onChangeCounter = (e) => setCounter(e.target.value)

console.log(typeof(clickCounter));
  return (
    <>
        {!enable && <div>
          <div>
            <h3>{name}</h3>
            <h3>{group}</h3>            
          </div>
          <h2>QUESTION</h2>
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
        {enable && <QuizSummary counter={counter} nameSummary={nameSummary} groupSummary={groupSummary} />}
        {/* {enable && <QuizWelcome score={CounterkLocalStorage(counter)} />} */}
    </>
  );
}

export default Quiz;
