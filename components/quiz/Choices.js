import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAnswersByNumber,
  selectQuiz,
  setUserAnswer,
} from "../../store/quizSlice";
import styles from "./Quiz.module.css";

export default function Choices({ number }) {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const indexQuestion = number - 1;
  const answers = quiz[indexQuestion].answers;

  // event handlers
  const onAnswerChange = ({ target }) => {
    const payload = { indexQuestion: indexQuestion, value: target.value };
    dispatch(setUserAnswer(payload));
  };

  return (
    <div className={styles.choicesWrapper}>
      {answers.map((ans, index) => {
        const { marker, answer } = ans;
        return (
          <div key={index}>
            <input
              type="radio"
              id={`choice${number}${marker}`}
              name={`choices${number}`}
              value={marker}
              className="hidden radio-btn"
              onChange={onAnswerChange}
            ></input>
            <label
              htmlFor={`choice${number}${marker}`}
              className={styles.choiceWrapper}
            >
              <div className={styles.choiceMarker}>{marker}</div>
              <div className={styles.choice}>{answer}</div>
            </label>
          </div>
        );
      })}
    </div>
  );
}
