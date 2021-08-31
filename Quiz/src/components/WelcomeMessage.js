import React from "react";

const WelcomeMessage = ({enteredName, onChangeName, enteredGroup, onChangeGroup}) => {
    return (
        <div>
        <h2>Jak masz na imię?</h2>
        <input value={enteredName} type="text" placeholder="Wpisz imię" onChange={onChangeName}  />
        <h2>Grupa, którą chcę zbadać, to:</h2>
        <input value={enteredGroup} type="text" placeholder="Nazwa grupy" onChange={onChangeGroup} />
      </div>
    )
}

export default WelcomeMessage;