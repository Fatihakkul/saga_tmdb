import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as types from '../action_types/moviesTypes';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovieDetailSuccess,
  loadMoreMoviesSuccess,
} from '../actions/movieActions';
import {
  fetchLoadPopularMovies,
  fetchPopularMovies,
  getMovieDetails,
} from '../services/api';
import { RootState } from '../store';


function* fetchMoviesSaga(): any {
  try {
    const movies = yield call(fetchPopularMovies);
    yield put(fetchMoviesSuccess(movies));
  } catch (error: any) {
    yield put(fetchMoviesFailure(error));
  }
}

function* fetchMovieDetailSaga(action: any): any {
  try {
    const movies = yield call(getMovieDetails, action.payload);
    yield put(fetchMovieDetailSuccess(movies));
  } catch (error: any) {
    yield put(fetchMoviesFailure(error));
  }
}

function* fetchLoadMoviesSaga(): any {
  try {
    const currentState = yield select((state:RootState)=>state.movie.page)
    const movies = yield call(fetchLoadPopularMovies,currentState);
    yield put(loadMoreMoviesSuccess(movies));
  } catch (error: any) {
    yield put(fetchMoviesFailure(error));
  }
}

function* movieSaga() {
  yield takeLatest(types.FETCH_POPULAR_MOVIES_REQUEST, fetchMoviesSaga);
  yield takeLatest(types.FETCH_MOVIE_REQUEST, fetchMovieDetailSaga);
  yield takeLatest(types.LOAD_FETCH_POPULAR_MOVIES_REQUEST,fetchLoadMoviesSaga)
}

export default movieSaga;
