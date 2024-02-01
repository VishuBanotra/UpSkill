import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connection } from "../../config/config.js";
import { RiErrorWarningFill } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${connection}/user/login`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = res.data.token;
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      setSuccess(res.data.success);
    }
  };

  return (
    <section className="font-poppins tracking-wide mt-[53px] box-border">
      <div className="flex justify-center items-center p-10">
        <div className="w-[430px] h-[600px] p-4 pt-[100px]  border-primary_color_1 border-opacity-35 border-y-[5px]">
          <img
            className="h-11 block ml-auto mr-auto"
            src="https://skillup.1onestrong.com/wp-content/uploads/2023/11/Logo-03.png"
            alt=""
          />
          <h2 className="text-lg font-semibold text-center mt-6 mb-3 text-neutral-800">
            Login to your Upskill account
          </h2>
          <form onSubmit={submitHandler} className="flex flex-col">
            {success == false ? (
              <p className="text-xs font-semibold flex gap-1 items-center text-red-700">
                <span>
                  <RiErrorWarningFill />
                </span>
                Credentials are incorrect. Try Again
              </p>
            ) : null}

            <input
              className="border-2 border-gray-500 px-3 py-3 mb-8 text-sm placeholder:font-semibold  placeholder:text-neutral-500 outline-none"
              placeholder="Email"
              type="email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="border-2 border-gray-500 px-3 py-3 text-sm placeholder:font-semibold placeholder:text-neutral-500 outline-none"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
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
              Login
            </button>
            <div className="flex gap-2 font-semibold pt-3">
              <p>Don't have an account ?</p>
              <Link
                className="text-primary_color_2 transition-all ease-in-out  hover:text-yellow_1"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
