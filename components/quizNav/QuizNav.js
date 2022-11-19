import React from "react";
import styles from "./QuizNav.module.css";

export default function QuizNav({ questions }) {
  let number = 0;
  return (
    <aside className={styles.quizNav}>
      <h2 className="">Quiz Navigation</h2>
      <div className="">
        {questions?.map((question) => {
          number++;
          return (
            <button
              type="button"
              title={`Go to Question no. ${number}`}
              className={styles.questionNavButton}
            >
              <span>{number}</span>
            </button>
          );
        })}
      </div>
      <div className="">
        <button
          type="button"
          title={`Go to Question no. ${number}`}
          className={styles.actionButton}
        >
          Submit
        </button>
      </div>
    </aside>
  );
}
