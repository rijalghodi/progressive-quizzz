import React from "react";
import Question from "./Question";

export default function Questions({ questions }) {
  let number = 0;
  return (
    <main className="w-full lg:pr-48">
      {questions?.map((question) => {
        number++;
        return <Question questionSet={question} number={number} />;
      })}
    </main>
  );
}
