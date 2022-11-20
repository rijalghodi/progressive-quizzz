import React from "react";
import styles from "./QuizNav.module.css";
import QuestionNav from "./QuestionNav";

export default function QuizNav({ quiz }) {
  return (
    <aside className={styles.quizNav}>
      <h2 className="">Quiz Navigation</h2>
      <ul className="">
        {quiz?.map((questionSet, index) => {
          const { number } = questionSet;
          return (
            <li key={index}>
              <QuestionNav number={number} />
            </li>
          );
        })}
      </ul>
      <div className="">
        <button type="button" className={styles.actionButton}>
          Submit
        </button>
      </div>
    </aside>
  );
}
