import React, {useState} from "react";
import NameLocalStorage from "./NameLocalStorage";
import GroupLocalStorage from "./GroupLocalStorage";
import Quiz from "./Quiz";


const FirstEntry = () => {
    const [enable, setEnable] = useState(false);
    const [name, setName] = NameLocalStorage("nameInLocalStorage");
    const [group, setGroup] = GroupLocalStorage("groupInLocalStorage");
    const [enteredName, setEnteredName] = useState("");
    const [enteredGroup, setEnteredGroup] = useState("");
    const [startNewQuizNow, setStartNewQuizNow] = useState(false);

    const onChangeName = (e) => {
        e.preventDefault()
        setEnteredName(e.target.value)
      }
      const onChangeGroup = (e) => {
        e.preventDefault()
        setEnteredGroup(e.target.value)
      }
      const handleSubmit = () => {
        setEnable(true);
        setName(enteredName);
        setGroup(enteredGroup);
      }


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
}

export default FirstEntry;