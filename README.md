# Progressive Quizzz

## Description

This app allows users to take a multiple-choice quiz on Geography subjects in a personal, beautiful, and convenient environment.

Here is what the app looks like:

<img src="./assets/quizzz-login.png" alt="Quizzz Login"/>

## Features

- Sign up, login, and logout with [firebase](https://firebase.google.com/) authentification
- Multiple choice quiz
- Next and previous button, and quiz navigation
- Score calculation
- Responsive display (mobile, tab, and web)
- Server-side rendering

## How To Run

Visit the deployment on [this link](https://progressive-quizzz.vercel.app/)

If you want to run this app in local computer, do:

1. Download this repository
2. Run `npm install` or `yarn install` to install all the dependencies of the app
3. Create a project in [firebase](https://firebase.google.com/), create web app inside the project. Watch (this tutorial)[https://www.youtube.com/watch?v=ZmpO65DhRN0&t=719s]
4. Copy the firebase configuration key to the `.env.local-example` file in this root directory. See this example:

```
// Configuration key from the firebase website

const firebaseConfig = {
  apiKey: "your-api-key-abcdefghhij",
  authDomain: "your-auth-domain-abcdefghij",
  projectId: "your-project-id-abcdefghij",
  storageBucket: "your-storage-bucket-abcdefghij",
  messagingSenderId: "your-messaging-sender-id-abcdefghij",
  appId: "your-app-id-abcdefghij"
};

// Copy to the .env.local-example like this:

NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-abcdefghij
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain-abcdefghij
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id-abcdefghij
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket-abcdefghij
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id-abcdefghij
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id-abcdefghij

```

5. Change the `.env.local-example` file name to `.env-local`
6. Run `npm run dev` or `yarn dev` to execute the app
7. Open [http://localhost:30000](https://localhost:3000) with your browser to see the result

## Technologies

- Server-side rendering by [Next.js](https://nextjs.org/docs)
- [Firebase](https://firebase.google.com/) authentication
- [React.js](https://reactjs.org/) front end framework
- [Redux](https://redux.js.org/) state management
- [Tailwind](https://tailwindcss.com) css library
