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
        <img src="images/icon-facebook.svg" alt="" />
        <img src="images/icon-youtube.svg" alt="" className="pl-8 -mt-5" />
        <img src="images/icon-twitter.svg" alt="" className="-mt-5 pl-16" />
        <img src="images/icon-pinterest.svg" alt="" className="-mt-5 pl-24" />
        <img src="images/icon-instagram.svg" alt="" className="-mt-5 pl-32" />
      </div>
      <div className="row-start-1 col-start-6 pt-12 font-thin text-sm text-gray-400">
        <p className="text-gray-300">About Us</p>
        <p className="text-gray-300 pt-4">Contact</p>
        <p className="text-gray-300 pt-4">Blog</p>
      </div>
      <div className="row-start-1 col-start-8 pt-12 font-thin text-sm text-gray-400">
        <p className="text-gray-300">Careers</p>
        <p className="text-gray-300 pt-4">Support</p>
        <p className="text-gray-300 pt-4">Privacy Policy</p>
      </div>
      <div className="row-start-1 col-start-13 pt-12 font-thin text-sm text-gray-400">
        <button className="b rounded-full bg-gradient-hsl p-2 h-12 w-44 text-white text-1xl mr-28">
          Request Invite
        </button>
        <p className="pt-6 -ml-10">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
