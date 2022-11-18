import React from "react";
import Layout from "../components/layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import Login from "../components/authentification/Login";

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AuthProvider>
          <Login />
        </AuthProvider>
      </div>
    </Layout>
  );
}
