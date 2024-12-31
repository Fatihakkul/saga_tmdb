import * as types from '../action_types/globalStatetypes';

interface GlobalState {
  failed: {
    state?: string;
    error: any;
  };
  loading: boolean;
  activeRequests: string[];
}

const initialState: GlobalState = {
  failed: {state: undefined, error: undefined},
  loading: false,
  activeRequests: [],
};

const globalReducer = (state = initialState, action: any): GlobalState => {
  switch (action.type) {
    case types.FETCH_LOADING_START:
      return {
        ...state,
        loading: true,
        activeRequests: [...state.activeRequests, action.payload],
      };
    case types.FETCH_LOADING_STOP:
      return {
        ...state,
        loading: false,
        activeRequests: state.activeRequests.filter(
          request => request !== action.payload,
        ),
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        failed: {state: action.payload.state, error: action.payload.error},
        loading: false,
      };
    default:
      return state;
  }
};

export default globalReducer;
