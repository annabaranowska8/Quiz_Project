import React from "react";
import FirstEntry from "./FirstEntry";
import NextEntry from "./NextEntry";
import "../scss/main.scss";

function QuizWelcome() {
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