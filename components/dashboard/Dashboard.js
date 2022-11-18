import React from "react";
import Image from "next/image";
import LogoutButton from "../authentification/LogoutButton";

export default function Dashboard() {
  return (
    <>
      <main className="lg:w-1/2 md:w-4/5 pt-24 md:min-w-[550px] mx-auto">
        <article className="block mb-10">
          <h1 className="text-center mb-8">Welcome to Quizz</h1>
          <p className="text-2xl mb-3">
            Here, you can test your color combination and save it into pallete
            collection!
          </p>
          <p className="text-2xl">
            This test follows the 60-30-10 rule to choose colors. Acording to
            this rule, you just need three colors to style your web. 60 percent
            of your web must be covered by the neutral color. Use it for
            whitespaces and backgrounds. The next 30 percent is primary color,
            by where you style texts and lines. And the last 10 percent is
            accent color. It should be unique and user-attention attractor. It
            is used for buttons and important texts.
          </p>
        </article>
        <button className="block button primary-button mx-auto">
          Start The Quiz
        </button>
        <LogoutButton />
      </main>
      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
