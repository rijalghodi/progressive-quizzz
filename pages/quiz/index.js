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
  const { quiz } = initialState;
  const { questions } = quiz;

  // React Tools
  // useEffect(() => {
  //   dispatch(rehydrate(questions));
  // });

  const { currentUser } = useAuth();
  const route = useRouter();
  if (!currentUser) {
    route.push("/login");
    return;
  } else {
    return (
      <div className="w-full flex flex-row">
        <QuizNav questions={questions} />
        <Quiz questions={questions} />
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
