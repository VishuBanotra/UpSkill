import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../app/actions/authAction.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(userSignIn({ username, password })).then((data) => {
      const res = data.payload;
      if (res.success) {
        navigate("/");
      } else {
        setErrorMessage(res.message);
      }
    });
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
            {errorMessage ? (
              <p className="text-xs font-semibold flex gap-1 items-center text-red-700">
                <span>
                  <RiErrorWarningFill />
                </span>
                {errorMessage}
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
            <span
              className=" cursor-pointer text-right mb-5 text-sm font-semibold py-[0.5px] text-primary_color_2 hover:text-yellow_1"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              Show Password
            </span>

            <button className="px-3 py-3 text-sm font-semibold uppercase tracking-wide  bg-primary_color_1 hover:bg-yellow_1 text-white hover:text-neutral-800 transition-all duration-200 ease-in-out flex items-center justify-center gap-3">
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 animate-spin"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : (
                "Login"
              )}
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
