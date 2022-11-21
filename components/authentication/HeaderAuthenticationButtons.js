import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../../context/AuthContext";

export default function HeaderAuthenticationButtons() {
  const { currentUser } = useAuth();
  return (
    <div>
      {currentUser ? (
        <LogoutButton />
      ) : (
        <div className="flex gap-2">
          <Link href={"/login"}>
            <button className="w-28 button primary-button">Log In</button>
          </Link>
          <Link href={"/signup"}>
            <button className="button secondary-button">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
}
