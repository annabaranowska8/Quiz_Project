import React, { useState } from "react";

import QuizzWelcome from "./QuizzWelcome";
import UserDataForm from "./UserDataForm";

export default () => {
  const [quizzStarted, setQuizzStarted] = useState(
    localStorage.getItem("quizzEnabled")
  );

  return quizzStarted ? (
    <QuizzWelcome startQuizzHandler={setQuizzStarted} />
  ) : (
    <UserDataForm startQuizzHandler={setQuizzStarted} />
  );
};
