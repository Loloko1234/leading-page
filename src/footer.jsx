import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-DarkBlue h-52 m-0 p-0 max-[400px]:hidden">
        <img
          src="images/logo-white.svg"
          alt="logo"
          className="row-start-1 row-span-1 col-start-3 col-span-2 pt-10"
        />
        <div className="row-start-2 col-start-3 ">
          <a href="google.com">
            <img src="images/icon-facebook.svg" alt="" />
          </a>
          <a href="google.com">
            <img src="images/icon-youtube.svg" alt="" className="pl-8 -mt-5" />
          </a>
          <a href="google.com">
            <img
              src="images/icon-twitter.svg"
              alt=""
              className="-mt-5 pl-16 "
            />
          </a>
          <a href="google.com">
            <img
              src="images/icon-pinterest.svg"
              alt=""
              className="-mt-5 pl-24"
            />
          </a>
          <a href="google.com">
            <img
              src="images/icon-instagram.svg"
              alt=""
              className="-mt-5 pl-32"
            />
          </a>
        </div>
        <div className="row-start-1 col-start-6 pt-12 font-thin text-sm text-gray-400">
          <p className="text-gray-300 hover:text-LightGrayishBlue cursor-pointer transition ease-in duration-200">
            About Us
          </p>
          <p className="text-gray-300 pt-4 cursor-pointer hover:text-LightGrayishBlue transition ease-in duration-200">
            Contact
          </p>
          <p className="text-gray-300 pt-4 hover:text-LightGrayishBlue cursor-pointer transition ease-in duration-200">
            Blog
          </p>
        </div>
        <div className="row-start-1 col-start-8 pt-12 font-thin text-sm text-gray-400 cursor-pointer">
          <p className="text-gray-300 hover:text-LightGrayishBlue cursor-pointer transition ease-in duration-200">
            Careers
          </p>
          <p className="text-gray-300 pt-4 cursor-pointer transition ease-in duration-200 hover:text-LightGrayishBlue ">
            Support
          </p>
          <p className="text-gray-300 pt-4 cursor-pointer transition ease-in duration-200 hover:text-LightGrayishBlue ">
            Privacy Policy
          </p>
        </div>
        <div className="row-start-1 col-start-13 pt-12 font-thin text-sm text-gray-400">
          <button className="b rounded-full p-2 h-12 w-44 text-white mr-28 -mt-14 transition ease-in duration-300 hover:bg-blue-300 bg-gradient-hsl">
            Request Invite
          </button>
          <p className="pt-6 -ml-10">Website developed by Maciej Kowalczyk</p>
          <p className="pt-2 -ml-10">Design by Frontend Mentor</p>
        </div>
      </footer>
      {/* MobileLook */}
      <footer className="footer text-center bg-DarkBlue h-98 min-[400px]:hidden">
        <div className=" col-start-1 col-span-1 flex justify-center items-center">
          <img
            src="images/logo-white.svg"
            alt="logo"
            className="sd justify-center items-center ml-28"
          />
        </div>
        <div className="row-start-2 col-start-1 flex items-center justify-center">
          <a href="google.com">
            <img src="images/icon-facebook.svg" alt="" className="h-8 m-2" />
          </a>
          <a href="google.com">
            <img src="images/icon-youtube.svg" alt="" className="h-8 m-2" />
          </a>
          <a href="google.com">
            <img src="images/icon-twitter.svg" alt="" className="h-8 m-2" />
          </a>
          <a href="google.com">
            <img src="images/icon-pinterest.svg" alt="" className="h-8 m-2" />
          </a>
          <a href="google.com">
            <img src="images/icon-instagram.svg" alt="" className="h-8 m-2" />
          </a>
        </div>
        <div className="row-start-3 col-start-1 pt-6 font-thin text-sm text-gray-400">
          <p className="text-gray-300 hover:text-LightGrayishBlue cursor-pointer transition ease-in duration-200">
            About Us
          </p>
          <p className="text-gray-300 pt-3 cursor-pointer hover:text-LightGrayishBlue transition ease-in duration-200">
            Contact
          </p>
          <p className="text-gray-300 pt-3 hover:text-LightGrayishBlue cursor-pointer transition ease-in duration-200">
            Blog
          </p>
          <p className="text-gray-300 pt-3 hover:text-LightGrayishBlue cursor-pointer transition ease-in duration-200">
            Careers
          </p>
          <p className="text-gray-300 pt-3 cursor-pointer transition ease-in duration-200 hover:text-LightGrayishBlue ">
            Support
          </p>
          <p className="text-gray-300 pt-3 cursor-pointer transition ease-in duration-200 hover:text-LightGrayishBlue ">
            Privacy Policy
          </p>
        </div>
        <div className="row-start-4 col-start-1 font-thin text-sm text-gray-400 flex justify-center">
          <button className="b rounded-full p-2 h-12 w-44 text-white  transition ease-in duration-300 hover:bg-blue-300 bg-gradient-hsl">
            Request Invite
          </button>
        </div>
        <div className="row-start-5 col-start-1 font-thin text-sm text-gray-400 inline">
          <p className="">Website developed by Maciej Kowalczyk</p>
          <p className="">Design by Frontend Mentor</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
