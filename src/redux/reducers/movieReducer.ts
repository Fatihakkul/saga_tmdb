import {ICast, Movie, MovieDetail} from '../../types/movieType';
import * as types from '../action_types/moviesTypes';

interface MovieState {
  movies: Movie[];
  page: number;
  totalPage: number;
  error: any;
  loading: boolean;
  movieDetail: {
    movie: MovieDetail;
    similar: Movie[];
    cast: ICast[];
  };
}

const initialState: MovieState = {
  movies: [],
  error: undefined,
  loading: false,
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
      return {...state, loading: true};
    case types.FETCH_MOVIE_SUCCESS:
      return {...state, movieDetail: action.payload, loading: false};
    case types.FETCH_MOVIE_FAILURE:
      return {...state, error: action.payload?.message ?? true, loading: false};
    case types.FETCH_POPULAR_MOVIES_REQUEST:
      return {...state, movies: [], loading: true};
    case types.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.results,
        page: action.payload.page,
        totalPage: action.payload.total_pages,
        loading: false,
      };
    case types.FETCH_POPULAR_MOVIES_FAILURE:
      return {...state, error: action.payload?.message ?? true, loading: false};
    case types.LOAD_FETCH_POPULAR_MOVIES_REQUEST:
      return {...state, page: state.page + 1, loading: true};
    case types.LOAD_FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        page: action.payload.page,
        loading: false,
      };
    case types.LOAD_FETCH_POPULAR_MOVIES_FAILURE:
      return {...state, error: action.payload?.message ?? true, loading: false};
    default:
      return state;
  }
};

export default movieReducer;
