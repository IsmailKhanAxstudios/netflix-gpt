import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { POPULAR_MOVIES_URL } from "../utils/api";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(POPULAR_MOVIES_URL, OPTIONS);
    const data = await res.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default usePopularMovies;
