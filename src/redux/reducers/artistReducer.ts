import {IArtistDetails} from '../../types/CastType';
import * as types from '../action_types/artistTypes';

interface ArtistState {
  artist: IArtistDetails;
}

const initialState: ArtistState = {
  artist: {} as IArtistDetails,
};

const artistReducer = (state = initialState, action: any): ArtistState => {
  switch (action.type) {
    case types.FETCH_ARTIST_REQUEST:
      return {...state};
    case types.FETCH_ARTIST_SUCCESS:
      return {...state, artist: action.payload};
    default:
      return state;
  }
};

export default artistReducer;
