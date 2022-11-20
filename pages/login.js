import React from "react";
import Layout from "../components/layout/Layout";
import Login from "../components/Authentification/Login";

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Login />
      </div>
    </Layout>
  );
}
