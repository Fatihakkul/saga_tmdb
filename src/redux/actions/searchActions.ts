import {Movie} from '../../types/movieType';
import * as types from '../action_types/searchTypes';

export const searchMoviesRequest = (query: string) => ({
  type: types.SEARCH_MOVIES_REQUEST,
  payload: query,
});

export const searchMoviesSuccess = (movies: Movie[]) => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

export const searchMoviesFailure = (error: string) => ({
  type: types.SEARCH_MOVIES_FAILURE,
  payload: error,
});

export const clearSearch = () => ({
  type: types.SEARCH_CLEAR,
  payload: [],
});
