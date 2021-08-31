import React, { useEffect, useState } from "react";
// import FirstEntry from "./FirstEntry";
// import NextEntry from "./NextEntry";
import Quiz from "./Quiz";
import "../scss/main.scss";

  const NameLocalStorage = nameLS => {
    const [name, setName] = useState(
      localStorage.getItem(nameLS) || ""
    );
    useEffect(() => {
      localStorage.setItem(nameLS, name)
    }, [name])
    return [name, setName];
  };

  const GroupLocalStorage = groupLS => {
    const [group, setGroup] = useState(
      localStorage.getItem(groupLS) || ""
    );
    useEffect(() => {
      localStorage.setItem(groupLS, group)
    }, [group])
    return [group, setGroup];
  };

function QuizWelcome() {
  const [enable, setEnable] = useState(false);
  const [name, setName] = NameLocalStorage("nameInLocalStorage");
  const [group, setGroup] = GroupLocalStorage("groupInLocalStorage");
  const [enteredName, setEnteredName] = useState("");
  const [enteredGroup, setEnteredGroup] = useState("");
  const [startNewQuizNow, setStartNewQuizNow] = useState(false);
  const score = localStorage.getItem("clickCounterInLocalStorage");

  const handleSubmit = () => {
    setEnable(true);
    setName(enteredName);
    setGroup(enteredGroup);
  }
  const onChangeName = (e) => {
    e.preventDefault()
    setEnteredName(e.target.value)
  }
  const onChangeGroup = (e) => {
    e.preventDefault()
    setEnteredGroup(e.target.value)
  }
  const onStartNewQuiz = (e) => {
    e.preventDefault()
    console.log('działa! button Zacznij..');
    setEnable(true)
    setStartNewQuizNow(true)
    localStorage.setItem("nameInLocalStorage", null);
    localStorage.setItem("groupInLocalStorage", null);
    localStorage.setItem("clickCounterInLocalStorage", null);
  };

    {if (!localStorage.getItem("nameInLocalStorage", "groupInLocalStorage")) { 
      return <> 
      <form>
      {!enable && <div>
        <h2>Jak masz na imię?</h2>
        <input value={enteredName} type="text" placeholder="Wpisz imię" onChange={onChangeName}  />
        <h2>Grupa, którą chcę zbadać, to:</h2>
        <input value={enteredGroup} type="text" placeholder="Nazwa grupy" onChange={onChangeGroup} />
      </div> }
      {enable && !startNewQuizNow && <Quiz name={name} group={group} />}
      {!enable && <button type="submit" onClick={handleSubmit}>Przejdź do quizu</button>}
      </form>
      </>
    } else {
    return <>
    <form>
      {!enable && <div>        
        <h2>Witaj {name}!</h2>
        <p>Ostatio dla grupy {group} Twoim wynikiem było {score}/10 odpowiedzi na tak.<br/>
        Chcesz zrobić quiz jeszcze raz? (Twoje poprzednie wyniki zostaną skasowane.)</p>
      </div>
      }   
      {!enable && <button type="submit" onClick={onStartNewQuiz} >Pomyśl o grupie, którą chcesz zbadać...</button>}
      {enable && <button type="submit" onClick={handleSubmit}>Jesteś gotowy/a? Zaczynajmy</button>}
      </form> 
      </>
    }
  }
}

export default QuizWelcome;


//twój poprzedni test był taki ... chcesz zacząć jeszcze raz? Twoje poprzednie wyniki zostaną skasowane.