import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { TOP_RATED_MOVIES_URL } from "../utils/api";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(TOP_RATED_MOVIES_URL, OPTIONS);
    const data = await res.json();
    dispatch(addTopRatedMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useTopRatedMovies;
