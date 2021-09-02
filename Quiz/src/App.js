import React, {useState, useEffect} from "react";
import Header from "./componentsStyle/Header";
import QuizWelcome from "./componentsLogic/QuizWelcome";
import Footer from "./componentsStyle/Footer";
import "./scss/main.scss";

function App() {

  // const [personName, setPersonName] = useState("");
  // const [groupName, setGroupName] = useState("");
  // // const [dziwnyState, setDziwnyState] = useState("");


  // useEffect(() => {

  //   setPersonName(localStorage.getItem("nameInLocalStorage"));
  //   setGroupName(localStorage.getItem("groupInLocalStorage"));


  // },[])


  return (
    <>
      <Header/>
      <QuizWelcome />
      <Footer />
    </>
  );
}

export default App;
