import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { scoreCalculator } from "../../util/scoreCalculator";
import { selectQuiz, setActiveQuestion, setScore } from "../../store/quizSlice";

export default function SubmitQuizButton() {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const router = useRouter();
  // Event handler
  const onSubmit = () => {
    if (confirm("Do you want to submit?")) {
      router.push("quiz/result");
      const score = scoreCalculator(quiz);
      dispatch(setScore(score));
      dispatch(setActiveQuestion(1));
    }
  };
  return (
    <button
      type="buton"
      className="button primary-button block mx-auto"
      onClick={onSubmit}
    >
      Submit
    </button>
  );
}
