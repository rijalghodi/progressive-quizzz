import React from "react";
import styles from "./Quiz.module.css";
import Choices from "./Choices";

export default function Question({ questionSet, number }) {
  const { question, correct_answer, incorrect_answers } = questionSet;

  return (
    <section className={styles.fieldWrapper}>
      <div className={styles.questionWrapper}>
        <div className={styles.counterWrapper}>{number}</div>
        <div className={styles.askWrapper}>
          <p>{question}</p>
        </div>
        <Choices correct={correct_answer} incorrects={incorrect_answers} />
      </div>
    </section>
  );
}
