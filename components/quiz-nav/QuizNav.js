import React, { useState } from "react";
import { VscBook } from "react-icons/vsc";
import { FaBookOpen, FaBook, FaTimes } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import styles from "./QuizNav.module.css";
import QuestionNav from "./QuestionNav";
import SubmitQuizButton from "../quiz/SubmitQuizButton";
import { useAuth } from "../../context/AuthContext";

export default function QuizNav({ quiz }) {
  const [toggleQuizNav, setToggleQuizNav] = useState(false);

  const onToggleQuizNav = () => {
    if (toggleQuizNav) {
      setToggleQuizNav(false);
    } else {
      setToggleQuizNav(true);
    }
  };

  return (
    <>
      <button
        className="w-10 h-10 flex justify-center items-center secondary-button text-3xl fixed z-100 right-8 top-6 sm:right-20  md:right-28 "
        onClick={onToggleQuizNav}
      >
        <CgMenuGridR />
      </button>

      <aside
        className={styles.quizNav + (toggleQuizNav ? " block" : " hidden")}
      >
        <button
          className="w-8 h-8 flex justify-center items-center secondary-button absolute left-5 top-3 text-xl lg:hidden"
          onClick={onToggleQuizNav}
        >
          <FaTimes />
        </button>
        <h2 className="text-center">Quiz Navigation</h2>
        <ul className="my-5 grid grid-cols-4 gap-1.5">
          {quiz?.map((questionSet, index) => {
            const { number } = questionSet;
            return (
              <li key={index}>
                <QuestionNav number={number} />
              </li>
            );
          })}
        </ul>
        <div className="px-auto">
          <SubmitQuizButton />
        </div>
      </aside>
    </>
  );
}
