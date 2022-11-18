import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full px-5 py-3 flex flex-col gap-4 justify-between items-center lg:items-end lg:flex-row lg:gap-6">
      {/* Left side */}
      <div className="flex gap-8 items-end shrink-0">
        <Link href={"/"}>
          <div className="w-fit md:shrink-0">
            <h1 className="text-2xl">Quizzz</h1>
          </div>
        </Link>
        <nav className="hidden lg:col-span-3 lg:flex">
          <ul className="flex gap-4 justify-start">
            <li className="link">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="link">About</li>
            {/* <li className="link"></li> */}
          </ul>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex gap-4 items-center shrink">
        <div className="lg:w-full">
          <button className="hidden lg:flex items-center primary-button px-4 py-1.5 h-11 font-bold gap-2  text-xl">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
