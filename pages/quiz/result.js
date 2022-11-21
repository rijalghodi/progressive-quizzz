import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../../store/quizSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

export default function ResultPage() {
  const score = useSelector(selectScore);
  const route = useRouter();

  const { currentUser } = useAuth();
  if (!currentUser) {
    route.push("/login");
    return;
  }

  return (
    <main className="w-full sm:w-4/5 md:min-w-[550px] lg:w-1/2 py-32 px-6 lg:py-48  mx-auto">
      <article className="block mb-10">
        <h1 className="text-center mb-8">Your Score</h1>
        <p className="text-5xl mb-3 text-center">{score}</p>
      </article>

      <Link href={"/"}>
        <button className="block button primary-button mx-auto">
          Back to Home
        </button>
      </Link>
    </main>
  );
}
