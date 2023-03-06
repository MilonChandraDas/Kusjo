import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillSecurityScan } from "react-icons/ai";

const Login = () => {
  return (
    <div className="flex font-nunito container mx-auto">
      <div className="w-1/2 flex flex-col items-center	justify-center">
        <div className="w-[500px] h-[500px] text-center border border-[#F55D90] rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-[#F55D90] mb-10 ">Login</h2>

          <div className="relative mb-5">
            <AiOutlineMail className="text-3xl text-[#F55D90] absolute top-[12px] left-[20px]" />
            <input
              placeholder="Email address"
              type="email"
              className="w-full px-16 py-4 border-b border-[#F55D90] outline-0 rounded-lg text-lg"
            />
          </div>
          <div className="relative mb-5">
            <AiFillSecurityScan className="text-3xl text-[#F55D90] absolute top-[12px] left-[20px]" />
            <input
              placeholder="Password"
              type="password"
              className="w-full px-16 py-4 border-b border-[#F55D90] outline-0 rounded-lg text-lg"
            />
          </div>

          <button className="bg-[#F55D90] w-full p-4 rounded-3xl font-semibold text-2xl text-white">
            Login
          </button>

          <p className="mt-3">
            Don't Have an Account?{" "}
            <Link className="text-primary font-bold" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <picture>
          <img
            className="h-screen object-contain	"
            src="assets/Login.webp"
            alt="signUpPic"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Login;
