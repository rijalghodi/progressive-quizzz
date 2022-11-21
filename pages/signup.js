import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import SignUp from "../components/authentication/SignUp";
import { useAuth } from "../context/AuthContext";

export default function SignUpPage() {
  const { currentUser } = useAuth();
  const route = useRouter();
  if (currentUser) {
    route.push("/");
    return;
  }
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <SignUp />
      </div>
    </Layout>
  );
}
