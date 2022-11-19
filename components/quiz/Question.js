import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActiveQuestion, setActiveQuestion } from "../../store/quizSlice";
import styles from "./Quiz.module.css";
import Choices from "./Choices";

export default function Question({ questionSet, number, amount }) {
  const { question, correct_answer, incorrect_answers } = questionSet;
  const activeQuestion = useSelector(selectActiveQuestion);
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (activeQuestion === number) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [activeQuestion]);

  // Event handlers
  const onNext = () => {
    dispatch(setActiveQuestion(number + 1));
  };

  const onPrevious = () => {
    dispatch(setActiveQuestion(number - 1));
  };

  const onSubmit = () => {
    console.log("Submit!");
  };

  return (
    <section className={`${hidden && "hidden"} ${styles.fieldWrapper}`}>
      <div className={styles.questionWrapper}>
        <div className={styles.counterWrapper}>{number}.</div>
        <div className={styles.askWrapper}>
          <p>{question}</p>
        </div>
        <Choices correct={correct_answer} incorrects={incorrect_answers} />
      </div>
      <div className="flex gap-2">
        {number !== amount ? (
          <button
            type="buton"
            className="button primary-button"
            onClick={onNext}
          >
            Next
          </button>
        ) : (
          <button
            type="buton"
            className="button primary-button"
            onClick={onSubmit}
          >
            Submit
          </button>
        )}

        {number !== 1 && (
          <button
            disabled={number === 1}
            type="button"
            className="button secondary-button"
            onClick={onPrevious}
          >
            Previous
          </button>
        )}
      </div>
    </section>
  );
}
