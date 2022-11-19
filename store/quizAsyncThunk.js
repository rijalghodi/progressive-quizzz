import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQuiz = createAsyncThunk("getQuiz", async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
    );
    if (response.ok == true) {
      const data = await response.json();
      const quiz = data.results;
      console.log(quiz);
      // const { question, correct_answer, incorrect_answers } = questionsSet;
      return quiz;
    } else {
      throw new Error("GET request failed");
    }
  } catch (error) {
    console.log(error);
    return;
  }
});
