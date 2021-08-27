import React from "react";
// { useState, useEffect }

function QuizSummary({counter}) {

const conditionsOfYesAmount = (counter) => {
    if (counter === 0) {
        return "Jesteś bezpieczny."
    } else if (counter < 3) {
        return "Bądź czujny."
    } else if (counter < 5) {
        return "Istnieje ryzyko."
    } else if (counter < 8) {
        return "Ta grupa nie wygląda na bezpieczną."
    } else {
        return "W grupie są zachowania jak w sekcie."
    }
};

    return (
        <>
        <div>
            <p>Liczba Twoich odpowiedzi na "TAK" to: {counter}.</p>
            <p>{conditionsOfYesAmount(counter)}</p>
        </div>

            
        </>
    )
}

export default QuizSummary;