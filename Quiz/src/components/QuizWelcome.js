import React, { useEffect, useState } from "react";
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
  const [name, setName] = NameLocalStorage(
    'nameInLocalStorage'
  );
  const [group, setGroup] = GroupLocalStorage(
    'groupInLocalStorage'
  );
  

  const onChangeName = e => setName(e.target.value)
  const onChangeGroup = e => setGroup(e.target.value)

  return (
    <>
     <form>
      {!enable &&<div>
        <h2>Jak masz na imię?</h2>
        <input value={name} type="text" placeholder="Wpisz imię" onChange={onChangeName}  />
        <h2>Grupa, którą chcę zbadać, to:</h2>
        <input value={group} type="text" placeholder="Nazwa grupy" onChange={onChangeGroup} />
      </div>
      }
      {enable && <Quiz name={name} group={group} />}
      {!enable && <button type="submit" onClick={() => setEnable(true)}>Przejdź do quizu</button>}
      </form>
    </>
  );
}

export default QuizWelcome;


//twój poprzedni test był taki ... chcesz zacząć jeszcze raz? Twoje poprzednie wyniki zostaną skasowane.