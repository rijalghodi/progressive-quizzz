import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <main className="w-full sm:w-4/5 md:min-w-[550px] lg:w-1/2 py-32 px-6 lg:py-48  mx-auto">
        <article className="block mb-10">
          <h1 className="text-center mb-8">Welcome to Quizz</h1>
          <p className="text-xl">
            Do you know what is the capital of indonesia? What is the flag color
            of Italia? What is the biggest temple in the world? Wow. Geography
            is interesting to learn. Test your knowledge about Geography here!
            Geography!
          </p>
          <p className="text-xl mb-3">
            There are 10 multiple questions about Geography. Choose the best
            answer by clicking the A, B, C, or D. Submit your answers by
            clicking the submit button on the last page or navigation bar.
            Enjoy!
          </p>
        </article>
        <Link href={"/quiz"}>
          <button className="block button primary-button mx-auto">
            Start The Quiz
          </button>
        </Link>
      </main>
    </>
  );
}
