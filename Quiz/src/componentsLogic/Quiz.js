import React, { useState, useEffect } from "react";
import NameLocalStorage from "./NameLocalStorage";
import GroupLocalStorage from "./GroupLocalStorage";
import CounterkLocalStorage from "./CounterkLocalStorage";
import QuizSummary from "./QuizSummary";
import HeaderWithLSData from "../componentsStyle/HeaderWithLSData";

function Quiz() {
  const [name, setName] = NameLocalStorage("nameInLocalStorage");
  const [group, setGroup] = GroupLocalStorage("groupInLocalStorage");
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
    setClickCounter((currentClick) => currentClick + 1);
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
      {!enable && <HeaderWithLSData/>}
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
        {enable && <QuizSummary counter={counter} nameSummary={name} groupSummary={group} />}
    </>
  );
}

export default Quiz;
