import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connection } from "../../config/config.js";
import { RiErrorWarningFill } from "react-icons/ri";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const signup = await axios.post(
      `${connection}/user/signup`,
      { name, username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = signup.data;
    const isRegistered = res.success;

    if (isRegistered === true) {
      navigate("/login");
    } else {
      setSuccess(res.success);
    }
  };

  return (
    <section className="font-poppins tracking-wide mt-[53px] box-border">
      <div className="flex justify-center items-center p-10">
        <div className="w-[430px] h-[600px] p-4 pt-[50px]  border-primary_color_1 border-opacity-35 border-y-[5px]">
          <img
            className="h-11 block ml-auto mr-auto mb-5"
            src="https://skillup.1onestrong.com/wp-content/uploads/2023/11/Logo-03.png"
            alt=""
          />

          <form onSubmit={submitHandler} className="flex flex-col">
            <input
              className="border-2 border-gray-500 px-3 py-3 mb-8 text-sm placeholder:font-semibold  placeholder:text-neutral-500 outline-none"
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            {success == false ? (
              <p className="text-xs text-red-700 flex items-center gap-2 ">
                <span>
                  <RiErrorWarningFill />
                </span>
                Email already exists
              </p>
            ) : null}

            <input
              className="border-2 border-gray-500 px-3 py-3 mb-8 text-sm placeholder:font-semibold  placeholder:text-neutral-500 outline-none"
              placeholder="Email"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="border-2 border-gray-500 px-3 py-3 text-sm placeholder:font-semibold placeholder:text-neutral-500 outline-none mb-8"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="border-2 border-gray-500 px-3 py-3 text-sm placeholder:font-semibold placeholder:text-neutral-500 outline-none"
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"}
            />
            <p
              className=" cursor-pointer text-right mb-5 text-sm font-semibold py-[0.5px] text-primary_color_2 hover:text-yellow_1"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              Show Password
            </p>
            <button className="px-3 py-3 text-sm font-semibold uppercase tracking-wide  bg-primary_color_1 hover:bg-yellow_1 text-white hover:text-neutral-800 transition-all duration-200 ease-in-out">
              SIGNUP
            </button>
            <div className="flex gap-2 font-semibold pt-3">
              <p>Already Registered ?</p>
              <Link
                className="text-primary_color_2 transition-all ease-in-out  hover:text-yellow_1"
                to="/login"
              >
                Login Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
