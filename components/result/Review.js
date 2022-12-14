import React from "react";
import AnswersReview from "./AnswersReview";
import styles from "../quiz/Quiz.module.css";

export default function Review({ quiz }) {
  console.log(quiz);
  return (
    <div className="mt-36">
      <h1 className="text-center">What You Missed?</h1>
      <div className={styles.fieldWrapper}>
        {quiz?.map((questionSet) => {
          const { question, number, answers, correctMarker, userAnswer } =
            questionSet;
          return (
            <div className={styles.questionWrapper} key={number}>
              <div className={styles.counterWrapper}>{number}.</div>
              <div className={styles.askWrapper}>
                <p>{question}</p>
              </div>
              <AnswersReview
                answers={answers}
                correctMarker={correctMarker}
                userAnswer={userAnswer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
