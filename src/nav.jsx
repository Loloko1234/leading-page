import React, { useState, useEffect } from "react";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const bodyElement = document.querySelector(".body");
    if (bodyElement) {
      if (show) {
        bodyElement.classList.add("blurred");
      } else {
        bodyElement.classList.remove("blurred");
      }
    }
  }, [show]);

  return (
    <nav className=" sfd bg-white h-24 pt-6 text-gray-400 shadow-lg fixed w-full top-0 z-50 max-[400px]:h-16 max-[400px]:pt-0">
      <div className="flex justify-between max-[400px]:hidden">
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
      <div className="sfd min-[400px]:hidden max-w-sm h-16 ">
        <div className="flex justify-between mt-4">
          <img className="ab h-5 ml-4 mt-2" src="/images/logo.svg" />
          <div className="mr-4 mt-1">
            {show ? (
              <div>
                <img
                  src="images/icon-close.svg"
                  alt=""
                  className="re"
                  onClick={() => setShow(!show)}
                />
              </div>
            ) : (
              <img
                src="images/icon-hamburger.svg"
                alt=""
                className="re"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
        </div>
      </div>
      {show ? (
        <div className="ras rounded-lg shadow-2xl bg-white text-2xl mt-1 text-black">
          {" "}
          <div className="text-center">
            <div className="m-1 hover:border-b-4 pt-8 border-green-300 p-2 hover:text-black">
              <a className="" href="#">
                Home
              </a>
            </div>
            <div className="m-1 hover:border-b-4 border-LimeGreen p-2 hover:text-black">
              <a href="#">About</a>
            </div>
            <div className="m-1 hover:border-b-4 border-LimeGreen p-2 hover:text-black">
              <a href="#">Contact</a>
            </div>
            <div className="m-1 hover:border-b-4 border-LimeGreen p-2 hover:text-black">
              <a href="#">Blog</a>
            </div>
            <div className="m-1 hover:border-b-4 border-LimeGreen hover:text-black p-2">
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
