import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../action_types/searchTypes';
import {searchMovies} from '../services/searchServices';
import {searchMoviesSuccess} from '../actions/searchActions';
import {fetchFailed} from '../actions/globalStateAction';

function* searchMoviesSaga(action: any): any {
  try {
    const movies = yield call(searchMovies, action.payload);
    yield put(searchMoviesSuccess(movies));
  } catch (error: any) {
    yield put(fetchFailed({error: error, state: types.SEARCH_MOVIES_REQUEST}));
  }
}

function* searchSaga() {
  yield takeLatest(types.SEARCH_MOVIES_REQUEST, searchMoviesSaga);
}

export default searchSaga;
