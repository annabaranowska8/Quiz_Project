import React, { useEffect, useState } from "react";
import FirstEntry from "./FirstEntry";
import NextEntry from "./NextEntry";
import "../scss/main.scss";

function QuizWelcome() {

    {if (!localStorage.getItem("nameInLocalStorage", "groupInLocalStorage")) { 
      return <FirstEntry />
    } else {
      return <NextEntry />
    }
  }
}

export default QuizWelcome;


//twój poprzedni test był taki ... chcesz zacząć jeszcze raz? Twoje poprzednie wyniki zostaną skasowane.