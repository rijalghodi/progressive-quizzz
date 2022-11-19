import React from "react";
import Question from "./Question";

export default function Quiz({ questions, activeQuestion, setActiveQuestion }) {
  console.log(questions);
  let number = 0;
  return (
    <main className="w-full lg:pr-48">
      {questions?.map((questionSet) => {
        number++;
        return (
          <Question
            questionSet={questionSet}
            number={number}
            active={number === activeQuestion ? true : false}
          />
        );
      })}
    </main>
  );
}
