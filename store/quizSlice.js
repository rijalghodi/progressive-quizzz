import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "./quizAsyncThunk";
import quizNormalizer from "../util/helper";

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
    rehydrate: (state, { payload }) => {
      state.questions = payload;
    },
    increaseScore: (state, { payload }) => {
      state.score = state.score + 1;
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
export const selectActiveQuestion = (state) => state.quiz.activeQuestion;

export const { rehydrate, increaseScore, setActiveQuestion } =
  quizSlice.actions;
export default quizSlice.reducer;
