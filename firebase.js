import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBn-uoSLe64Y-XHCAIiD6p8aYoBs5VVlDE",
  authDomain: "quizzz-development.firebaseapp.com",
  projectId: "quizzz-development",
  storageBucket: "quizzz-development.appspot.com",
  messagingSenderId: "1052252680060",
  appId: "1:1052252680060:web:b784fe273b740e8da6bef9",
});

export const auth = getAuth(app);
export default app;
