import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as types from '../action_types/moviesTypes';
import {
  fetchMoviesSuccess,
  fetchMovieDetailSuccess,
  loadMoreMoviesSuccess,
} from '../actions/movieActions';
import {
  fetchLoadPopularMovies,
  fetchPopularMovies,
  getMovieDetails,
} from '../services/movieServices';
import {RootState} from '../store';
import {createLoadingWatcher} from './globalStateWatcherSaga';

function* fetchMoviesSaga(): any {
  const movies = yield call(fetchPopularMovies);
  yield put(fetchMoviesSuccess(movies));
}

function* fetchMovieDetailSaga(action: any): any {
  const movies = yield call(getMovieDetails, action.payload);
  yield put(fetchMovieDetailSuccess(movies));
}

function* fetchLoadMoviesSaga(): any {
  const currentState = yield select((state: RootState) => state.movie.page);
  const movies = yield call(fetchLoadPopularMovies, currentState);
  yield put(loadMoreMoviesSuccess(movies));
}

function* movieSaga() {
  yield takeLatest(
    types.FETCH_POPULAR_MOVIES_REQUEST,
    createLoadingWatcher(types.FETCH_POPULAR_MOVIES_REQUEST, fetchMoviesSaga),
  );
  yield takeLatest(
    types.FETCH_MOVIE_REQUEST,
    createLoadingWatcher(types.FETCH_MOVIE_REQUEST, fetchMovieDetailSaga),
  );
  yield takeLatest(
    types.LOAD_FETCH_POPULAR_MOVIES_REQUEST,
    createLoadingWatcher(
      types.LOAD_FETCH_POPULAR_MOVIES_REQUEST,
      fetchLoadMoviesSaga,
    ),
  );
}

export default movieSaga;
