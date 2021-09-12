import React, { useState, useEffect} from "react";
// import ReactDOM from "react-dom";
import useKeypress from 'react-use-keypress';
import CounterLocalStorage from "./CounterLocalStorage";
import Loader from "./Loader";
import QuizSummary from "./QuizSummary";

function Quiz({ name, group }) {
  const [displaySingleQuestion, setDisplaySingleQuestion] = useState([""]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("./database/questions.json")
      .then((resp) => resp.json())
      .then((data) => { setDisplaySingleQuestion(data.questions); setLoading(false) })
      .catch((err) => { console.log(err); setLoading(false) });
  }, []);

  const onClickHandlerYes = (e, off) => {
    e.preventDefault();
    console.log("gyyuiyiu");
    setQuestionNumber((currentNumber) => currentNumber + 1);
    setClickCounter((currentClick) => currentClick + 1);
    questionNumber === 9 && setEnable(true);
    setCounter(clickCounter + 1);
  };
  const onClickHandlerNo = (e) => {
    e.preventDefault();
    setQuestionNumber((currentNumber) => currentNumber + 1);
    questionNumber === 9 && setEnable(true);
  };
  // const onArrowRightYes = (e) => onClickHandlerYes(e, "off");

  // const onArrowLeftNo = () => {
  //   setQuestionNumber((currentNumber) => currentNumber + 1);
  //   questionNumber === 9 && setEnable(true);
  // };

  const displayQuestion = (questionNumber) => {
    console.log(displaySingleQuestion[questionNumber]);
    const number = displaySingleQuestion[questionNumber].id;
    const question = displaySingleQuestion[questionNumber].question;
    return `${number}. ${question}`;
  };

  const [counter, setCounter] = CounterLocalStorage(
    "clickCounterInLocalStorage"
  );

// useKeypress(["ArrowRight", "ArrowLeft"], (e) => {
//     if (e.key === "ArrowRight") {
//       console.log("test");
//       onArrowRightYes();
//     } else {
//       onArrowLeftNo();
//     }
//   });

  return (
    <>
      { loading ? <Loader /> : !enable && (
        <form className="quiz">
          <div className="container">
            <div className="quiz__box">
              <div className="quiz__content">
                <div className="quiz__content__header">
                  <h3>
                    imię: <span>{name}</span>, grupa: <span>{group}</span>
                  </h3>
                </div>
                <div className="quiz--questionNumber">
                  <p>{displayQuestion(questionNumber)}</p>
                </div>
                <button
                  className="btn"
                  // id="noButton"
                  onClick={onClickHandlerNo}
                >
                  Nie
                </button>
                <button
                  className="btn"
                  // id="yesButton"
                  // ref={input => {myInputRef = input}}
                  onClick={onClickHandlerYes}
                >
                  Tak
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {enable && <QuizSummary counter={counter} />}
    </>
  );
}

export default Quiz;
