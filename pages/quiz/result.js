import React from "react";
import { useSelector } from "react-redux";
import { selectQuiz, selectScore } from "../../store/quizSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Review from "../../components/result/Review";

export default function ResultPage() {
  const score = useSelector(selectScore);
  const quiz = useSelector(selectQuiz);
  const route = useRouter();

  const { currentUser } = useAuth();
  if (!currentUser) {
    route.push("/login");
    return;
  }

  return (
    <main className="w-full py-20 px-6 lg:py-24">
      <article className="block mb-10">
        <h1 className="text-center mb-8">Your Score</h1>
        <p className="text-5xl mb-3 text-center">{score}</p>
      </article>

      <Link href={"/"}>
        <button className="block button primary-button mx-auto">
          Back to Home
        </button>
      </Link>

      <article>
        <Review quiz={quiz} />
      </article>

      <Link href={"/"}>
        <button className="block button primary-button mx-auto">
          Back to Home
        </button>
      </Link>
    </main>
  );
}
