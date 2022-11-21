import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "./quizAsyncThunk";
import quizNormalizer from "../util/quizNormalizer";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: [],
    activeQuestion: 1,
    score: 0,
    isLoading: false,
    error: false,
  },
  reducers: {
    setUserAnswer: (state, { payload }) => {
      const { indexQuestion, value } = payload;
      state.quiz[indexQuestion].userAnswer = value;
    },
    rehydrate: (state, { payload }) => {
      state.quiz = payload;
    },
    setScore: (state, { payload }) => {
      state.score = payload;
    },
    setActiveQuestion: (state, { payload }) => {
      state.activeQuestion = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuiz.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getQuiz.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.quiz = quizNormalizer(payload);
      })
      .addCase(getQuiz.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const selectQuiz = (state) => state.quiz.quiz;
export const selectScore = (state) => state.quiz.score;

export const selectQuestion = (state, number) =>
  state.quiz.quiz[number - 1].question;
export const selectActiveQuestion = (state) => state.quiz.activeQuestion;

export const { rehydrate, setScore, setActiveQuestion, setUserAnswer } =
  quizSlice.actions;
export default quizSlice.reducer;
