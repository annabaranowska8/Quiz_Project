import React, { useState } from "react";
import Quiz from "./Quiz";
import "../scss/main.scss";

function QuizWelcome() {
  const [enable, setEnable] = useState(false);

  return (
    <>
    {!enable && <div>
        <p>
          To jest ekran powitalny
        </p>
    </div>}
      {enable && <Quiz />}
      {!enable && <button onClick={() => setEnable(true)}>Przejdź do quizu</button>}
    </>
  );
}

export default QuizWelcome;


