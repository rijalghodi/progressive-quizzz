import React, { Fragment } from "react";
import Question from "./Question";

export default function Quiz({ quiz }) {
  console.log(quiz);
  // let number = 0;
  const amount = quiz.length;
  return (
    <main className="w-full lg:pr-48">
      {quiz?.map((questionSet, index) => {
        return (
          <Fragment key={index}>
            <Question questionSet={questionSet} amount={amount} />
          </Fragment>
        );
      })}
    </main>
  );
}
