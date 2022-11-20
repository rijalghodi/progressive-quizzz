import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActiveQuestion, setActiveQuestion } from "../../store/quizSlice";
import styles from "./Quiz.module.css";
import Choices from "./Choices";
import SubmitQuizButton from "./SubmitQuizButton";

export default function Question({ questionSet, amount }) {
  const { number, question } = questionSet;
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

  return (
    <section className={`${hidden && "hidden"} ${styles.fieldWrapper}`}>
      <div className={styles.questionWrapper}>
        <div className={styles.counterWrapper}>{number}.</div>
        <div className={styles.askWrapper}>
          <p>{question}</p>
        </div>
        <Choices number={number} />
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
          <SubmitQuizButton />
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
