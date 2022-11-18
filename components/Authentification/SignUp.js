import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <Card className="p-5">
        <h2 className="text-center mb-4 bg">Sign Up</h2>
        <Form>
          <Form.Group id="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef}></Form.Control>
          </Form.Group>

          <Form.Group id="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef}></Form.Control>
          </Form.Group>

          <Form.Group id="password-confirm" className="mb-3">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              ref={passwordConfirmRef}
            ></Form.Control>
          </Form.Group>
          <Button className="w-100" type="Submit">
            Sign Up
          </Button>
        </Form>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
}
