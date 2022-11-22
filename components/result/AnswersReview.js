import React, { Fragment } from "react";
import styles from "./Result.module.css";

export default function AnswersReview({ answers, userAnswer, correct }) {
  return (
    <div className={styles.answersReviewWrapper}>
      {answers.map((ans, index) => {
        const { marker, answer } = ans;
        return (
          <Fragment key={index}>
            <div className={styles.choiceMarker}>{marker}</div>
            <div className={styles.choice}>{answer}</div>
          </Fragment>
        );
      })}
    </div>
  );
}
