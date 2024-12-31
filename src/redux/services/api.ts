import api from './client';

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get('/movie/popular');
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchLoadPopularMovies = async (page: number) => {
  try {
    const response = await api.get(`/movie/popular?page=${page}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getMovieDetails = async (movieId: string) => {
  try {
    const detailsResponse = await api.get(`/movie/${movieId}`);
    const similarResponse = await api.get(`/movie/${movieId}/similar`);
    const castResponse = await api.get(`/movie/${movieId}/credits`);
    return {
      movie: detailsResponse.data,
      similar: similarResponse.data.results,
      cast: castResponse.data.cast,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

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

export default api;
