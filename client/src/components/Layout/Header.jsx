import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import { FaCircleUser } from "react-icons/fa6";
import { logOut } from "../../app/slices/authSlice.js";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Course", link: "/courses" },
    { name: "Bootcamp", link: "/bootcamp" },
    { name: "Contact", link: "/contact" },
  ];

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated);

  const logoutHandler = () => {
    dispatch(logOut());
  };

  return (
    <nav className="w-full shadow-md sticky top-0 bg-white z-[999]">
      <div className=" md:m-auto md:flex md:justify-between md:items-center py-6 md:py-6 px-[43px]">
        <div>
          <Link to={"/"}>
            <img className="h-11 cursor-pointer" src={Logo} alt="" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-8 top-7 cursor-pointer"
        >
          {!open ? (
            <RxHamburgerMenu className="text-3xl text-gray-700" />
          ) : (
            <RxCross1 className="text-3xl text-gray-700" />
          )}
        </div>

        <div>
          <ul
            className={`px-5 pt-5 pb-36 absolute w-full bg-white  left-0 md:static md:w-auto md:flex md:justify-center md:items-center md:p-0 transition-all duration-700 ease-in-out ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="py-1 ml-5 mb-2 md:ml-0 md:mr-9 md:mb-0 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary_color_1 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  <Link
                    className="font-poppins font-medium tracking-wide"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <div className="md:mt-0 pl-10 mt-4">
              {isAuthenticated ? (
                <div className=" flex justify-center items-center gap-3">
                  <h3 className="font-poppins tracking-wide font-semibold">
                    {user?.user.name.split(" ")[0]}
                  </h3>
                  <Link
                    to="/user/dashboard"
                    className="text-primary_color_1 text-3xl hover:text-yellow_1 transition-all ease-in-out duration-200"
                  >
                    <FaCircleUser />
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="bg-primary_color_1 px-5 py-2 rounded-md text-md font-semibold font-poppins text-primary_white_1 hover:bg-yellow_1 transition-all ease-in-out duration-200 hover:text-black"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="font-poppins font-bold tracking-wide px-4 py-2  ml-4 rounded-md bg-primary_color_1 transition ease-in-out duration-400 text-primary_white_1 hover:bg-yellow_1 hover:text-gray-800"
                >
                  Get Started
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
