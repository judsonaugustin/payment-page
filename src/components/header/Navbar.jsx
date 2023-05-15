import React from "react";
import { logo } from "../../assets";

const Header = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-auto w-[158px] lg:block  "
                  src={logo}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 items center">
                  <ul className="flex gap-10 ml-5">
                    <li>Courses</li>
                    <li>Programs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full  py-[10px] px-[42px] text-black hover:text-black"
              >
                Log In
              </button>
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#0096FF] to-[#0048FF] py-[10px] px-[42px] text-white hover:text-black"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
