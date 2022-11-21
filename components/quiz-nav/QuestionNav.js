import React, { useEffect, useState } from "react";
import styles from "./QuizNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectQuiz, setActiveQuestion } from "../../store/quizSlice";

export default function QuestionNav({ number }) {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const userAnswer = quiz[number - 1].userAnswer;

  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (userAnswer) {
      setAnswered(true);
    } else {
      setAnswered(false);
    }
  });

  return (
    <button
      title={`Go to Question no. ${number}`}
      className={styles.questionNav + " " + (answered && styles.answered)}
      onClick={() => {
        dispatch(setActiveQuestion(number));
      }}
    >
      {number}
    </button>
  );
}
