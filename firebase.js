import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const FirebaseConfig = {
  // Firebase auth api keys for production
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const FirebaseDevConfig = {
  // Firebase auth api keys for development
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_DEV_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DEV_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DEV_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DEV_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_DEV_APP_ID,
};

const app = firebase.initializeApp(FirebaseConfig);

export const auth = getAuth(app);
export default app;
