import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-DarkBlue h-52 m-0 p-0">
      <img
        src="images/logo-white.svg"
        alt="logo"
        className="row-start-1 row-span-1 col-start-3 col-span-2 pt-10"
      />
      <div className="row-start-2 col-start-3 ">
        <a href="google.com">
          <img src="images/icon-facebook.svg" alt="" />
        </a>
        <img src="images/icon-youtube.svg" alt="" className="pl-8 -mt-5" />
        <img src="images/icon-twitter.svg" alt="" className="-mt-5 pl-16 " />

        <img src="images/icon-pinterest.svg" alt="" className="-mt-5 pl-24" />
        <img src="images/icon-instagram.svg" alt="" className="-mt-5 pl-32" />
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
  );
};

export default Footer;
