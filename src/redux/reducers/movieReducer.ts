import {ICast} from '../../types/CastType';
import {Movie, MovieDetail} from '../../types/movieType';
import * as types from '../action_types/moviesTypes';

interface MovieState {
  movies: Movie[];
  page: number;
  totalPage: number;
  movieDetail: {
    movie: MovieDetail;
    similar: Movie[];
    cast: ICast[];
  };
}

const initialState: MovieState = {
  movies: [],
  page: 0,
  totalPage: 0,
  movieDetail: {
    movie: {} as MovieDetail,
    similar: [],
    cast: [],
  },
};

const movieReducer = (state = initialState, action: any): MovieState => {
  switch (action.type) {
    case types.FETCH_MOVIE_REQUEST:
      return {...state};
    case types.FETCH_MOVIE_SUCCESS:
      return {...state, movieDetail: action.payload};
    case types.FETCH_POPULAR_MOVIES_REQUEST:
      return {...state, movies: []};
    case types.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.results,
        page: action.payload.page,
        totalPage: action.payload.total_pages,
      };
    case types.LOAD_FETCH_POPULAR_MOVIES_REQUEST:
      return {...state, page: state.page + 1};
    case types.LOAD_FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        page: action.payload.page,
      };
    default:
      return state;
  }
};

export default movieReducer;
