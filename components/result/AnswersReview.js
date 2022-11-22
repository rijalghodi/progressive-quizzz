import React, { Fragment } from "react";
import resultStyles from "./Result.module.css";
import quizStyles from "../quiz/Quiz.module.css";

export default function AnswersReview({ answers, userAnswer, correctMarker }) {
  console.log(correctMarker);
  return (
    <div className={quizStyles.choicesWrapper}>
      {answers.map((ans, index) => {
        const { marker, answer } = ans;
        return (
          <div
            className={
              quizStyles.choiceWrapper +
              " " +
              (userAnswer === marker &&
                userAnswer !== correctMarker &&
                resultStyles.incorrect) +
              " " +
              (correctMarker === marker && resultStyles.correct)
            }
            key={index}
          >
            <div
              className={
                quizStyles.choiceMarker +
                " " +
                (userAnswer === marker &&
                  userAnswer !== correctMarker &&
                  resultStyles.incorrect) +
                " " +
                (correctMarker === marker && resultStyles.correct)
              }
            >
              {marker}
            </div>
            <div className={quizStyles.choice}>{answer}</div>
          </div>
        );
      })}
    </div>
  );
}
