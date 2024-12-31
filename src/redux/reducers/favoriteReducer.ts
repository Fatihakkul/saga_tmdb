import {Movie} from '../../types/movieType';
import * as types from '../action_types/favoriteTypes';

interface FavoriteState {
  favorites: Movie[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action: any): FavoriteState => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case types.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie: Movie) => movie.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
