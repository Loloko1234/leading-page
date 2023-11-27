import React from "react";

const MainText = () => {
  return (
    <div>
      <div className="max-[400px]:hidden">
        <div className="flex text-6xl mt-48 ml-48 mb-10">
          <h1 className="t">
            <div>Next generation</div>
            <div className="mt-1">digital banking</div>
          </h1>
        </div>
        <p className="flex w-106 ml-48">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex">
          <button className="b rounded-full bg-gradient-hsl p-2 h-12 w-44 text-white text-1xl ml-48 mt-10 transition ease-in duration-300 hover:bg-blue-300 ">
            Request Invite
          </button>
        </div>
        <div className="container ">
          <h1 className="item1 text-6xl">Why choose Easybank?</h1>
          <p className="item2 text-2xl text-gray-400">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <img src="images/icon-online.svg" alt="a1nd" className="a1nd" />
          <h1 className="s row-start-5 row-span-1 col-start-3 col-span-2 text-2xl">
            Online Banking
          </h1>
          <p className="s row-start-6 row-span-2 col-start-3 col-span-4 text-1xl text-gray-400 pr-16">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
          <img src="images/icon-budgeting.svg" alt="2nd" className="a2nd" />
          <h1 className="s row-start-5 row-span-1 col-start-7 col-span-2 text-2xl">
            Simple Budgeting
          </h1>
          <p className="s row-start-6 row-span-2 col-start-7 col-span-4 text-1xl text-gray-400 pr-16">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
          <img src="images/icon-onboarding.svg" alt="3nd" className="a3nd" />
          <h1 className="s row-start-5 row-span-1 col-start-11 col-span-2 text-2xl">
            Fast Onboarding
          </h1>
          <p className="s row-start-6 row-span-2 col-start-11 col-span-4 text-1xl text-gray-400 pr-16">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
          <img src="images/icon-api.svg" alt="4nd" className="a4nd" />
          <h1 className="s row-start-5 row-span-1 col-start-11 col-span-8 pl-24 text-center text-2xl">
            Open API
          </h1>
          <p className="s row-start-6 row-span-2 col-start-15 col-span-4 text-1xl text-gray-400 pr-16">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
      {/* MoblieLook */}
      <div className="min-[400px]:hidden">
        <div className="flex text-4xl mt-80 ml-12 text-center mb-4">
          <h1 className="t">
            <div>Next generation</div>
            <div className="mt-1">digital banking</div>
          </h1>
        </div>
        <p className="flex text-sm ml-11 justify-center">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex justify-center">
          <button className="b rounded-full bg-gradient-hsl p-2 h-12 w-44 text-white text-1xl mt-8 transition ease-in duration-300 hover:bg-blue-300 ">
            Request Invite
          </button>
        </div>
        <div className="container text-center">
          <h1 className="item1 text-4xl mt-14">Why choose Easybank?</h1>
          <p className="item2 text-sm text-center mr-7 ml-7  text-gray-400">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <img
            src="images/icon-online.svg"
            alt="a1nd"
            className="a1nd mx-auto"
          />
          <h1 className="s row-start-5 col-start-1 text-2xl">Online Banking</h1>
          <p className="s row-start-6 col-start-1 text-sm text-gray-400 mr-7 ml-7">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
          <img
            src="images/icon-budgeting.svg"
            alt="2nd"
            className="a2nd mx-auto"
          />
          <h1 className="s row-start-8 col-start-1 text-2xl">
            Simple Budgeting
          </h1>
          <p className="s row-start-9 text-sm text-gray-400 mr-7 ml-7">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
          <img
            src="images/icon-onboarding.svg"
            alt="3nd"
            className="a3nd mx-auto"
          />
          <h1 className="s row-start-11 col-start-1 text-2xl">
            Fast Onboarding
          </h1>
          <p className="s row-start-12 text-sm text-gray-400 mr-7 ml-7">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
          <img src="images/icon-api.svg" alt="4nd" className="a4nd mx-auto" />
          <h1 className="s row-start-14 col-start-1 text-2xl">Open API</h1>
          <p className="s row-start-15 text-sm text-gray-400 mr-7 ml-7">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainText;
