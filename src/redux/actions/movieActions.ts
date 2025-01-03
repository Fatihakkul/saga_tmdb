import {Movie, MovieDetail} from '../../types/movieType';
import * as types from '../action_types/moviesTypes';

export const fetchMovieDetailRequest = (movieId: string) => ({
  type: types.FETCH_MOVIE_REQUEST,
  payload: movieId,
});

export const fetchMovieDetailSuccess = (movie: MovieDetail) => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const fetchMoviesRequest = () => ({
  type: types.FETCH_POPULAR_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies: Movie[]) => ({
  type: types.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const loadMoreMoviesRequest = () => ({
  type: types.LOAD_FETCH_POPULAR_MOVIES_REQUEST,
});

export const loadMoreMoviesSuccess = (movies: Movie[]) => ({
  type: types.LOAD_FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});
