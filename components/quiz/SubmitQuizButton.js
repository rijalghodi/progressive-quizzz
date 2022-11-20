import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { scoreCalculator } from "../../util/scoreCalculator";
import { selectQuiz, setScore } from "../../store/quizSlice";

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
    }
  };
  return (
    <button type="buton" className="button primary-button" onClick={onSubmit}>
      Submit
    </button>
  );
}
