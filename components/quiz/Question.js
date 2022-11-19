import React, { useState } from "react";
import styles from "./Quiz.module.css";
import Choices from "./Choices";

export default function Question({ questionSet, number }) {
  const { question, correct_answer, incorrect_answers } = questionSet;
  console.log(question);

  const [hidden, setHidden] = useState(true);

  return (
    <section className={"" + styles.fieldWrapper}>
      <div className={styles.questionWrapper}>
        <div className={styles.counterWrapper}>{number}.</div>
        <div className={styles.askWrapper}>
          <p>{question}</p>
        </div>
        <Choices correct={correct_answer} incorrects={incorrect_answers} />
      </div>
      <div className="flex gap-2">
        <button className="button primary-button">Next</button>
        <button className="button secondary-button">Previous</button>
      </div>
    </section>
  );
}
