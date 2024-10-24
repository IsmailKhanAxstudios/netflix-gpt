import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { NOW_PLAYING_MOVIES_URL } from "../utils/api";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(NOW_PLAYING_MOVIES_URL, OPTIONS);
    const data = await res.json();
    dispatch(addNowPlayingMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
