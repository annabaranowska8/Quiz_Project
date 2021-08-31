import React from "react";

function QuizSummary({nameSummary, groupSummary, counter}) {
    const conditionsOfYesAmount = (counter) => {
        if (counter == null) {
            return "Jesteś bezpieczny."
        } else if (counter < 3) {
            return "Bądź czujny."
        } else if (counter < 5) {
            return "Istnieje ryzyko."
        } else if (counter < 8) {
            return "Ta grupa nie wygląda na bezpieczną."
        } else {
            return "W grupie są zachowania jak w sekcie! Uwazaj!"
        }
    };
    {if (counter > 0) {
        return <>
            <div>
                <div>
                    <h3>{nameSummary}</h3>
                    <h3>{groupSummary}</h3>
                </div>
                <p>Liczba Twoich odpowiedzi na "TAK" to: {counter}.</p>
                <p>{conditionsOfYesAmount(counter)}</p>
                <p>Pamiętaj aby powtozyc quiz po pewnym czasie. Zapisz w swoim kalendarzu, kiedy chcesz to zrobić (pamiętaj o zapisaniu linka do strony).</p>
                <p>Pełna wersja quizu jest dostepna w ksiązce pt. "Sekrety Rozwoju Osobistego"</p>
                <p>Chcę mieć dostęp do pełnej wersji! - przedź do sklepu.</p>
            </div>   
            </>
    } else {
        return <>
            <div>
                <div>
                    <h3>{nameSummary}</h3>
                    <h3>{groupSummary}</h3>
                </div>
                <p>Jest GIT.</p>
                <p>Pamiętaj aby powtozyc quiz po pewnym czasie. Zapisz w swoim kalendarzu, kiedy chcesz to zrobić (pamiętaj o zapisaniu linka do strony).</p>
                <p>Pełna wersja quizu jest dostepna w ksiązce pt. "Sekrety Rozwoju Osobistego"</p>
                <p>Chcę mieć dostęp do pełnej wersji! - przedź do sklepu.</p>
            </div>   
            </>
        }  
    }
}

export default QuizSummary;