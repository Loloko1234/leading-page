import React from "react";

const Nav = () => {
  return (
    <nav className="s bg-white h-24 pt-6 text-gray-400 shadow-lg fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-28">
          <img src="/images/logo.svg" />
        </div>
        <div className="flex-grow text-center ">
          <div className="m-2 ml-5 inline-block ">
            <a href="#">Home</a>
          </div>
          <div className="m-2 ml-5 inline-block">
            <a href="#">About</a>
          </div>
          <div className="m-2 ml-5 inline-block">
            <a href="#">Contact</a>
          </div>
          <div className="m-2 ml-5 inline-block">
            <a href="#">Blog</a>
          </div>
          <div className="m-2 ml-5 inline-block">
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="b rounded-full bg-gradient-hsl p-2 h-12 w-44 text-white mr-28">
            Request Invite
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
