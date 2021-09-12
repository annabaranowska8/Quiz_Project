import React, {useState} from "react";

const NextEntry = () => {
    const [enable, setEnable] = useState(false);
    const [name, setName] = NameLocalStorage("name");
    const [group, setGroup] = GroupLocalStorage("group");
    const [enteredName, setEnteredName] = useState("");
    const [enteredGroup, setEnteredGroup] = useState("");
    const [startNewQuizNow, setStartNewQuizNow] = useState(false);
    const score = localStorage.getItem("clickCounterInLocalStorage");

    const onStartNewQuiz = (e) => {
        e.preventDefault()
        console.log('działa! button Zacznij..');
        setEnable(true)
        setStartNewQuizNow(true)
        localStorage.setItem("name", "");
        localStorage.setItem("group", "");
        // localStorage.setItem("clickCounterInLocalStorage", "");
      };
    const handleSubmit = () => {
        setEnable(true);
        setName(enteredName);
        setGroup(enteredGroup);
      }
    
    {if (!localStorage.getItem("clickCounterInLocalStorage") || localStorage.getItem("clickCounterInLocalStorage") === "undefined") {
    return <>
    <form>
      <div className="quiz">
          <div className="container">
            <div className="quiz__box">
              {!enable && <>
                <h2>Witaj {name}!</h2>
                <p>Poprzednio dla grupy {group} Twoim wynikiem było 0/10 odpowiedzi na tak.<br/>
                Chcesz zrobić quiz jeszcze raz? <br/>(Twoje poprzednie wyniki zostaną skasowane.)</p>
                </>}   
              {!enable && <button className="btn" type="submit" onClick={onStartNewQuiz} >Pomyśl o grupie, którą chcesz zbadać...</button>}
              {enable && <button className="btn" type="submit" onClick={handleSubmit}>Jesteś gotowy/a? Zaczynajmy</button>}
            </div>
          </div>
        </div>
      </form> 
    </>
  }
  return <>
    <form>
      <div className="quiz">
          <div className="container">
            <div className="quiz__box">
              {!enable && <>
                <h2>Witaj {name}!</h2>
                <p>Poprzednio dla grupy {group} Twoim wynikiem było {score}/10 odpowiedzi na tak.<br/>
                Chcesz zrobić quiz jeszcze raz? <br/>(Twoje poprzednie wyniki zostaną skasowane.)</p>
                </>}   
              {!enable && <button className="btn" type="submit" onClick={onStartNewQuiz} >Pomyśl o grupie, którą chcesz zbadać...</button>}
              {enable && <button className="btn" type="submit" onClick={handleSubmit}>Jesteś gotowy/a? Zaczynajmy</button>}
            </div>
          </div>
        </div>
      </form> 
    </>
  }
}

export default NextEntry;