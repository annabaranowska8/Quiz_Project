import React from "react";
import FirstEntry from "./FirstEntry";
import NextEntry from "./NextEntry";
import "../scss/main.scss";

// export default () => {
//   ... treść
// }
const QuizWelcome = () => {
  const isFirstEntry = !localStorage.getItem("name", "group");

  return isFirstEntry ? <FirstEntry /> : <NextEntry />;
};

export default QuizWelcome;
