import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillSecurityScan,
} from "react-icons/ai";

const Signup = () => {
  return (
    <div className="flex font-nunito container mx-auto">
      <div className="w-1/2 flex flex-col items-center	justify-center">
        <div className="w-[500px] h-[500px] text-center border border-primary rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-primary mb-6 ">Signup</h2>
          <div className="relative mb-5">
            <AiOutlineUser className="text-3xl text-primary absolute top-[12px] left-[20px]" />
            <input
              placeholder="Username"
              type="text"
              className="w-full px-16 py-4 border-b border-[#5C8EF5] outline-0 rounded-lg text-lg"
            />
          </div>
          <div className="relative mb-5">
            <AiOutlineMail className="text-3xl text-primary absolute top-[12px] left-[20px]" />
            <input
              placeholder="Email address"
              type="email"
              className="w-full px-16 py-4 border-b border-[#5C8EF5] outline-0 rounded-lg text-lg"
            />
          </div>
          <div className="relative mb-5">
            <AiFillSecurityScan className="text-3xl text-primary absolute top-[12px] left-[20px]" />
            <input
              placeholder="Password"
              type="password"
              className="w-full px-16 py-4 border-b border-[#5C8EF5] outline-0 rounded-lg text-lg"
            />
          </div>

          <button className="bg-primary w-full p-4 rounded-3xl font-semibold text-2xl text-white">
            Signup
          </button>

          <p className="mt-3">
            Have an Account?{" "}
            <Link className="text-[#F55D90] font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <picture>
          <img
            className="h-screen object-contain	"
            src="assets/signUp.webp"
            alt="signUpPic"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Signup;
