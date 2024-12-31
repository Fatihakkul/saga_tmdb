import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../action_types/artistTypes';
import {getArtistDetails} from '../services/castServices';
import {fetchArtistDetailSuccess} from '../actions/artistAction';
import {createLoadingWatcher} from './globalStateWatcherSaga';

function* fetchArtistDetailSaga(action: any): any {
  const artist = yield call(getArtistDetails, action.payload);
  yield put(fetchArtistDetailSuccess(artist));
}

function* artistSaga() {
  yield takeLatest(
    types.FETCH_ARTIST_REQUEST,
    createLoadingWatcher(types.FETCH_ARTIST_REQUEST, fetchArtistDetailSaga),
  );
}

export default artistSaga;
