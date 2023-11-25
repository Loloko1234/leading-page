import React from "react";
const LatestArticles = () => {
  return (
    <div>
      <div class="grid mt-36">
        <h1 className="text-6xl row-start-1 row-span-1 col-start-3  col-span-4">
          Latest Articles
        </h1>

        <div className="row-start-2 row-span-5 col-start-3 col-span-2   shadow rounded">
          <img
            className="v rounded-tl rounded-tr"
            src="images/image-currency.jpg"
            alt=""
          />
          <p className="te text-xs mt-5 ml-5 mb-2  text-gray-400">
            By Claire Robinson
          </p>
          <h1 className="te font-medium text-xl ml-5 mr-9 mb-2">
            Receive money in any currency with no fees
          </h1>
          <p className="ml-5 mr-9 mb-2 text-base text-gray-400">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>

        <div className="row-start-2 row-span-5 col-start-6 col-span-2  shadow rounded">
          <img
            className="v rounded-tl rounded-tr"
            src="images/image-restaurant.jpg"
            alt=""
          />
          <p className="te text-xs mt-5 ml-5 mr-9 mb-2 text-gray-400">
            By Wilson Hutton
          </p>
          <h1 className="te font-medium text-xl ml-5 mr-9 mb-2">
            Treat yourself without worrying about money
          </h1>
          <p className="ml-5 mr-9 mb-2 text-base text-gray-400">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>

        <div className="row-start-2 row-span-5 col-start-9 col-span-2  shadow rounded">
          <img
            className="v rounded-tl rounded-tr"
            src="images/image-plane.jpg"
            alt=""
          />
          <p className="te text-xs mt-5 ml-5 mb-2 text-gray-400">
            By Wilson Hutton
          </p>
          <h1 className="te font-medium text-xl ml-5 mr-9 mb-2">
            Treat yourself without worrying about money
          </h1>
          <p className="ml-5 mr-9 mb-2 text-base text-gray-400">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>

        <div className="row-start-2 row-span-5 col-start-12 col-span-2  shadow rounded">
          <img
            className="v rounded-tl rounded-tr"
            src="images/image-confetti.jpg"
            alt=""
          />
          <p className="te text-xs mt-5 ml-5 mb-2 text-gray-400">
            By Wilson Hutton
          </p>
          <h1 className="te font-medium text-xl ml-5 mr-9 mb-2">
            Treat yourself without worrying about money
          </h1>
          <p className="ml-5 mr-9 mb-2 text-base text-gray-400">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>
      </div>
    </div>
  );
};
export default LatestArticles;
