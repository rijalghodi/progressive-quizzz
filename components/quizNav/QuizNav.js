import React from "react";
import styles from "./QuizNav.module.css";
import QuestionNav from "./QuestionNav";
import SubmitQuizButton from "../quiz/SubmitQuizButton";

export default function QuizNav({ quiz }) {
  return (
    <aside className={styles.quizNav}>
      <h2 className="">Quiz Navigation</h2>
      <ul className="">
        {quiz?.map((questionSet, index) => {
          const { number } = questionSet;
          return (
            <li>
              <QuestionNav number={number} />
            </li>
          );
        })}
      </ul>
      <div>
        <SubmitQuizButton />
      </div>
    </aside>
  );
}
