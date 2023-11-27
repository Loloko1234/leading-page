import React from "react";
import Nav from "./nav";
import Main from "./main";
import MainText from "./main-text";
import LatestArticles from "./Lastest-articles";
import Footer from "./footer";
export default function App() {
  return (
    <div className="max-[400px]:max-w-sm">
      <div>
        <Nav />
      </div>
      <div className="body">
        <Main />
        <MainText />
        <LatestArticles />
        <Footer />
      </div>
      <div></div>
    </div>
  );
}
