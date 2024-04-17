import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="px-6 mx-2 py-2 rounded cursor-pointer text-white">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded cursor-pointer text-white pr-4 bg-red-600">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button className="px-6 mx-2 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 rounded cursor-pointer text-white pr-4 bg-red-600">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
