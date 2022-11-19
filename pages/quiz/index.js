import React from "react";
import QuizNav from "../../components/quizNav/QuizNav";
import Questions from "../../components/quiz/Questions";

export default function QuizPage({ questions }) {
  return (
    <div className="w-full flex flex-row">
      <QuizNav questions={questions} />
      <Questions questions={questions} />
    </div>
  );
}

export async function getServerSideProps() {
  // fetch data from API
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
  );
  const data = await response.json();
  const questions = data.results;

  return {
    props: {
      questions,
    },
  };
}
