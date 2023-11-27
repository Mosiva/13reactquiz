import { useRef } from "react";

export const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAsnwers = useRef();
  if (!shuffledAsnwers.current) {
    shuffledAsnwers.current = [...answers];
    shuffledAsnwers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAsnwers.current.map((answer) => {
        const isSeleceted = selectedAnswer === answer;
        let cssClass = " ";

        if (answerState === "answered" && isSeleceted) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSeleceted
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ' '}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
