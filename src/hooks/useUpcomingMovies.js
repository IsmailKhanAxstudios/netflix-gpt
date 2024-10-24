import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { UPCOMING_MOVIES_URL } from "../utils/api";
import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await fetch(UPCOMING_MOVIES_URL, OPTIONS);
    const data = await res.json();
    dispatch(addUpcommingMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useUpcomingMovies;
