import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import BackgroundTitle from "../BackgroundTitle/BackgroundTitle";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const MainContent = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  if (!movies) return;

  console.log(movies, "In Main Content");
  return (
    <div>
      <BackgroundTitle title={movies[3]?.title} desc={movies[3]?.overview} />
      <BackgroundVideo movieId={movies[3]?.id} />
    </div>
  );
};

export default MainContent;
