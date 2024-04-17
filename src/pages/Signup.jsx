import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/6d6fcf45-eaed-4742-8aa4-23ff6a606446/MA-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-800 rounded"
                  type="email"
                  placeholder="Email..."
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-800 rounded"
                  type="password"
                  placeholder="Password..."
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 font-bold">
                  Sign Ip
                </button>

                <div className="flex justify-between items-center text-sm text-gray-300">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="py-8">
                  <span className="text-gray-500">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
