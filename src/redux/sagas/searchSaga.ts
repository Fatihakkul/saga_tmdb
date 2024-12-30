import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../action_types/searchTypes'
import {searchMovies} from '../../services/api';
import { searchMoviesSuccess } from '../actions/searchActions';


function* searchMoviesSaga(action: any): any {
  try {
    const movies = yield call(searchMovies, action.payload);
    yield put(searchMoviesSuccess(movies));
  } catch (error: any) {
    yield put({type: types.SEARCH_MOVIES_FAILURE, payload: error.message});
  }
}

function* searchSaga() {
  yield takeLatest(types.SEARCH_MOVIES_REQUEST, searchMoviesSaga);
}

export default searchSaga;
