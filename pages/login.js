import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import Login from "../components/authentication/Login";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { currentUser } = useAuth();
  const route = useRouter();
  if (currentUser) {
    route.push("/");
    return;
  }
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Login />
      </div>
    </Layout>
  );
}
