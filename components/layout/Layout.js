import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="w-100">{props.children}</div>
    </>
  );
}
