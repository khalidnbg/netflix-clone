import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/6d6fcf45-eaed-4742-8aa4-23ff6a606446/MA-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>

        <div className="absolute top-[30%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
