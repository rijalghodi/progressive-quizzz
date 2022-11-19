import React from "react";
import Question from "./Question";

export default function Quiz({ questions }) {
  console.log(questions);
  let number = 0;
  const amount = questions.length;
  return (
    <main className="w-full lg:pr-48">
      {questions?.map((questionSet) => {
        number++;
        return (
          <Question questionSet={questionSet} number={number} amount={amount} />
        );
      })}
    </main>
  );
}
