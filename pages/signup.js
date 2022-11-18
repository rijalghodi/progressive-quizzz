import React from "react";
import Layout from "../components/layout/Layout";
import SignUp from "../components/authentification/SignUp";

export default function SignUpPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <SignUp />
      </div>
    </Layout>
  );
}
