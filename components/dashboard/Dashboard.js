import React from "react";

export default function Dashboard() {
  return (
    <>
      <main className="w-full sm:w-4/5 md:min-w-[550px] lg:w-1/2 py-32 px-6 lg:py-48  mx-auto">
        <article className="block mb-10">
          <h1 className="text-center mb-8">Welcome to Quizz</h1>
          <p className="text-xl mb-3">
            Here, you can test your color combination and save it into pallete
            collection!
          </p>
          <p className="text-xl">
            This test follows the 60-30-10 rule to choose colors. Acording to
            this rule, you just need three colors to style your web. 60 percent
            of your web must be covered by the neutral color. Use it for
            whitespaces and backgrounds. The next 30 percent is primary color,
            by where you style texts and lines. And the last 10 percent is
            accent color. It should be unique and user-attention attractor. It
            is used for buttons and important texts.
          </p>
        </article>
        <button className="block button primary-button mx-auto">
          Start The Quiz
        </button>
      </main>
    </>
  );
}
