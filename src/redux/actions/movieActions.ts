

import { Movie } from '../../types/movieType';
import * as types from '../action_types/moviesTypes'



export const fetchMovieDetailRequest = (movieId:string) => ({
  type: types.FETCH_MOVIE_REQUEST,
  payload: movieId
});

export const fetchMovieDetailSuccess = (movie:any) => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload: movie
});


export const fetchMoviesRequest = () => ({
  type: types.FETCH_POPULAR_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies: Movie[]) => ({
  type:  types.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error: string) => ({
  type:  types.FETCH_POPULAR_MOVIES_FAILURE,
  payload: error,
});


export const loadMoreMoviesRequest = () => ({
  type: types.LOAD_FETCH_POPULAR_MOVIES_REQUEST,
});

export const loadMoreMoviesSuccess = (movies: any) => ({
  type:  types.LOAD_FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const loadMoreMoviesFailure = (error: string) => ({
  type:  types.LOAD_FETCH_POPULAR_MOVIES_FAILURE,
  payload: error,
});

