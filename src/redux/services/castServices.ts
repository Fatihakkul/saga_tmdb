import api from './client';

export const getArtistDetails = async (artistId: string) => {
  try {
    const detailsResponse = await api.get(`/person/${artistId}`);
    return detailsResponse.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
