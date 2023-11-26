import React from "react";

const Nav = () => {
  return (
    <nav className="s bg-white h-24 pt-6 text-gray-400 shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between max-[376px]:hidden">
        <div className="flex items-center ml-28 m-0 -mt-14 translate-y-0">
          <img className="ab" src="/images/logo.svg" />
        </div>
        <div className="flex-grow text-center">
          <div className="m-1 ml-5 mb-8 inline-block hover:border-b-4 border-green-300 h-15 hover:text-black">
            <a className="" href="#">
              Home
            </a>
          </div>
          <div className="m-1 ml-5 pb-8 inline-block hover:border-b-4 border-LimeGreen p-2 hover:text-black">
            <a href="#">About</a>
          </div>
          <div className="m-1 ml-5 pb-8 inline-block hover:border-b-4 border-LimeGreen p-2 hover:text-black">
            <a href="#">Contact</a>
          </div>
          <div className="m-1 ml-5 pb-8 inline-block hover:border-b-4 border-LimeGreen p-2 hover:text-black">
            <a href="#">Blog</a>
          </div>
          <div className="m-1 ml-5 pb-8 inline-block hover:border-b-4 border-LimeGreen hover:text-black p-2">
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="b rounded-full p-2 h-12 w-44 text-white mr-28 -mt-14 transition ease-in duration-300 hover:bg-blue-300 bg-gradient-hsl">
            Request Invite
          </button>
        </div>
      </div>
      <div className="min-[376px]:hidden">
        <div className="flex items-center">
          <img className="ab" src="/images/logo.svg" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
