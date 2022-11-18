import React from "react";
import Layout from "../components/layout/Layout";
import SignUp from "../components/Authentification/SignUp";
import { Container } from "react-bootstrap";

export default function SignUpPage() {
  return (
    <Layout>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
    </Layout>
  );
}
