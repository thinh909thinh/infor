import axios from "axios";

import * as Types from "../type/index";
const API_KEY = "d2f63dd168f33d5c5a287a925473de86";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      dispatch({
        type: Types.GET_NETFLIX_ORIGINALS,
        payload: result.data.results,
      });
    } catch (error) {
      console.log("Get Netflix Originals error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const getTrendingMovies = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
      );
      dispatch({
        type: Types.GET_TRENDING_MOVIES,
        payload: result.data.results,
      });
    } catch (error) {
      console.log("Get Trending movies error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const getTopRatedMovies = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      dispatch({
        type: Types.GET_TOP_RATED_MOVIES,
        payload: result.data.results,
      });
    } catch (error) {
      console.log("Get Top rate movies error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const getActionMovies = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2f63dd168f33d5c5a287a925473de86&with_genres=28`
      );

      dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Action movies error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const getComedyMovies = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2f63dd168f33d5c5a287a925473de86&with_genres=35`
      );

      dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Comedy Movies error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const getHorrorMovies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2f63dd168f33d5c5a287a925473de86&with_genres=27`
      );
      dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Horror Movies error: ", error);
    }
  };
};

export const getRomanceMovies = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2f63dd168f33d5c5a287a925473de86&with_genres=10749`
      );
      dispatch({
        type: Types.GET_ROMANCE_MOVIES,
        payload: result.data.results,
      });
    } catch (error) {
      console.log("Get Romance Movies error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const getDocumentaries = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d2f63dd168f33d5c5a287a925473de86&language=en-US&page=99`
      );
      dispatch({ type: Types.GET_DOCUMENTARIES, payload: result.data.results });
    } catch (error) {
      console.log("Get Documentaries error: ", error);
    }
    localStorage.setItem("listItems", JSON.stringify(getState().infoMovies));
  };
};

export const setMovieDetails = (movie) => (dispatch) => {
  // console.log("move", movie);
  dispatch({ type: Types.SET_MOVIE_DETAILS, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get search movies error: ", error);
  }
};
