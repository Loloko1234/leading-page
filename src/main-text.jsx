import React from "react";

const MainText = () => {
  return (
    <div>
      <div>
        <div className="flex text-6xl mt-48 ml-48 mb-10">
          <h1 className="">
            <div>Next generation</div>
            <div className="mt-1">digital banking</div>
          </h1>
        </div>
        <p className="flex w-106 ml-48">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="container ">
          <h1 className="item1 text-6xl">Why choose Easybank?</h1>
          <p className="item2 text-2xl text-gray-400">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <img src="images/icon-online.svg" alt="a1nd" className="a1nd" />
          <h1 className="s row-span-3 bg-red-500">Online Banking</h1>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
          <img src="images/icon-budgeting.svg" alt="2nd" className="a2nd" />
          <img src="images/icon-onboarding.svg" alt="3nd" className="a3nd" />
          <img src="images/icon-api.svg" alt="4nd" className="a4nd" />
        </div>
      </div>
    </div>
  );
};

export default MainText;
