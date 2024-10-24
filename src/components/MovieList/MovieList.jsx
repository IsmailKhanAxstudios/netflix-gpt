import React from "react";
import { IMG_PATH } from "../../utils/constants";

const MovieList = ({ movies, title }) => {
  console.log(movies, title, "TESTDATA");
  return (
    <div className="relative bg-black">
      <h1 className="">{title}</h1>

      <div className="overflow-x-auto flex w-full gap-4 ">
        {movies?.map((t, index) => {
          return (
            <div key={index} className="shrink-0">
              <img
                src={IMG_PATH + t?.poster_path}
                className="w-32 h-auto"
                alt={t?.title || "Movie Poster"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
