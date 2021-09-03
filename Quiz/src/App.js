import React, {useState, useEffect} from "react";
import Header from "./componentsStyle/Header";
import QuizWelcome from "./componentsLogic/QuizWelcome";
import Footer from "./componentsStyle/Footer";
import "./scss/main.scss";

function App() {

return (
    <>
      <Header/>
      <QuizWelcome />
      <Footer />
    </>
  );
}

export default App;