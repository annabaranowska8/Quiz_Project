import React, { useState } from "react";

function QuizSummary({ counter }) {
  const [enable, setEnable] = useState(false);
  const conditionsOfYesAmount = (counter) => {
    if (counter == 0) {
      return "Jesteś bezpieczny.";
    } else if (counter < 3) {
      return "Bądź czujny.";
    } else if (counter < 5) {
      return "Istnieje ryzyko.";
    } else if (counter < 8) {
      return "Ta grupa nie wygląda na bezpieczną.";
    } else {
      return "W grupie są zachowania jak w sekcie! Uważaj!";
    }
  };

  const handleNewStart = () => {
    window.location.reload(false);
  };

  console.log(typeof counter);

  {
    if (counter > 0) {
      return (
        <>
          {!enable && (
            <div className="quiz">
              <div className="container">
                <div className="quiz__box">
                  <div className="quiz__content">
                    <div className="quiz__summary quiz__content">
                      <h2>Liczba Twoich odpowiedzi na "TAK" to: {counter}.</h2>
                      <p>{conditionsOfYesAmount(counter)}</p>
                      <p>Chcesz powtórzyć quiz?</p>
                      <button className="btn" onClick={handleNewStart}>
                        Powtórz quiz
                      </button>
                      <p>
                        Pełna wersja quizu jest dostepna w książce pt. "Sekrety
                        Rozwoju Osobistego".
                      </p>
                      <p>Chcesz uzyskać dostęp do pełnej wersji?</p>
                      <a
                        className="btn"
                        href="https://www.sekretyrozwojuosobistego.pl/"
                      >
                        Kup książkę
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    return (
      <>
        {!enable && (
          <div className="quiz">
            <div className="container">
              <div className="quiz__box">
                <div className="quiz__content">
                  <div className="quiz__summary quiz__content">
                    <h2>Twoja grupa wygląda na bezpieczną. Gratulacje!</h2>
                    <p>
                      Jeśli chcesz powtórzyć quiz dla innej grupy kliknij tutaj:
                    </p>
                    <button className="btn" onClick={handleNewStart}>
                      Powtórz quiz
                    </button>
                    <p>
                      Pełna wersja quizu jest dostepna w książce pt.{" "}
                      <span>"Sekrety Rozwoju Osobistego"</span>.<br />
                      Chcesz uzyskać dostęp do pełnej wersji?
                    </p>
                    <a
                      className="btn"
                      href="https://www.sekretyrozwojuosobistego.pl/"
                    >
                      Kup książkę
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default QuizSummary;
