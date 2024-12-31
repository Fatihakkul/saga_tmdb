import {call, put} from 'redux-saga/effects';
import {
  fetchFailed,
  startRequest,
  stopRequest,
} from '../actions/globalStateAction';

export function createLoadingWatcher(actionType: string, saga: any) {
  return function* (action: any) {
    try {
      yield put(startRequest(actionType));
      yield call(saga, action);
      yield put(stopRequest(actionType));
    } catch (error: any) {
      yield put(fetchFailed({error: error, state: actionType}));
    }
  };
}
