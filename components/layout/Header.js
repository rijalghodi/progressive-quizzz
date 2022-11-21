import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

import HeaderAuthenticationButtons from "../authentication/HeaderAuthenticationButtons";
import styles from "./Header.module.css";

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleOpenCloseMobileNav = () => {
    if (openMobileNav) {
      setOpenMobileNav(false);
    } else {
      setOpenMobileNav(true);
    }
  };

  if (openMobileNav) {
    return (
      <div className={styles.mobileMenu} onClick={handleOpenCloseMobileNav}>
        <nav>
          <ul className={styles.mobileNav}>
            <li className="link block text-xl">
              <Link href={"/"}>Home</Link>
            </li>

            <li className="link text-xl">
              <a
                href="https://www.github.com/rijalghodi"
                rel="noreferrer"
                target="_blank"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        <HeaderAuthenticationButtons />
      </div>
    );
  }

  return (
    <header className={styles.header}>
      {/* Left side */}
      <div className="flex items-center shrink-0">
        <Link href={"/"}>
          <div className="text-3xl font-bold link">Quizzz</div>
        </Link>
      </div>

      {/* Right side */}
      <div className={styles.webMenu}>
        <nav className="flex">
          <ul className="flex gap-6">
            <li className="link text-xl">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="link text-xl">
              <a
                href="https://www.github.com/rijalghodi"
                rel="noreferrer"
                target="_blank"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        <HeaderAuthenticationButtons />
      </div>

      {/* Sidebar Mobile Version */}
      <button
        className={styles.mobileMenuIcon}
        onClick={handleOpenCloseMobileNav}
      >
        <HiMenu />
      </button>
    </header>
  );
}
