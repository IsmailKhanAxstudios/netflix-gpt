import React from "react";
import useMovieBg from "../../hooks/useMovieBg";
import { useSelector } from "react-redux";
import { BG_TRAILER_URL } from "../../utils/constants";

const BackgroundVideo = ({ movieId }) => {
  useMovieBg(movieId);

  const movieTrailer = useSelector((state) => state.movies.movieTrailer);

  if (!movieTrailer) return;

  const trailerId = movieTrailer?.key;

  console.log(movieTrailer);
  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={BG_TRAILER_URL + trailerId + "?autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
