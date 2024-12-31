import * as types from '../action_types/globalStatetypes';

export const startRequest = (actionType: string) => ({
  type: types.FETCH_LOADING_START,
  payload: actionType,
});

export const stopRequest = (actionType: string) => ({
  type: types.FETCH_LOADING_STOP,
  payload: actionType,
});

export const fetchFailed = (payload: {state: string; error: any}) => ({
  type: types.FETCH_ERROR,
  payload: payload,
});
