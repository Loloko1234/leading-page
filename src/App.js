import React from "react";
import Nav from "./nav";
import Main from "./main";
import MainText from "./main-text";
import LatestArticles from "./Lastest-articles";
import Footer from "./footer";
export default function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Main />
        <MainText />
        <LatestArticles />
        <Footer />
      </div>
      <div></div>
    </div>
  );
}
