import {Movie, MovieDetail} from '../types/movieType';

export const convertMovieDetailToMovie = (movie: MovieDetail): Movie => {
  return {
    adult: movie.adult,
    backdrop_path: movie.backdrop_path,
    genre_ids: movie.genres.map(item => item.id),
    id: movie.id,
    original_language: movie.original_language,
    original_title: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    title: movie.title,
    video: movie.video,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
  };
};

export  const createGetItemLayout = (itemSize: number, separatorSize: number) => {
  return (_: any, index: number) => ({
    length: itemSize + separatorSize,
    offset: (itemSize + separatorSize) * index,
    index,
  });
};
