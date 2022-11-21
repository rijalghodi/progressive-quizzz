import React, { useRef, useState } from "react";
import style from "./Authentication.module.css";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      alert("Your account has been created!");
      router.push("/login");
    } catch (error) {
      setError("Failed to create an account");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className={"p-10 w-[330px] lg:w-[400px] " + style.formWrapper}>
        <h2 className="text-center mb-4 bg">Get Started</h2>
        {error && (
          <div className="bg-red-200 text-red-900 w-full px-4 py-3 mb-3">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div id="email" className="mb-3">
            <label className="block mb-1">Email</label>
            <input className={style.input} type="email" ref={emailRef}></input>
          </div>

          <div id="password" className="mb-3">
            <label className="block mb-1">Password</label>
            <input
              className={style.input}
              type="password"
              ref={passwordRef}
            ></input>
          </div>

          <div id="password-confirm" className="mb-6">
            <label className="block mb-1">Password Confirmation</label>
            <input
              className={style.input}
              type="password"
              ref={passwordConfirmRef}
            ></input>
          </div>
          <button
            disabled={loading}
            className="w-full button primary-button block mx-auto"
            type="Submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-full text-center mt-2">
        Already have an account?{" "}
        <span className="link">
          <Link href={"/login"}>Log In</Link>
        </span>
      </div>
    </>
  );
}
