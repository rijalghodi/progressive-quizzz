import React from "react";
import styles from "./QuizNav.module.css";
import { useDispatch } from "react-redux";
import { setActiveQuestion } from "../../store/quizSlice";

export default function QuestionNav({ number }) {
  const dispatch = useDispatch();
  return (
    <button
      title={`Go to Question no. ${number}`}
      className={styles.questionNav}
      onClick={() => {
        dispatch(setActiveQuestion(number));
      }}
    >
      <span>{number}</span>
    </button>
  );
}
