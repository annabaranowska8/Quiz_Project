import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";
// import CounterkLocalStorage from "./Quiz";
import "../scss/main.scss";
import WelcomeMessage from "./WelcomeMessage";

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
  const [name, setName] = NameLocalStorage(
    "nameInLocalStorage"
  );
  const [group, setGroup] = GroupLocalStorage(
    "groupInLocalStorage"
  );

  const [enteredName, setEnteredName] = useState("");
  const [enteredGroup, setEnteredGroup] = useState("");
  const [startNewQuizNow, setStartNewQuizNow] = useState(false);

  // const previousScore = score;
  const score = localStorage.getItem("clickCounterInLocalStorage");
  console.log(score);

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
    setEnable(true)
    setStartNewQuizNow(true)
    localStorage.setItem("nameInLocalStorage", "");
    localStorage.setItem("groupInLocalStorage", "");
    localStorage.setItem("clickCounterInLocalStorage", "");
  };

  console.log(!localStorage.getItem("nameInLocalStorage"));

    {if ((localStorage.getItem("nameInLocalStorage") === "" 
    || localStorage.getItem("nameInLocalStorage") === false) 
    && (localStorage.getItem("groupInLocalStorage") === ""
    || localStorage.getItem("groupInLocalStorage") === false)) { 
      return <form>
      {!enable && <WelcomeMessage enteredName={enteredName} onChangeName={onChangeName} enteredGroup={enteredGroup} onChangeGroup={onChangeGroup} />
      }
      {enable && !startNewQuizNow && <Quiz name={name} group={group} />}
      {!enable && <button type="submit" onClick={handleSubmit}>Przejdź do quizu</button>}
      {setStartNewQuizNow && <WelcomeMessage enteredName={enteredName} onChangeName={onChangeName} enteredGroup={enteredGroup} onChangeGroup={onChangeGroup} />}
      <p>test gora</p>
      </form>
    } else {
    return <form>
      {!enable && <div>        
        <h2>Witaj {name}!</h2>
        <p>Ostatio dla grupy {group} Twoim wynikiem było {score}/10 odpowiedzi na tak.<br/>
        Chcesz zrobić quiz jeszcze raz? (Twoje poprzednie wyniki zostaną skasowane.)</p>
      </div>
      }
      <p>test dol</p>
      
      {!enable && <button type="submit" onSubmit={onStartNewQuiz} >Zacznij quiz</button>}
      {enable && startNewQuizNow && <WelcomeMessage enteredName={enteredName} onChangeName={onChangeName} enteredGroup={enteredGroup} onChangeGroup={onChangeGroup} />}
      </form>
      


      
    }
  }
    
  
}

export default QuizWelcome;


//twój poprzedni test był taki ... chcesz zacząć jeszcze raz? Twoje poprzednie wyniki zostaną skasowane.