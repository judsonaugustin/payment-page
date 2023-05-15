import React from "react";
import { logo } from "../../assets";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-auto w-[158px] lg:block cursor-pointer"
                  src={logo}
                  alt="Your Company"
                />
              </div>
              <div className="hidden lg:block">
                <div className="flex space-x-4 items center">
                  <ul className="flex gap-10 ml-5 cursor-pointer">
                    <li>
                      Courses <ExpandMoreIcon />
                    </li>
                    <li>
                      Programs <ExpandMoreIcon />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <SearchIcon className="cursor-pointer" />
              <div className="cursor-pointer lg:hidden ml-5">
                <MenuIcon />
              </div>
              <button
                type="button"
                className="rounded-full  py-[10px] px-[42px] text-black hover:text-black lg:block hidden"
              >
                Log In
              </button>
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#0096FF] to-[#0048FF] py-[10px] px-[42px] text-white hover:text-black lg:block hidden"
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
