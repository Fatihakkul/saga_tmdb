import api from './client';

export const searchMovies = async (query: string) => {
  try {
    const {data} = await api.get('/search/movie', {
      params: {query},
    });
    return data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};
