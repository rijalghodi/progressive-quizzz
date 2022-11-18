import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full absolute z-10 px-5 py-3 flex flex-col gap-4 justify-between items-center lg:items-end lg:flex-row lg:gap-6">
      {/* Left side */}
      <div className="flex gap-20 items-end shrink-0">
        <Link href={"/"}>
          <div className="w-fit md:shrink-0">
            <p className="text-3xl font-bold link">Quizzz</p>
          </div>
        </Link>
        <nav className="hidden lg:col-span-3 lg:flex">
          <ul className="flex gap-6 justify-start">
            <li className="link text-2xl">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="link text-2xl">About</li>
            {/* <li className="link"></li> */}
          </ul>
        </nav>
      </div>

      {/* Right side */}
      <div className="hidden lg:flex gap-3 items-center shrink">
        <Link href={"/login"}>
          <button className="w-36 button primary-button">Login</button>
        </Link>
        <Link href={"/signup"}>
          <button className="w-36 button secondary-button">Sign Up</button>
        </Link>
      </div>
    </header>
  );
}
