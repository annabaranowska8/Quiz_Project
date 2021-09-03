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
      const handleSubmit = (e) => {
        e.preventDefault();
        setEnable(true);
        setName(enteredName);
        setGroup(enteredGroup);
      }
      
    return <> 
      <form onSubmit={handleSubmit}>
        <div className="quiz">
          <div className="container">
            <div className="quiz__box">
              {!enable && <>
              <div className="quiz__box--form">
                <label>Jak masz na imię?</label>
                <input value={enteredName} type="text" placeholder="Wpisz imię" onChange={onChangeName}  />        
              </div>
              <div className="quiz__box--form">
                <label>Grupa, którą chcesz zbadać, to:</label>
                <input value={enteredGroup} type="text" placeholder="Nazwa grupy" onChange={onChangeGroup} />         
              </div>       
            </>}        
      {enable && !startNewQuizNow && <Quiz name={name} group={group} />}
      {!enable && <div className="quiz__box--form">
                    <button className="btn" type="submit">Przejdź do quizu</button>
                  </div>}
            </div>
          </div>        
        </div>
      </form>
      </>
}

export default FirstEntry;