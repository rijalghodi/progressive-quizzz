import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
