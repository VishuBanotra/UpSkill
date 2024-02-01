import React from "react";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  let copyright = String.fromCodePoint(0x00a9);

  return (
    <section className="w-full h-[40vh] p-4 md:p-5 mt-[100px] md:mt-[150px] font-poppins">
      <div className="lg:w-[80%] m-auto grid grid-cols md:grid-cols-2 divide-x divide-y-2 lg:grid-cols-4 gap-4">
        <div className="p-3">
          <img
            className="h-11"
            src="https://skillup.1onestrong.com/wp-content/uploads/2023/11/Logo-03.png"
            alt=""
          />
          <div className=" flex items-center gap-5 mt-5">
            <IoLogoWhatsapp className="text-[43px] text-yellow_1 py-1" />
            <div>
              <p className="font-semibold tracking-wide">Whatsapp</p>
              <p className="text-sm tracking-wide ">7855879641</p>
            </div>
          </div>
          <div className=" flex items-center gap-5 mt-5">
            <MdEmail className="text-[43px] text-yellow_1 py-1" />
            <div>
              <p className="font-semibold tracking-wide">E-mail</p>
              <p className="text-sm tracking-wide">upskill@mail.com</p>
            </div>
          </div>
        </div>

        <div className="p-3 ">
          <h2 className="font-semibold tracking-wide ">Company</h2>
          <p className="text-sm tracking-wide py-1">About</p>
          <p className="text-sm tracking-wide py-1">What we can offer</p>
          <p className="text-sm tracking-wide py-1">Our Course</p>
          <p className="text-sm tracking-wide py-1">Careers</p>
        </div>

        <div className="p-3">
          <h2 className="font-semibold tracking-wide">Teaching</h2>
          <p className="text-sm tracking-wide py-1">Become a Teacher</p>
          <p className="text-sm tracking-wide py-1">Teacher Help Center</p>
          <p className="text-sm tracking-wide py-1">Rules and Requirements</p>
          <p className="text-sm tracking-wide py-1">Leadership</p>
        </div>

        <div className="p-3">
          <h2 className="font-semibold tracking-wide">Connect with us</h2>
          <div>
            <a
              target="blank"
              href="https://www.linkedin.com/in/vishu-vishal-banotra-107828160/"
            >
              <FaLinkedin className="text-[43px]  hover:text-primary_color_1 transition-all ease-in-out duration-200 text-yellow_1 py-1" />
            </a>
            <a target="blank" href="https://github.com/vishubanotra">
              <FaGithub className="text-[43px] hover:text-primary_color_1 transition-all ease-in-out duration-200  text-yellow_1 py-1" />
            </a>
          </div>
        </div>
      </div>
      <h2 className="py-[53px] text-center tracking-wide">
        Copyright {copyright} 2024 | Made by Vishu
      </h2>
    </section>
  );
};

export default Footer;
