import { useEffect } from "react";
import { addMovieTrailer } from "../store/movieSlice";
import { OPTIONS } from "../utils/constants";
import { TRAILER_URL } from "../utils/api";

import { useDispatch } from "react-redux";

const useMovieBg = (movieId) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(TRAILER_URL + movieId + `/videos`, OPTIONS);
    const res = await data.json();
    const trailer = res?.results?.filter((e) => e?.type === "Trailer");
    if (!trailer) return;
    dispatch(addMovieTrailer(trailer[0]));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieBg;
