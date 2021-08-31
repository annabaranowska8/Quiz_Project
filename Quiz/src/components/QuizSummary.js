import React from "react";

function QuizSummary({nameSummary, groupSummary, counter}) {
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
        return "W grupie są zachowania jak w sekcie! Uwazaj!"
    }
};
// const [enable, setEnable] = useState(false);
// const score = counter;
console.log("to jest pusty counter: ", counter);
    return (
        <>
        <div>
            <div>
                <h3>{nameSummary}</h3>
                <h3>{groupSummary}</h3>
            </div>
            <p>Liczba Twoich odpowiedzi na "TAK" to: {counter}.</p>
            <p>{conditionsOfYesAmount(counter)}</p>
        </div>
        {/* {enable && <QuizWelcome score={counter} />} */}

            
        </>
    )
}

export default QuizSummary;