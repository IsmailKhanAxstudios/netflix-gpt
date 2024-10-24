import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    },
    addPopularMovies: (state, action) => {
      return {
        ...state,
        popularMovies: action.payload,
      };
    },
    addTopRatedMovies: (state, action) => {
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    },
    addUpcommingMovies: (state, action) => {
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    },

    addMovieTrailer: (state, action) => {
      return {
        ...state,
        movieTrailer: action.payload,
      };
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcommingMovies,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
