import React, { useState, useEffect } from "react";
import FirstEntry from "./FirstEntry";
import NextEntry from "./NextEntry";
import "../scss/main.scss";

function QuizWelcome({}) {
  // const [updatetowanyState, setUpdatetowanyState] = useState("");

  
  // useEffect(() => {
  //   setDziwnyState(updatetowanyState)
  // }, [updatetowanyState])


      {if (!localStorage.getItem("nameInLocalStorage", "groupInLocalStorage")) { 
      return <>
      <FirstEntry/>
      </>
    } else {
      return <>
      <NextEntry />
      </>
    }
  }
}

export default QuizWelcome;


//twój poprzedni test był taki ... chcesz zacząć jeszcze raz? Twoje poprzednie wyniki zostaną skasowane.