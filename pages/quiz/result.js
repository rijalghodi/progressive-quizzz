import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "../../store/quizSlice";
import Link from "next/link";

export default function result() {
  const score = useSelector(selectScore);
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
      {/* <Link href={"/quiz"}>
          <button className="block button secondary-button">
            Start The Quiz
          </button>
        </Link> */}
    </main>
  );
}
