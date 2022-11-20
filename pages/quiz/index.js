import React, { useEffect, useState } from "react";
import QuizNav from "../../components/quizNav/QuizNav";
import Quiz from "../../components/quiz/Quiz";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../store/quizAsyncThunk";
import { selectQuiz, rehydrate } from "../../store/quizSlice";
import { store } from "../../store/store";

export default function QuizPage({ initialState }) {
  // Redux tools
  const dispatch = useDispatch();
  const quiz = initialState.quiz.quiz;
  console.log("CObaaaaaaaaaaa");
  console.log(quiz);
  dispatch(rehydrate(quiz));

  // React Tools
  useEffect(() => {
    console.log("rehydrate.......");
    console.log(quiz);
    dispatch(rehydrate(quiz));
  }, []);

  const { currentUser } = useAuth();
  const route = useRouter();
  if (!currentUser) {
    route.push("/login");
    return;
  } else {
    return (
      <div className="w-full flex flex-row">
        <QuizNav quizs={quiz} />
        <Quiz quiz={quiz} />
      </div>
    );
  }
}

export async function getServerSideProps() {
  await store.dispatch(getQuiz());
  const initialState = store.getState();
  return {
    props: {
      initialState,
    },
  };
}
