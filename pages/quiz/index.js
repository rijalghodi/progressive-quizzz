import React, { useEffect, useState } from "react";
import QuizNav from "../../components/quizNav/QuizNav";
import Quiz from "../../components/quiz/Quiz";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../store/quizAsyncThunk";
import { selectQuiz, rehydrate } from "../../store/quizSlice";
import { store } from "../../store/store";

export default function QuizPage({ quiz }) {
  // Redux tools
  const dispatch = useDispatch();
  const questions = quiz.quiz.questions;

  // React Tools
  useEffect(() => {
    dispatch(rehydrate(questions));
  });

  const [activeQuestion, setActiveQuestion] = useState(1);
  const { currentUser } = useAuth();
  const route = useRouter();
  if (!currentUser) {
    route.push("/login");
    return;
  } else {
    return (
      <div className="w-full flex flex-row">
        <QuizNav questions={questions} setActiveQuestion={setActiveQuestion} />
        <Quiz
          questions={questions}
          activeQuestion={activeQuestion}
          setActiveQuestion={setActiveQuestion}
        />
      </div>
    );
  }
}

export async function getServerSideProps() {
  // fetch data from API
  // const response = await fetch(
  //   "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
  // );
  // const data = await response.json();
  // const quiz = data.results;
  await store.dispatch(getQuiz());
  console.log("Get State");
  const initialState = store.getState();
  console.log(initialState);

  return {
    props: {
      quiz: initialState,
    },
  };
}
