import React from "react";
import Nav from "./nav";
import Main from "./main";
import MainText from "./main-text";
export default function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Main />
        <MainText />
      </div>
      <div></div>
    </div>
  );
}
