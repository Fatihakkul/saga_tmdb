import { Movie } from '../../types/movieType';
import * as types from '../action_types/favoriteTypes'

export const addToFavorites = (movie: Movie) => ({
  type: types.ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId: number) => ({
  type: types.REMOVE_FROM_FAVORITES,
  payload: movieId,
});
