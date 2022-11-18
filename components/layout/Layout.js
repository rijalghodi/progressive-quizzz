import React from "react";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="my-2 mx-0">
      <Header />
      <>{props.children}</>
    </div>
  );
}
