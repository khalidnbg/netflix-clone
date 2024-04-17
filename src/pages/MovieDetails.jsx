import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import "./style.css";
import requests from "../Requests";
import Wrapper from "../components/Wrapper";
import noImage from "../assets/no-img.png";
import Img from "../components/Img";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const url = `${requests.baseUrl}/${id}?api_key=6a0d8bde3aa8b637cd935763f970255f`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, [url]);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      <div className="backdrop-img">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
          alt={movieDetails?.title}
          className="backdrop-img"
        />
      </div>
      <div className="opacity-layer"></div>
      <Wrapper>
        <div className="content">
          <div className="left">
            {movieDetails?.poster_path ? (
              <Img
                className="posterImg"
                src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
              />
            ) : (
              <Img className="posterImg" src={noImage} />
            )}
          </div>

          <div className="right">
            <div className="title">{`${
              movieDetails?.name || movieDetails?.title
            } (${dayjs(movieDetails?.releas_date).format("YYYY")})`}</div>
            <div className="subtitle">{movieDetails?.tagline}</div>
            <div className="row">
              Rating: {movieDetails?.vote_average.toFixed(1)}
            </div>
            <div className="overview">
              <div className="heading">Overview</div>
              <div className="description">{movieDetails?.overview}</div>
            </div>

            <div className="info">
              {movieDetails?.status && (
                <div className="infoItem">
                  <span className="text bold">status: </span>
                  <span className="text">{movieDetails?.status} </span>
                </div>
              )}
              {" -- "}
              {movieDetails?.release_date && (
                <div className="infoItem">
                  <span className="text bold"> Release Date: </span>
                  <span className="text">
                    {dayjs(movieDetails?.release_date).format("MMM D, YYYY")}
                  </span>
                </div>
              )}
              {"--"}
              {movieDetails?.runtime && (
                <div className="infoItem">
                  <span className="text bold">Runtime: </span>
                  <span className="text">
                    {toHoursAndMinutes(movieDetails?.runtime)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MovieDetails;
