import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="relative z-0 top-0">{props.children}</div>
    </>
  );
}
