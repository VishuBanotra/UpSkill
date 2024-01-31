import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Course", link: "/courses" },
    { name: "Bootcamp", link: "/bootcamp" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="w-full shadow-md sticky top-0 bg-white z-[999]">
      <div className=" md:m-auto md:flex md:justify-between md:items-center py-6 md:py-6 px-[43px]">
        <div>
          <Link>
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
            <div className="md:mt-0 mt-4">
              <Link to={"/login"} className="font-poppins font-bold tracking-wide px-4 py-2  ml-4 rounded-md bg-primary_color_1 transition ease-in-out duration-400 text-primary_white_1 hover:bg-yellow_1 hover:text-gray-800">
                Get Started
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
