import {IArtistDetails} from '../../types/CastType';
import * as types from '../action_types/artistTypes';

export const fetchArtistDetailRequest = (artistId: string) => ({
  type: types.FETCH_ARTIST_REQUEST,
  payload: artistId,
});

export const fetchArtistDetailSuccess = (artist: IArtistDetails) => ({
  type: types.FETCH_ARTIST_SUCCESS,
  payload: artist,
});
