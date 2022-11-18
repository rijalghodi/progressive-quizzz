import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="my-2 mx-2">
      <Header />
      <div className="relative z-0 top-0">{props.children}</div>
    </div>
  );
}
