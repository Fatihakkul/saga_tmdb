import {Movie} from '../../types/movieType';
import * as types from '../action_types/searchTypes';

interface MovieState {
  movies: Movie[];
  loading: boolean;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
};

const searchReducer = (state = initialState, action: any): MovieState => {
  switch (action.type) {
    case types.SEARCH_MOVIES_REQUEST:
      return {...state, loading: true};
    case types.SEARCH_MOVIES_SUCCESS:
      return {...state, movies: action.payload, loading: false};
    case types.SEARCH_CLEAR:
      return {...state, movies: action.payload, loading: false};
    default:
      return state;
  }
};

export default searchReducer;
