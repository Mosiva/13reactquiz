import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export const Summary = ({ userAnswer }) => {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );

  const wrongAnswers = 100 - skippedAnswers - correctAnswers;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswers}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswers}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswers}%</span>
          <span className="text">incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}> {answer ?? "Skiped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
