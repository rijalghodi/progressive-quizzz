import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function LogoutButton() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      setError("Fail to sign out");
      alert(error);
    }
  }
  return (
    <>
      <button className="block button primary-button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
