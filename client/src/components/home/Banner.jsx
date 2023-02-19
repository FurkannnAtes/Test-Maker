import React from "react";
import { Link } from "react-router-dom";
//icons
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center gap-10">
      <div>
        <img
          className="w-[350px] md:w-[400px] rounded-xl"
          src="/assets/banner.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-4xl font-semibold ">Create your test</div>
        <div className="w-[300px]">Create your test and start solving</div>
        <div>
          <Link
            to="/generate/test"
            className="bg-white p-2 px-4 rounded-md flex items-center gap-1 group  w-[170px]"
          >
            Generate test
            <BsArrowRightShort className=" group-hover:ml-2 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
