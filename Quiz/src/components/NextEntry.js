import React, {useState} from "react";

const NextEntry = () => {
    const [enable, setEnable] = useState(false);
    const name = localStorage.getItem("nameInLocalStorage")
    const group = localStorage.getItem("groupInLocalStorage")
    const score = localStorage.getItem("clickCounterInLocalStorage");
    const [enable, setEnable] = useState(false);
    const [startNewQuizNow, setStartNewQuizNow] = useState(false);

    const onStartNewQuiz = (e) => {
        e.preventDefault()
        console.log('działa! button Zacznij..');
        setEnable(true)
        setStartNewQuizNow(true)
        localStorage.setItem("nameInLocalStorage", null);
        localStorage.setItem("groupInLocalStorage", null);
        localStorage.setItem("clickCounterInLocalStorage", null);
      };
    const handleSubmit = () => {
        setEnable(true);
        setName(enteredName);
        setGroup(enteredGroup);
      }

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

export default NextEntry;