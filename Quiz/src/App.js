import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quizz from "./components/Quizz/Quizz";

import "./scss/main.scss";

function App() {
  return (
    <>
      <Header />
      <Quizz />
      <Footer />
    </>
  );
}

export default App;
