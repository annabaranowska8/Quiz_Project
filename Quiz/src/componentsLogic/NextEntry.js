import React, {useState} from "react";
import NameLocalStorage from "./NameLocalStorage";
import GroupLocalStorage from "./GroupLocalStorage";
import Header from "../componentsStyle/Header";

const NextEntry = () => {
    const [enable, setEnable] = useState(false);
    const [name, setName] = NameLocalStorage("nameInLocalStorage");
    const [group, setGroup] = GroupLocalStorage("groupInLocalStorage");
    const [enteredName, setEnteredName] = useState("");
    const [enteredGroup, setEnteredGroup] = useState("");
    const [startNewQuizNow, setStartNewQuizNow] = useState(false);
    const score = localStorage.getItem("clickCounterInLocalStorage");

    const onStartNewQuiz = (e) => {
        e.preventDefault()
        console.log('działa! button Zacznij..');
        setEnable(true)
        setStartNewQuizNow(true)
        localStorage.setItem("nameInLocalStorage", "");
        localStorage.setItem("groupInLocalStorage", "");
        localStorage.setItem("clickCounterInLocalStorage", "");
      };
    const handleSubmit = () => {
        setEnable(true);
        setName(enteredName);
        setGroup(enteredGroup);
      }

    return <>
    {/* {!enable && <Header />} */}
    <form>
      {!enable && <div>        
        <h2>Witaj {name}!</h2>
        <p>Ostatio dla grupy {group} Twoim wynikiem było {score}/10 odpowiedzi na tak.<br/>
        Chcesz zrobić quiz jeszcze raz? (Twoje poprzednie wyniki zostaną skasowane.)</p>
      </div>
      }   
      {!enable && <button type="submit" onClick={onStartNewQuiz} >Pomyśl o grupie, którą chcesz zbadać...</button>}
      {/* {enable && <Header />} */}
      {enable && <button type="submit" onClick={handleSubmit}>Jesteś gotowy/a? Zaczynajmy</button>}
      </form> 
      </>
}

export default NextEntry;