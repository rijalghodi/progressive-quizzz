import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "./quizAsyncThunk";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    score: 0,
    isLoading: false,
    error: false,
  },
  reducers: {
    rehydrate: (state, { payload }) => {
      state.questions = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuiz.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.questions = action.payload;
      })
      .addCase(getQuiz.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const selectQuiz = (state) => state.quiz.quiz;

export const { rehydrate } = quizSlice.actions;
export default quizSlice.reducer;
