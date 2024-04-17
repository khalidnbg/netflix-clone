import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebas";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import noImage from "../assets/no-img.png";

import { useNavigate } from "react-router-dom";

const Movie = ({ item, id }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const navigate = useNavigate();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <>
      <div
        onClick={() => navigate(`/${item.id}/`)}
        key={id}
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
        <div className="">
          <img
            className="w-full h-auto block "
            width="50px"
            src={
              item?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`
                : noImage
            }
            alt={item?.title}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="whitespace-normal text-xs font-bold h-full flex justify-center items-center text-center md:text-xs">
            {item?.title}
          </p>

          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
