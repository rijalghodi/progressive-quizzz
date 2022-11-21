import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./Authentication.module.css";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/");
    } catch (error) {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <>
      <div
        className={
          "p-10 w-[330px] lg:w-[400px] rounded-md " + style.formWrapper
        }
      >
        <h2 className="text-center mb-4 bg">Welcome Back!</h2>
        {error && <div className={style.errorMessage}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div id="email" className="mb-3">
            <label className="block mb-1">Email</label>
            <input className={style.input} type="email" ref={emailRef}></input>
          </div>

          <div id="password" className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              className={style.input}
              type="password"
              ref={passwordRef}
            ></input>
          </div>
          <button
            disabled={loading}
            className="w-full button primary-button block mx-auto"
            type="Submit"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="w-full text-center mt-2">
        Dont have an account?{" "}
        <span className="link">
          <Link href={"/signup"}>Sign up</Link>
        </span>
      </div>
    </>
  );
}
