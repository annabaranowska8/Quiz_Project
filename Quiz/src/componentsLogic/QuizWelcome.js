import React, { useEffect, useState } from "react";
import FirstEntry from "./FirstEntry";
import NextEntry from "./NextEntry";
import Header from "../componentsStyle/Header"
import "../scss/main.scss";

function QuizWelcome() {

    {if (!localStorage.getItem("nameInLocalStorage", "groupInLocalStorage")) { 
      return <>
      <Header />
      <FirstEntry />
      </>
    } else {
      return <>
      <Header />
      <NextEntry />
      </>
    }
  }
}

export default QuizWelcome;


//twój poprzedni test był taki ... chcesz zacząć jeszcze raz? Twoje poprzednie wyniki zostaną skasowane.