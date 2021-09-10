import React from "react";
import Quiz from './Quiz';

const QuizzWelcome = ({ startQuizzHandler }) => {

    const name = localStorage.getItem('name');
    const group = localStorage.getItem('group');

    const score = localStorage.getItem("clickCounterInLocalStorage") || "0";

    const onStartNewQuiz = () => {
        console.log('działa! button Zacznij..');
        localStorage.setItem('name', '');
        localStorage.setItem('group', '');
        localStorage.setItem("clickCounterInLocalStorage", "0");
        startQuizzHandler(false);
    };

    if(score === "0") {
      return <Quiz name={name} group={group}/>;
    }
  
    return (
      <div className="quiz">
          <div className="container">
            <div className="quiz__box">
              <h2>Witaj {name}!</h2>
              <p>Poprzednio dla grupy {group} Twoim wynikiem było {score}/10 odpowiedzi na tak.<br/>
              Chcesz zrobić quiz jeszcze raz? <br/>(Twoje poprzednie wyniki zostaną skasowane.)</p>

              { score !== "0" && <button className="btn" type="submit" onClick={onStartNewQuiz} >Pomyśl o grupie, którą chcesz zbadać...</button> }
            </div>
          </div>
      </div>
    )
}

export default QuizzWelcome;