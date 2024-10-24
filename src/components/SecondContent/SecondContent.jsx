import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
const SecondContent = () => {
  const movies = useSelector((state) => state.movies);
  const nowPlayingMovies = movies?.nowPlayingMovies;
  const popularMovies = movies?.popularMovies;
  const topRatedMovies = movies?.topRatedMovies;
  const upcomingMovies = movies?.upcomingMovies;
  return (
    <div>
      <div className="-mt-20">
        {" "}
        <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      </div>

      <MovieList title="PopularMovies" movies={popularMovies} />
      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </div>
  );
};

export default SecondContent;
